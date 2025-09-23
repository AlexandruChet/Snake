

# 🐍 Snake Game (JavaScript)

Classic **Snake Game** implemented with **pure JavaScript** and the **Canvas API**.
Control the snake to collect food, grow longer, and avoid hitting the walls or yourself.

---

## ✨ Features

* 🎮 Keyboard controls (Arrow keys or WASD).
* 🍏 Random food generation.
* 📈 Score tracking.
* 🔄 Reset button to restart the game.
* 🖼 Simple graphics using Canvas API.

---

## 📂 Code Structure

### 🔑 Main Variables

* `const gameBoard = document.getElementById("gameBoard")` – reference to the `<canvas>`.
* `const ctx = gameBoard.getContext("2d")` – 2D drawing context for canvas.
* `const scoreText = document.getElementById("scoreText")` – element that displays score.
* `const resetBtn = document.getElementById("resetBtn")` – reset button element.
* `const unitSize = 25` – size of each grid cell (snake segment & food).
* `let running = false` – game loop flag.
* `let xVelocity = unitSize, yVelocity = 0` – snake starts moving to the right.
* `let foodX, foodY` – coordinates of the food.
* `let score = 0` – current score.
* `let snake = [...]` – array of snake body segments (initial length = 5).

---

### 🧩 Functions

#### `createFood()`

Generates random coordinates for food on the board.

```js
function createFood() {
  foodX = Math.floor(Math.random() * (gameBoard.width / unitSize)) * unitSize;
  foodY = Math.floor(Math.random() * (gameBoard.height / unitSize)) * unitSize;
}
```

#### `drawFood()`

Draws the food at the generated coordinates.

```js
function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(foodX, foodY, unitSize, unitSize);
}
```

#### `clearBoard()`

Clears the canvas before redrawing each frame.

```js
function clearBoard() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, gameBoard.width, gameBoard.height);
}
```

#### `drawSnake()`

Iterates through the `snake` array and draws each segment.

```js
function drawSnake() {
  ctx.fillStyle = "lime";
  ctx.strokeStyle = "black";
  snake.forEach(part => {
    ctx.fillRect(part.x, part.y, unitSize, unitSize);
    ctx.strokeRect(part.x, part.y, unitSize, unitSize);
  });
}
```

#### `moveSnake()`

Shifts snake segments in the direction of current velocity.

```js
function moveSnake() {
  const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
  snake.unshift(head);
  
  if (head.x === foodX && head.y === foodY) {
    score += 1;
    scoreText.textContent = score;
    createFood();
  } else {
    snake.pop();
  }
}
```

#### `checkGameOver()`

Detects collisions with walls or self.

```js
function checkGameOver() {
  if (
    snake[0].x < 0 || snake[0].x >= gameBoard.width ||
    snake[0].y < 0 || snake[0].y >= gameBoard.height
  ) {
    running = false;
  }

  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      running = false;
    }
  }
}
```

#### `gameLoop()`

Main loop that runs the game.

```js
function gameLoop() {
  if (running) {
    setTimeout(() => {
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      gameLoop();
    }, 100);
  } else {
    displayGameOver();
  }
}
```

---

## 📜 Example HTML Setup

```html
<canvas id="gameBoard" width="500" height="500"></canvas>
<p id="scoreText">0</p>
<button id="resetBtn">Reset</button>
<script src="snake.js"></script>
```

---

## ⚙️ How to Run

1. Create an `index.html` file with the `<canvas>` element and include the JS code.
2. Open `index.html` in a browser.
3. Use **Arrow Keys** (or WASD) to control the snake.

---

## 📊 Visual Representation

```
+----------------------+
| Snake: [###]         |
| Food:  ●             |
| Score: 12            |
+----------------------+
```
