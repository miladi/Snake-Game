const snake = require('./snake');
const grid = require('./grid');
const expansionRate = 1;
let food = getRandomFoodPosition();

function updateFood() {
    if (snake.onSnake(food)) {
        snake.expandSnake(expansionRate);
        food = getRandomFoodPosition();
    }
}

function drawFood(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || snake.onSnake(newFoodPosition)) {
        newFoodPosition = grid.randomGridPosition();
    }
    return newFoodPosition;
}

module.exports = {updateFood, drawFood};
