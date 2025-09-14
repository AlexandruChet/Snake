# 🐍 Snake Game (JavaScript)

Classic Snake game implemented using **pure JavaScript** and the **Canvas API**.

Control the snake to collect food, grow longer, and avoid running into walls or yourself.

---

## 📂 Code Structure

### Main Variables

- `const gameBoard = document.getElementById("gameBoard")` – access to the canvas.  
- `const ctx = gameBoard.getContext("2d")` – canvas drawing context.  
- `const scoreText = document.getElementById("scoreText")` – element to display score.  
- `const resetBtn = document.getElementById("resetBtn")` – element for reset button.  
- `const unitSize = 25` – size of each snake segment.  
- `let running = false` – flag indicating if the game is running.  
- `let xVelocity = unitSize, yVelocity = 0` – initial movement to the right.  
- `let foodX, foodY` – food coordinates.  
- `let score = 0` – current score.  
- `let snake = [{ x: unitSize * 4, y: 0 }, { x: unitSize * 3, y: 0 }, { x: unitSize * 2, y: 0 }, { x: unitSize, y: 0 }, { x: 0, y: 0 }]` – initial snake segments.  

---

### Functions

- `createFood()`  
```js
function createFood() {
  function randomFood(min, max) {
    return Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
  }
  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameHeight - unitSize);
}

drawFood()


function drawFood() {
  const radius = unitSize / 2;
  ctx.beginPath();
  ctx.arc(foodX + radius, foodY + radius, radius, 0, Math.PI * 2);
  const gradient = ctx.createRadialGradient(foodX + radius - 5, foodY + radius - 5, 3, foodX + radius, foodY + radius, radius);
  gradient.addColorStop(0, "#ff4d4d");
  gradient.addColorStop(1, "#cc0000");
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.closePath();
}

gameStart()


function gameStart() {
  running = true;
  scoreText.textContent = score;
  createFood();
  drawFood();
  nextTick();
}

moveSnake()


function moveSnake() {
  const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
  snake.unshift(head);
  if (snake[0].x == foodX && snake[0].y == foodY) {
    score += 1;
    scoreText.textContent = score;
    createFood();
  } else {
    snake.pop();
  }
}

changeDirection(event)


function changeDirection(event) {
  const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
  switch (event.keyCode) {
    case LEFT: if (xVelocity == 0) { xVelocity = -unitSize; yVelocity = 0; } break;
    case UP: if (yVelocity == 0) { xVelocity = 0; yVelocity = -unitSize; } break;
    case RIGHT: if (xVelocity == 0) { xVelocity = unitSize; yVelocity = 0; } break;
    case DOWN: if (yVelocity == 0) { xVelocity = 0; yVelocity = unitSize; } break;
  }
}

checkGameOver()


function checkGameOver() {
  if (snake[0].x < 0 || snake[0].x >= gameWidth || snake[0].y < 0 || snake[0].y >= gameHeight) running = false;
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) running = false;
  }
}

resetGame()


function resetGame() {
  score = 0;
  xVelocity = unitSize; yVelocity = 0;
  snake = [{ x: unitSize * 4, y: 0 }, { x: unitSize * 3, y: 0 }, { x: unitSize * 2, y: 0 }, { x: unitSize, y: 0 }, { x: 0, y: 0 }];
  gameStart();
}


---

⚡ Features

Smooth animation using Canvas API.

Responsive keyboard controls with arrow keys.

Gradients for food and background.

Pure JavaScript, no libraries.

Recursive setTimeout game loop.

Dynamic score updates.

Reset button to quickly restart.

Handles collisions and game over cleanly.
