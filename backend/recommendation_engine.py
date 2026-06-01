import sqlite3
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import datetime
import os

class RecomendaJogosEngine:
    def __init__(self, db_filename='sistema.db'):
        self.base_dir = os.path.dirname(os.path.abspath(__file__))
        self.db_path = os.path.join(self.base_dir, '..', 'database', db_filename)
        self._init_db()

    def _init_db(self):
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
        if not os.path.exists(self.db_path) or os.path.getsize(self.db_path) == 0:
            schema_path = os.path.join(self.base_dir, '..', 'database', 'schema.sql')
            with open(schema_path, 'r', encoding='utf-8') as f:
                script = f.read()
            conn = sqlite3.connect(self.db_path)
            conn.executescript(script)
            conn.commit()
            conn.close()
        
    def _get_connection(self):
        conn = sqlite3.connect(self.db_path)
        conn.execute("PRAGMA foreign_keys = ON;")
        return conn

    def _verificar_limite_requisicoes(self, usuario_id, conn):
        uma_hora_atras = datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(hours=1)
        uma_hora_atras_str = uma_hora_atras.strftime('%Y-%m-%d %H:%M:%S')
        
        query = """
            SELECT COUNT(*) FROM log_requisicoes_ia 
            WHERE usuario_id = ? AND data_hora >= ?
        """
        cursor = conn.cursor()
        cursor.execute(query, (usuario_id, uma_hora_atras_str))
        count = cursor.fetchone()[0]
        
        if count >= 10:
            raise Exception("Limite de 10 atualizações por hora excedido. Tente novamente mais tarde.")
            
        cursor.execute("INSERT INTO log_requisicoes_ia (usuario_id) VALUES (?)", (usuario_id,))
        conn.commit()

    def _carregar_dados(self, conn):
        jogos_df = pd.read_sql_query("SELECT * FROM jogos", conn)
        jogos_df['genero'] = jogos_df['genero'].fillna('')
        jogos_df['tags'] = jogos_df['tags'].fillna('')
        jogos_df['features'] = jogos_df['genero'] + "," + jogos_df['tags']
        return jogos_df

    def gerar_recomendacoes(self, usuario_id, limite=5, genero_filtro=None):
        conn = self._get_connection()
        
        try:
            self._verificar_limite_requisicoes(usuario_id, conn)
            
            jogos_df = self._carregar_dados(conn)
            avaliacoes_df = pd.read_sql_query(
                "SELECT jogo_id, nota FROM historico_avaliacoes WHERE usuario_id = ?", 
                conn, params=(usuario_id,)
            )
            
            if avaliacoes_df.empty:
                return self._fallback_recomendacao_popular(jogos_df, limite, genero_filtro)
                
            count_vec = CountVectorizer(tokenizer=lambda x: x.split(','), token_pattern=None)
            features_matrix = count_vec.fit_transform(jogos_df['features'])
            cosine_sim = cosine_similarity(features_matrix, features_matrix)
            
            jogos_avaliados = avaliacoes_df['jogo_id'].tolist()
            notas_usuario = avaliacoes_df.set_index('jogo_id')['nota'].to_dict()
            
            gosta_multi_rapido = False
            gosta_dif_elevada = False
            gosta_narrativa = False
            
            jogos_jogados_df = jogos_df[jogos_df['id'].isin(jogos_avaliados)]
            
            multi_jogados = jogos_jogados_df[jogos_jogados_df['multiplayer_rapido'] == 1]
            if not multi_jogados.empty:
                media_multi = sum([notas_usuario[j_id] for j_id in multi_jogados['id'] if j_id in notas_usuario]) / len(multi_jogados)
                if media_multi >= 4.0:
                    gosta_multi_rapido = True
                    
            dif_jogados = jogos_jogados_df[jogos_jogados_df['dificuldade_elevada'] == 1]
            if not dif_jogados.empty:
                media_dif = sum([notas_usuario[j_id] for j_id in dif_jogados['id'] if j_id in notas_usuario]) / len(dif_jogados)
                if media_dif >= 4.0:
                    gosta_dif_elevada = True
                    
            narr_jogados = jogos_jogados_df[(jogos_jogados_df['adaptacao_narrativa'] == 1) | (jogos_jogados_df['genero'] == 'Narrativo')]
            if not narr_jogados.empty:
                media_narr = sum([notas_usuario[j_id] for j_id in narr_jogados['id'] if j_id in notas_usuario]) / len(narr_jogados)
                if media_narr >= 4.0:
                    gosta_narrativa = True

            recomendacoes = []
            
            for idx, row in jogos_df.iterrows():
                jogo_id = row['id']
                if jogo_id in jogos_avaliados:
                    continue
                    
                if genero_filtro and row['genero'] != genero_filtro:
                    continue
                    
                escore_base = 0
                peso_total = 0
                for j_avaliado in jogos_avaliados:
                    matching_indices = jogos_df[jogos_df['id'] == j_avaliado].index
                    if len(matching_indices) == 0:
                        continue
                    idx_avaliado = matching_indices[0]
                    sim = cosine_sim[idx_avaliado][idx]
                    nota = notas_usuario[j_avaliado]
                    if nota >= 3.0: 
                        escore_base += sim * nota
                        peso_total += nota
                        
                if peso_total > 0:
                    escore_base /= peso_total
                    
                multiplicador = 1.0
                
                if gosta_multi_rapido and (row['multiplayer_rapido'] == 1 or row['genero'] in ['Hero Shooter', 'Ação']):
                    multiplicador *= 1.3
                    
                if gosta_dif_elevada and (row['dificuldade_elevada'] == 1 or 'Soulslike' in row['tags']):
                    multiplicador *= 1.25
                    
                if gosta_narrativa and (row['adaptacao_narrativa'] == 1 or 'QTE' in row['tags'] or 'História' in row['tags'] or row['genero'] == 'Narrativo'):
                    multiplicador *= 1.25
                    
                escore_final = escore_base * multiplicador
                
                recomendacoes.append({
                    'id': row['id'],
                    'titulo': row['titulo'],
                    'genero': row['genero'],
                    'tags': row['tags'],
                    'escore': escore_final
                })
                
            recomendacoes.sort(key=lambda x: x['escore'], reverse=True)
            return recomendacoes[:limite]
            
        finally:
            conn.close()
            
    def _fallback_recomendacao_popular(self, jogos_df, limite, genero_filtro):
        if genero_filtro:
            jogos_df = jogos_df[jogos_df['genero'] == genero_filtro]
        
        df_fallback = jogos_df.head(limite).copy()
        df_fallback['escore'] = 0.0
        return df_fallback[['id', 'titulo', 'genero', 'tags', 'escore']].to_dict('records')

if __name__ == '__main__':
    engine = RecomendaJogosEngine()
    print("Recomendações Usuário 1 (Gosta de Difícil):")
    for r in engine.gerar_recomendacoes(1):
        print(f" - {r['titulo']} (Score: {r['escore']:.2f})")
    print("\nRecomendações Usuário 2 (Gosta de Multi Rápido):")
    for r in engine.gerar_recomendacoes(2):
        print(f" - {r['titulo']} (Score: {r['escore']:.2f})")
    print("\nRecomendações Usuário 3 (Gosta de Narrativo):")
    for r in engine.gerar_recomendacoes(3):
        print(f" - {r['titulo']} (Score: {r['escore']:.2f})")
