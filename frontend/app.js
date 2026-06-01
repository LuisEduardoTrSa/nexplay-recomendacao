const catalogoJogos = [
    { id: 1, title: 'Sekiro: Shadows Die Twice', genre: 'Ação', tags: 'Soulslike, Ninja, Stealth', dificuldade: true, multiplayer: false, narrativa: false },
    { id: 2, title: 'Resident Evil', genre: 'Ação', tags: 'Horror, Zumbis, Puzzle', dificuldade: false, multiplayer: false, narrativa: false },
    { id: 3, title: 'Project Zomboid', genre: 'RPG', tags: 'Sobrevivência, Isométrico, Sandbox', dificuldade: true, multiplayer: true, narrativa: false },
    { id: 4, title: 'Counter-Strike 2', genre: 'Hero Shooter', tags: 'Tiro, Competitivo, FPS', dificuldade: false, multiplayer: true, narrativa: false },
    { id: 5, title: 'Warframe', genre: 'Ação', tags: 'Looter Shooter, Ficção Científica, Co-op', dificuldade: false, multiplayer: true, narrativa: false },
    { id: 6, title: 'Lies of P', genre: 'RPG', tags: 'Soulslike, Steampunk, História', dificuldade: true, multiplayer: false, narrativa: false },
    { id: 7, title: 'Hollow Knight', genre: 'Ação', tags: 'Metroidvania, Indie, Plataforma', dificuldade: true, multiplayer: false, narrativa: false },
    { id: 8, title: 'Marvel Rivals', genre: 'Hero Shooter', tags: 'Tiro, Competitivo, Heróis', dificuldade: false, multiplayer: true, narrativa: true },
    { id: 9, title: 'The Walking Dead', genre: 'Narrativo', tags: 'Escolhas, Zumbis, QTE, História', dificuldade: false, multiplayer: false, narrativa: true },
    { id: 10, title: "JoJo's Bizarre Adventure", genre: 'Ação', tags: 'Luta, Anime, Competitivo', dificuldade: false, multiplayer: true, narrativa: true },
    { id: 11, title: 'Elden Ring', genre: 'RPG', tags: 'Soulslike, Mundo Aberto, Fantasia', dificuldade: true, multiplayer: false, narrativa: false },
    { id: 12, title: 'Detroit: Become Human', genre: 'Narrativo', tags: 'QTE, Ficção Científica, Escolhas', dificuldade: false, multiplayer: false, narrativa: false },
    { id: 13, title: 'The Witcher 3: Wild Hunt', genre: 'RPG', tags: 'Mundo Aberto, Fantasia, História', dificuldade: false, multiplayer: false, narrativa: true },
    { id: 14, title: 'Bloodborne', genre: 'Ação', tags: 'Soulslike, Horror, Dificuldade Elevada', dificuldade: true, multiplayer: false, narrativa: false },
    { id: 15, title: 'Overwatch 2', genre: 'Hero Shooter', tags: 'Tiro, Competitivo, Heróis', dificuldade: false, multiplayer: true, narrativa: false },
    { id: 16, title: 'Valorant', genre: 'Hero Shooter', tags: 'Tiro, Tático, Competitivo', dificuldade: false, multiplayer: true, narrativa: false },
    { id: 17, title: 'The Last of Us Part I', genre: 'Narrativo', tags: 'História, Zumbis, Ação, Adaptação', dificuldade: false, multiplayer: false, narrativa: true },
    { id: 18, title: 'God of War Ragnarök', genre: 'Ação', tags: 'Fantasia, História, Hack and Slash', dificuldade: false, multiplayer: false, narrativa: false },
    { id: 19, title: 'Dark Souls III', genre: 'RPG', tags: 'Soulslike, Dificuldade Elevada, Fantasia', dificuldade: true, multiplayer: false, narrativa: false },
    { id: 20, title: 'Cyberpunk 2077', genre: 'RPG', tags: 'Mundo Aberto, Ficção Científica, Ação', dificuldade: false, multiplayer: false, narrativa: false },
    { id: 21, title: 'Apex Legends', genre: 'Hero Shooter', tags: 'Looter Shooter, Competitivo, Tiro', dificuldade: false, multiplayer: true, narrativa: false },
    { id: 22, title: 'Until Dawn', genre: 'Narrativo', tags: 'Horror, Escolhas, QTE, História', dificuldade: false, multiplayer: false, narrativa: false },
    { id: 23, title: 'Red Dead Redemption 2', genre: 'Narrativo', tags: 'Mundo Aberto, História, Ação', dificuldade: false, multiplayer: false, narrativa: true },
    { id: 24, title: 'Ghost of Tsushima', genre: 'Ação', tags: 'Mundo Aberto, Samurai, História', dificuldade: false, multiplayer: false, narrativa: false },
    { id: 25, title: 'Hades', genre: 'Ação', tags: 'Roguelike, Indie, Mitologia', dificuldade: true, multiplayer: false, narrativa: false },
    { id: 26, title: 'Mass Effect Legendary Edition', genre: 'RPG', tags: 'Ficção Científica, Narrativo, Escolhas', dificuldade: false, multiplayer: false, narrativa: true },
    { id: 27, title: 'Destiny 2', genre: 'Hero Shooter', tags: 'Looter Shooter, Ficção Científica, Co-op', dificuldade: false, multiplayer: true, narrativa: false },
    { id: 28, title: 'The Elder Scrolls V: Skyrim', genre: 'RPG', tags: 'Mundo Aberto, Fantasia', dificuldade: false, multiplayer: false, narrativa: false },
    { id: 29, title: 'Doom Eternal', genre: 'Ação', tags: 'Tiro, FPS, Demônios', dificuldade: true, multiplayer: false, narrativa: false },
    { id: 30, title: 'Persona 5 Royal', genre: 'RPG', tags: 'Anime, Narrativo, JRPG', dificuldade: false, multiplayer: false, narrativa: true },
    { id: 31, title: 'Star Wars Jedi: Survivor', genre: 'Ação', tags: 'Soulslike, Ficção Científica, Adaptação', dificuldade: true, multiplayer: false, narrativa: true },
    { id: 32, title: "Baldur's Gate 3", genre: 'RPG', tags: 'Fantasia, História, Escolhas, Co-op', dificuldade: false, multiplayer: true, narrativa: true }
];

