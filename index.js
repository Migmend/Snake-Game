// HTML Elements
const board = document.getElementById("game-board");

//Game variables
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let direction = "right";

//Game map, snake, food
function draw() {
  board.innerHTML = "";
  drawSnake();
  drawFood();
}

//Snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");

    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

//Generate snake or food
function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;

  return element;
}

//Setting the position of the snake or the food
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

//test
draw();

//Draw food
function drawFood() {
  const foodElement = createGameElement("div", "food");
  setPosition(foodElement, food);
  board.appendChild(foodElement);
}

//Generate food
function generateFood() {
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;

  return { x, y };
}

//Moving snake

function move() {
  const head = { ...snake[0] };
  switch (direction) {
    case "up":
      head.y--;
      break;
    case "down":
      head.y++;
      break;
    case "left":
      head.x--;
      break;
    case "right":
      head.x++;
      break;
  }

  snake.unshift(head);

  snake.pop();
}

//Test movement

setInterval(() => {
  move();
  draw();
}, 200);
