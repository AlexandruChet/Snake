const gameBoard = document.getElementById("gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.getElementById("scoreText");
const resetBtn = document.getElementById("resetBtn");

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const unitSize = 25;
let running = false;

let xVelocity = unitSize;
let yVelocity = 0;

let foodX;
let foodY;

let score = 0;
let snake = [
  { x: unitSize * 4, y: 0 },
  { x: unitSize * 3, y: 0 },
  { x: unitSize * 2, y: 0 },
  { x: unitSize, y: 0 },
  { x: 0, y: 0 },
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function createFood() {
  function randomFood(min, max) {
    return (
      Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize
    );
  }

  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameHeight - unitSize);
}

function drawFood() {
  const radius = unitSize / 2;
  ctx.beginPath();
  ctx.arc(foodX + radius, foodY + radius, radius, 0, Math.PI * 2);
  const gradient = ctx.createRadialGradient(
    foodX + radius - 5,
    foodY + radius - 5,
    3,
    foodX + radius,
    foodY + radius,
    radius
  );
  gradient.addColorStop(0, "#ff4d4d");
  gradient.addColorStop(1, "#cc0000");
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.closePath();
}

function gameStart() {
  running = true;
  scoreText.textContent = score;
  createFood();
  drawFood();
  nextTick();
}

function nextTick() {
  if (running) {
    setTimeout(() => {
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      nextTick();
    }, 100);
  } else {
    displayGameOver();
  }
}

function clearBoard() {
  const gradient = ctx.createLinearGradient(0, 0, gameWidth, gameHeight);
  gradient.addColorStop(0, "#c9ffbf");
  gradient.addColorStop(1, "#ffafbd");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function drawSnake() {
  snake.forEach((snakePart, index) => {
    const color = index === 0 ? "#4CAF50" : "lightgreen";
    ctx.fillStyle = color;
    ctx.strokeStyle = "#2e7d32";

    ctx.beginPath();
    ctx.roundRect(snakePart.x, snakePart.y, unitSize, unitSize, 8);
    ctx.fill();
    ctx.stroke();
  });
}

function moveSnake() {
  const head = {
    x: snake[0].x + xVelocity,
    y: snake[0].y + yVelocity,
  };

  snake.unshift(head);
  if (snake[0].x == foodX && snake[0].y == foodY) {
    score += 1;
    scoreText.textContent = score;
    createFood();
  } else {
    snake.pop();
  }
}

function changeDirection(event) {
  const keyPressed = event.keyCode;
  const LEFT = 37;
  const UP = 38;
  const RIGHT = 39;
  const DOWN = 40;

  const goingUP = yVelocity == -unitSize;
  const goingDOWN = yVelocity == unitSize;
  const goingLEFT = xVelocity == -unitSize;
  const goingRIGHT = xVelocity == unitSize;

  switch (true) {
    case keyPressed == LEFT && !goingRIGHT:
      xVelocity = -unitSize;
      yVelocity = 0;
      break;
    case keyPressed == UP && !goingDOWN:
      xVelocity = 0;
      yVelocity = -unitSize;
      break;
    case keyPressed == RIGHT && !goingLEFT:
      xVelocity = unitSize;
      yVelocity = 0;
      break;
    case keyPressed == DOWN && !goingUP:
      xVelocity = 0;
      yVelocity = unitSize;
      break;
  }
}

function checkGameOver() {
  switch (true) {
    case snake[0].x < 0:
      running = false;
      break;
    case snake[0].x >= gameWidth:
      running = false;
      break;
    case snake[0].y < 0:
      running = false;
      break;
    case snake[0].y >= gameHeight:
      running = false;
      break;
  }
  for (let index = 1; index < snake.length; index += 1) {
    if (snake[index].x == snake[0].x && snake[index].y == snake[0].y) {
      running = false;
    }
  }
}

function displayGameOver() {
  ctx.font = "bold 60px Arial";
  ctx.fillStyle = "#e53935";
  ctx.textAlign = "center";
  ctx.shadowColor = "black";
  ctx.shadowBlur = 10;
  ctx.fillText("GAME OVER", gameWidth / 2, gameHeight / 2);
  ctx.shadowBlur = 0;
  running = false;
}

function resetGame() {
  score = 0;
  xVelocity = unitSize;
  yVelocity = 0;
  snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
  ];
  gameStart();
}