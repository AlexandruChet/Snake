# 🐍 Snake Game (JavaScript)

Implementation of the classic game **"Snake"** on pure JavaScript using the **Canvas API**.

---

## 📂 Code structure

### Main variables
- **gameBoard, ctx** – access to canvas and ego context.
- **scoreText, resetBtn** – elements for displaying the score and the reset button.
- **gameWidth, gameHeight** – dimensions of the playing field.
- **unitSize** – the size of one snake segment (25px).
- **running** – game status flag.
- **xVelocity, yVelocity** – the direction of the snake's movement.
- **foodX, foodY** – food coordinates.
- **score** – the current number of points.
- **snake** – an array of snake segments.

---

### Functions

- **createFood()** 
Creates food in a random position on the playing field.

- **drawFood()** 
Drawing of food in the form of a circle with a radial gradient.

- **gameStart()** 
Starts the game: resets the score, creates food, starts the `nextTick()` cycle.

- **nextTick()** 
The main cycle of the game: clears the field, moves the snake, draws it and checks the end of the game.

- **clearBoard()** 
Clears the field and fills it with a background (gradient).

- **drawSnake()** 
Drawing of a snake (head – dark green, body – light green).

- **moveSnake()** 
Adds a new segment (head) and removes the last one if no food is eaten.

- **changeDirection(event)** 
Changes the direction of the snake by pressing the arrows, prevents turning back.

- **checkGameOver()** 
Checks collisions with walls and itself.

- **displayGameOver()** 
Displays the text **GAME OVER** in the center of the screen.

- **resetGame()** 
Resets the state of the game (points, position of the snake) and starts it again.

---

## 🎹 Management
- ⬆️ `ArrowUp' – up
- ⬇️ `ArrowDown' – down
- ⬅️ `ArrowLeft' – to the left
- ➡️ `ArrowRight' - to the right

---

## 🛠 Used technologies
- **JavaScript (ES6+)**
- **Canvas API**

---

## 🚀 Features
- Beautiful gradient background.
- Food in the form of a gradient circle.
- A snake with rounded corners.
- **GAME OVER** screen with text shadow.
- Ability to reset the game with the Reset button.