const mockUsers = {
    1: { name: 'João Silva', history: [{gameId: 1, title: 'Sekiro: Shadows Die Twice', rating: 5}, {gameId: 6, title: 'Lies of P', rating: 4.5}], perfil: 'soulslike' },
    2: { name: 'Maria Oliveira', history: [{gameId: 4, title: 'Counter-Strike 2', rating: 5}, {gameId: 5, title: 'Warframe', rating: 4.0}], perfil: 'multiplayer' },
    3: { name: 'Carlos Souza', history: [{gameId: 9, title: 'The Walking Dead', rating: 5}, {gameId: 10, title: "JoJo's Bizarre Adventure", rating: 4.0}], perfil: 'narrativo' }
};

const jogosJogados = {
    1: [1, 6],
    2: [4, 5],
    3: [9, 10]
};

let currentUser = 1;
let currentFilter = 'Todos';
let updateLimits = { 1: 10, 2: 10, 3: 10 };
let userWishlist = { 1: [], 2: [], 3: [] };
let currentRecommendations = { 1: [], 2: [], 3: [] };

function gerarRecomendacoes(userId) {
    const user = mockUsers[userId];
    const jogados = jogosJogados[userId];

    let candidatos = catalogoJogos.filter(j => !jogados.includes(j.id));

    candidatos = candidatos.map(jogo => {
        let score = Math.random() * 40 + 30;

        if (user.perfil === 'multiplayer' && (jogo.multiplayer || jogo.genre === 'Hero Shooter')) {
            score *= 1.3;
        }

        if (user.perfil === 'soulslike' && (jogo.dificuldade || jogo.tags.includes('Soulslike'))) {
            score *= 1.25;
        }

        if (user.perfil === 'narrativo' && (jogo.narrativa || jogo.tags.includes('QTE') || jogo.tags.includes('História') || jogo.genre === 'Narrativo')) {
            score *= 1.25;
        }

        score += (Math.random() - 0.5) * 15;
        score = Math.min(99, Math.max(10, Math.round(score)));

        return { id: jogo.id, title: jogo.title, genre: jogo.genre, tags: jogo.tags, score };
    });

    candidatos.sort((a, b) => b.score - a.score);
    return candidatos.slice(0, 5);
}

