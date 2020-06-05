const snake = require('./snake');
const food = require('./food');
const grid = require('./grid');

window.requestAnimationFrame(main);

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    if (gameOver) return alert('you lost');

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snake.snakeSpeed) return;

    lastRenderTime = currentTime;
    update();
    draw();
}

function update() {
    snake.updateSnake();
    food.updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    snake.drawSnake(gameBoard);
    food.drawFood(gameBoard);
}

function checkDeath() {
    gameOver = grid.outsideGrid(snake.getSnakeHead()) || snake.snakeIntersection();
}
