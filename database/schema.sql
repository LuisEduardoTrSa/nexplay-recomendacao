CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS jogos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(150) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    dificuldade_elevada BOOLEAN DEFAULT 0,
    multiplayer_rapido BOOLEAN DEFAULT 0,
    adaptacao_narrativa BOOLEAN DEFAULT 0,
    tags TEXT
);

CREATE TABLE IF NOT EXISTS historico_avaliacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER,
    jogo_id INTEGER,
    nota REAL NOT NULL,
    data_avaliacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (jogo_id) REFERENCES jogos(id)
);

CREATE TABLE IF NOT EXISTS log_requisicoes_ia (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO jogos (titulo, genero, dificuldade_elevada, multiplayer_rapido, adaptacao_narrativa, tags) VALUES
('Sekiro: Shadows Die Twice', 'Ação', 1, 0, 0, 'Soulslike,Single Player,Ninja,Stealth'),
('Resident Evil', 'Ação', 0, 0, 0, 'Horror,Zumbis,Single Player,Puzzle'),
('Project Zomboid', 'RPG', 1, 1, 0, 'Sobrevivência,Isométrico,Zumbis,Sandbox'),
('Counter-Strike 2', 'Hero Shooter', 0, 1, 0, 'Tiro,Competitivo,FPS,Tático'),
('Warframe', 'Ação', 0, 1, 0, 'Looter Shooter,Ficção Científica,Co-op'),
('Lies of P', 'RPG', 1, 0, 0, 'Soulslike,Single Player,Steampunk,História'),
('Hollow Knight', 'Ação', 1, 0, 0, 'Metroidvania,Indie,Single Player,Plataforma'),
('Marvel Rivals', 'Hero Shooter', 0, 1, 1, 'Tiro,Competitivo,Heróis,Multiplayer'),
('The Walking Dead', 'Narrativo', 0, 0, 1, 'Escolhas,Zumbis,QTE,História'),
('JoJo''s Bizarre Adventure: All-Star Battle R', 'Ação', 0, 1, 1, 'Luta,Anime,Competitivo'),
('Elden Ring', 'RPG', 1, 0, 0, 'Soulslike,Mundo Aberto,Fantasia,Single Player'),
('Detroit: Become Human', 'Narrativo', 0, 0, 0, 'QTE,Ficção Científica,Escolhas,História'),
('The Witcher 3: Wild Hunt', 'RPG', 0, 0, 1, 'Mundo Aberto,Fantasia,História,Single Player,Adaptação'),
('Bloodborne', 'Ação', 1, 0, 0, 'Soulslike,Horror,Single Player,Dificuldade Elevada'),
('Overwatch 2', 'Hero Shooter', 0, 1, 0, 'Tiro,Competitivo,Multiplayer,Heróis'),
('Valorant', 'Hero Shooter', 0, 1, 0, 'Tiro,Competitivo,Tático,Multiplayer'),
('The Last of Us Part I', 'Narrativo', 0, 0, 1, 'História,Zumbis,Ação,Adaptação'),
('God of War Ragnarök', 'Ação', 0, 0, 0, 'Fantasia,História,Hack and Slash,Single Player'),
('Dark Souls III', 'RPG', 1, 0, 0, 'Soulslike,Dificuldade Elevada,Fantasia,Single Player'),
('Cyberpunk 2077', 'RPG', 0, 0, 0, 'Mundo Aberto,Ficção Científica,Ação,História'),
('Apex Legends', 'Hero Shooter', 0, 1, 0, 'Looter Shooter,Competitivo,Multiplayer,Tiro'),
('Until Dawn', 'Narrativo', 0, 0, 0, 'Horror,Escolhas,QTE,História'),
('Red Dead Redemption 2', 'Narrativo', 0, 0, 0, 'Mundo Aberto,História,Ação,Single Player'),
('Ghost of Tsushima', 'Ação', 0, 0, 0, 'Mundo Aberto,Samurai,Single Player'),
('Hades', 'Ação', 1, 0, 0, 'Roguelike,Indie,Mitologia,Single Player'),
('Mass Effect Legendary Edition', 'RPG', 0, 0, 1, 'Ficção Científica,Narrativo,Escolhas,Single Player'),
('Destiny 2', 'Hero Shooter', 0, 1, 0, 'Looter Shooter,Ficção Científica,Co-op,Multiplayer'),
('The Elder Scrolls V: Skyrim', 'RPG', 0, 0, 0, 'Mundo Aberto,Fantasia,Single Player'),
('Doom Eternal', 'Ação', 1, 0, 0, 'Tiro,FPS,Demônios,Single Player'),
('Persona 5 Royal', 'RPG', 0, 0, 1, 'Anime,Narrativo,JRPG,Single Player'),
('Star Wars Jedi: Survivor', 'Ação', 1, 0, 1, 'Soulslike,Ficção Científica,Single Player,Adaptação'),
('Baldur''s Gate 3', 'RPG', 0, 0, 1, 'Fantasia,História,Escolhas,Co-op');

INSERT INTO usuarios (nome, email) VALUES
('João Silva', 'joao@example.com'),
('Maria Oliveira', 'maria@example.com'),
('Carlos Souza', 'carlos@example.com');

INSERT INTO historico_avaliacoes (usuario_id, jogo_id, nota) VALUES
(1, 1, 5.0),
(1, 6, 4.5);

INSERT INTO historico_avaliacoes (usuario_id, jogo_id, nota) VALUES
(2, 4, 5.0),
(2, 5, 4.0);

INSERT INTO historico_avaliacoes (usuario_id, jogo_id, nota) VALUES
(3, 9, 5.0),
(3, 10, 4.0);