const userSelect = document.getElementById('userSelect');
const historyList = document.getElementById('historyList');
const recommendationsGrid = document.getElementById('recommendationsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const generateRecBtn = document.getElementById('generateRecBtn');
const updateCounter = document.getElementById('updateCounter');
const historyForm = document.getElementById('historyForm');

const navHome = document.getElementById('navHome');
const navWishlist = document.getElementById('navWishlist');
const mainView = document.getElementById('mainView');
const wishlistView = document.getElementById('wishlistView');
const wishlistGrid = document.getElementById('wishlistGrid');
const wishlistCount = document.getElementById('wishlistCount');

function init() {
    for (let uid of [1, 2, 3]) {
        currentRecommendations[uid] = gerarRecomendacoes(uid);
    }
    renderHistory();
    renderRecommendations();
    renderWishlist();
}

function renderHistory() {
    const history = mockUsers[currentUser].history;
    
    if (history.length === 0) {
        historyList.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 1rem;">Nenhum jogo avaliado.</p>`;
        return;
    }

    historyList.innerHTML = history.map(item => `
        <div class="history-item" style="display: flex; align-items: center; justify-content: space-between;">
            <div style="flex: 1;">
                <strong>${item.title}</strong>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="color: var(--success); font-weight: bold;">⭐ ${item.rating.toFixed(1)}</div>
                <button onclick="removeHistoryItem(${item.gameId})" style="background: transparent; border: none; font-size: 1.2rem; cursor: pointer; color: #f87171; transition: transform 0.2s;" title="Remover avaliação">🗑️</button>
            </div>
        </div>
    `).join('');
}

function renderRecommendations() {
    const recs = currentRecommendations[currentUser];
    const filteredRecs = currentFilter === 'Todos' ? recs : recs.filter(r => r.genre === currentFilter);

    if (filteredRecs.length === 0) {
        recommendationsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; background: rgba(0,0,0,0.2); border-radius: 16px; border: 1px dashed var(--glass-border);">
                <h3 style="color: var(--text-muted); margin-bottom: 0.5rem;">Lista vazia</h3>
                <p style="margin: 0;">Não há recomendações disponíveis para os critérios atuais.</p>
            </div>
        `;
        return;
    }

    recommendationsGrid.innerHTML = filteredRecs.map(game => `
        <div class="game-card">
            <div class="game-title">${game.title}</div>
            <div class="game-genre">${game.genre}</div>
            <div class="game-score">Score IA: ${game.score}%</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">${game.tags}</div>
            <div class="card-actions">
                <button class="action-btn btn-interest" onclick="alert('Marcado como Tenho Interesse!')">Interesse</button>
                <button class="action-btn btn-wishlist" onclick="addToWishlist(${game.id})">+ Desejos</button>
            </div>
        </div>
    `).join('');
}

function renderWishlist() {
    const wishlist = userWishlist[currentUser];
    wishlistCount.innerText = wishlist.length;

    if (wishlist.length === 0) {
        wishlistGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; background: rgba(0,0,0,0.2); border-radius: 16px; border: 1px dashed var(--glass-border);">
                <h3 style="color: var(--text-muted); margin-bottom: 0.5rem;">Lista vazia</h3>
                <p style="margin: 0;">Sua lista de desejos está vazia.</p>
            </div>
        `;
        return;
    }

    wishlistGrid.innerHTML = wishlist.map(game => `
        <div class="game-card">
            <div class="game-title">${game.title}</div>
            <div class="game-genre">${game.genre}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">${game.tags}</div>
            <div class="card-actions">
                <button class="action-btn" style="background: rgba(239, 68, 68, 0.2); color: #f87171;" onclick="removeFromWishlist(${game.id})">Remover</button>
            </div>
        </div>
    `).join('');
}

navHome.addEventListener('click', () => {
    navHome.classList.add('active');
    navWishlist.classList.remove('active');
    mainView.style.display = 'grid';
    wishlistView.style.display = 'none';
});

navWishlist.addEventListener('click', () => {
    navWishlist.classList.add('active');
    navHome.classList.remove('active');
    mainView.style.display = 'none';
    wishlistView.style.display = 'grid';
});

window.addToWishlist = function(gameId) {
    const game = catalogoJogos.find(j => j.id === gameId);
    if (!userWishlist[currentUser].find(g => g.id === gameId)) {
        userWishlist[currentUser].push(game);
        renderWishlist();
        alert(`"${game.title}" adicionado à Lista de Desejos!`);
    } else {
        alert('Este jogo já está na sua lista.');
    }
};

window.removeFromWishlist = function(gameId) {
    userWishlist[currentUser] = userWishlist[currentUser].filter(g => g.id !== gameId);
    renderWishlist();
};

window.removeHistoryItem = function(gameId) {
    if (confirm("Tem certeza que deseja remover este jogo do seu histórico? Isso mudará suas recomendações.")) {
        mockUsers[currentUser].history = mockUsers[currentUser].history.filter(h => h.gameId !== gameId);
        jogosJogados[currentUser] = jogosJogados[currentUser].filter(id => id !== gameId);
        currentRecommendations[currentUser] = gerarRecomendacoes(currentUser);
        renderHistory();
        renderRecommendations();
    }
};

userSelect.addEventListener('change', (e) => {
    currentUser = parseInt(e.target.value);
    updateCounter.innerText = `${updateLimits[currentUser]} updates restantes`;
    renderHistory();
    renderRecommendations();
    renderWishlist();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.genre;
        renderRecommendations();
    });
});

