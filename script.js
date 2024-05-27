const circle = document.getElementById('circle');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Função para gerar uma posição aleatória dentro da janela
function getRandomPosition() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const randomY = Math.floor(Math.random() * (windowHeight - 50));
    const randomX = Math.floor(Math.random() * (windowWidth - 50));
    return { x: randomX, y: randomY };
}

// Função para mostrar o círculo em uma nova posição
function showCircle() {
    const { x, y } = getRandomPosition();
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.display = 'block';
}

// Evento de clique no círculo
circle.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    showCircle();
});

// Mostrar o círculo pela primeira vez
showCircle();
owCircle();
