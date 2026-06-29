// Array com as 30 perguntas, respostas e cores de fundo variadas (tons pastéis para leitura)
const flashcardsData = [
    { q: "Quem criou o voleibol e em que ano?", a: "William George Morgan, em 1895.", color: "#ffb3ba" }, // Vermelho/Rosa
    { q: "Qual era o nome original do esporte?", a: "Mintonette.", color: "#baffc9" }, // Verde
    { q: "Onde o voleibol foi desenvolvido?", a: "Na Associação Cristã de Moços (YMCA) nos Estados Unidos.", color: "#bae1ff" }, // Azul
    { q: "Qual era o objetivo principal da criação do jogo?", a: "Criar um esporte sem contato físico e menos agressivo para pessoas mais velhas.", color: "#ffffba" }, // Amarelo
    { q: "Quando o vôlei entrou no programa dos Jogos Olímpicos?", a: "Em Tóquio, no ano de 1964.", color: "#e8bae8" }, // Roxo/Rosa

    { q: "Quais são as dimensões oficiais da quadra de vôlei de quadra?", a: "18 metros de comprimento por 9 metros de largura.", color: "#ffdfba" }, // Laranja
    { q: "Qual é a altura oficial da rede para o vôlei masculino adulto?", a: "2,43 metros.", color: "#ffb3ba" },
    { q: "Qual é a altura oficial da rede para o vôlei feminino adulto?", a: "2,24 metros.", color: "#baffc9" },
    { q: "Para que servem as antenas fixadas na rede?", a: "Delimitam o espaço aéreo por onde a bola deve passar para cruzar para a quadra adversária.", color: "#bae1ff" },
    { q: "Qual é o peso aproximado de uma bola oficial de vôlei?", a: "Entre 260g e 280g.", color: "#ffffba" },

    { q: "Quantos jogadores de cada equipe ficam em quadra?", a: "6 jogadores titulares em quadra (e 6 reservas).", color: "#e8bae8" },
    { q: "Qual é o número máximo de toques que uma equipe pode dar na bola (sem contar o bloqueio)?", a: "3 toques.", color: "#ffdfba" },
    { q: "Um jogador pode tocar na bola duas vezes consecutivas?", a: "Não (exceto após realizar um bloqueio).", color: "#ffb3ba" },
    { q: "Como se vence uma partida oficial de vôlei de quadra?", a: "Vencendo 3 sets.", color: "#baffc9" },
    { q: "Quantos pontos são necessários para vencer um set normal (do 1º ao 4º set)?", a: "25 pontos (com diferença mínima de 2 pontos).", color: "#bae1ff" },

    { q: "Como se chama o set decisivo (o 5º set) e quantos pontos ele tem?", a: "Tie-break, e ele vai até 15 pontos (com diferença mínima de 2 pontos).", color: "#ffffba" },
    { q: "O que acontece se a bola tocar na linha da quadra durante o jogo?", a: "É considerada dentro (ponto válido).", color: "#e8bae8" },
    { q: "O jogador que está na rede pode invadir a quadra adversária por baixo da rede?", a: "Não, desde que não interfira na jogada e não ultrapasse completamente a linha central.", color: "#ffdfba" },
    { q: "Quais são as três modalidades principais de voleibol?", a: "Vôlei de quadra, vôlei de praia e vôlei sentado.", color: "#ffb3ba" },
    { q: "É permitido tocar na rede durante a partida?", a: "Não, o toque na rede é falta.", color: "#baffc9" },

    { q: "Quais são as 5 fundamentos básicos do voleibol?", a: "Saque, recepção (ou passe), levantamento, ataque e bloqueio.", color: "#bae1ff" },
    { q: "Qual fundamento inicia cada jogada (ponto)?", a: "O saque.", color: "#ffffba" },
    { q: "Qual é a função principal do jogador líbero?", a: "Exclusivamente defensiva; ele não pode sacar, bloquear, atacar ou ser capitão.", color: "#e8bae8" },
    { q: "O líbero pode trocar de lugar com qualquer jogador sem autorização do árbitro?", a: "Sim, desde que seja na zona de substituição específica e sem parar o jogo.", color: "#ffdfba" },
    { q: "Em qual posição da quadra os jogadores realizam o rodízio?", a: "No sentido horário, a cada mudança de saque (quando a equipe recupera o saque).", color: "#ffb3ba" },

    { q: "Qual fundamento tem o objetivo de impedir que a bola vinda do adversário toque na quadra própria?", a: "A defesa.", color: "#baffc9" },
    { q: "O que é o bloqueio no voleibol?", a: "Ação defensiva realizada pelos jogadores próximos à rede para interceptar o ataque adversário.", color: "#bae1ff" },
    { q: "O toque no bloqueio conta como um dos 3 toques permitidos para a equipe?", a: "Não, a equipe ainda tem direito a mais 3 toques após o bloqueio.", color: "#ffffba" },
    { q: "Qual é o toque normalmente utilizado para receber o saque com segurança?", a: "A manchete.", color: "#e8bae8" },
    { q: "Qual é o toque normalmente utilizado para colocar a bola em posição de ataque?", a: "O levantamento (geralmente feito com o toque de dedos).", color: "#ffdfba" }
];

const container = document.getElementById('flashcards-container');

// Renderizar os cartões na tela
flashcardsData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front" style="background-color: ${item.color};">
                <p>${item.q}</p>
            </div>
            <div class="card-back" style="background-color: ${item.color};">
                <p>${item.a}</p>
            </div>
        </div>
    `;
    
    // Evento de clique para girar o cartão
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    
    container.appendChild(card);
});

// --- LÓGICA DE ACESSIBILIDADE ---

// 1. Modo Escuro / Claro
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        toggleThemeBtn.textContent = '🌓 Modo Escuro';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        toggleThemeBtn.textContent = '☀️ Modo Claro';
    }
});

// 2. Controle de tamanho da fonte
let currentFontSize = 16;
const root = document.documentElement;

document.getElementById('font-increase').addEventListener('click', () => {
    if (currentFontSize < 24) { // Limite máximo para não quebrar o layout
        currentFontSize += 2;
        root.style.setProperty('--base-font-size', `${currentFontSize}px`);
    }
});

document.getElementById('font-decrease').addEventListener('click', () => {
    if (currentFontSize > 12) { // Limite mínimo
        currentFontSize -= 2;
        root.style.setProperty('--base-font-size', `${currentFontSize}px`);
    }
});