generateRecBtn.addEventListener('click', () => {
    if (updateLimits[currentUser] > 0) {
        updateLimits[currentUser]--;
        updateCounter.innerText = `${updateLimits[currentUser]} updates restantes`;

        generateRecBtn.innerText = 'Processando IA...';
        generateRecBtn.disabled = true;
        recommendationsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <div style="font-size: 2rem; display: inline-block;">⚙️</div>
                <p style="margin-top: 1rem;">Recalculando recomendações com base no seu perfil...</p>
            </div>
        `;

        setTimeout(() => {
            currentRecommendations[currentUser] = gerarRecomendacoes(currentUser);
            renderRecommendations();
            generateRecBtn.innerText = 'Gerar Novas';
            generateRecBtn.disabled = false;
        }, 1200);
    } else {
        alert('Limite de atualizações por hora atingido! (RN4)');
    }
});

historyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const select = document.getElementById('gameSelect');
    const gameId = parseInt(select.value);
    const title = select.options[select.selectedIndex].text;
    const rating = parseFloat(document.getElementById('ratingInput').value);

    mockUsers[currentUser].history.push({ gameId, title, rating });

    if (!jogosJogados[currentUser].includes(gameId)) {
        jogosJogados[currentUser].push(gameId);
    }

    currentRecommendations[currentUser] = gerarRecomendacoes(currentUser);

    renderHistory();
    renderRecommendations();

    document.getElementById('ratingInput').value = '';
    alert('Jogo avaliado com sucesso! Suas recomendações foram atualizadas.');
});

init();
