
---

🐍 Snake Game (JavaScript)

Classic Snake game implemented using pure JavaScript and the Canvas API.

Control the snake to collect food, grow longer, and avoid running into walls or yourself.


---

📂 Code Structure

Main Variables

gameBoard, ctx – access to the canvas and its drawing context.

scoreText, resetBtn – elements to display the score and reset button.

gameWidth, gameHeight – dimensions of the game field.

unitSize – size of one snake segment (25px).

running – flag indicating if the game is running.

xVelocity, yVelocity – snake movement direction.

foodX, foodY – coordinates of the food.

score – current score.

snake – array of snake segments.



---

Functions

createFood()

Generates food at a random position on the board.
Coordinates are multiples of unitSize to align with the snake.

drawFood()

Draws food as a circle with a radial gradient for visual effect.

gameStart()

Starts the game:

resets the score,

creates food,

starts the main game loop with nextTick().


nextTick()

Main game loop:

1. Clears the board (clearBoard()),


2. Draws the food (drawFood()),


3. Moves the snake (moveSnake()),


4. Draws the snake (drawSnake()),


5. Checks for game over (checkGameOver()),


6. Recursively calls itself every 100ms if the game is still running.



clearBoard()

Clears the board and adds a linear gradient background.

drawSnake()

Draws the snake:

Head – dark green

Body – light green

With a stroke outline for contrast.


moveSnake()

Updates the snake's position:

Adds a new head based on the current direction.

If the snake eats food – increases score and creates new food.

Otherwise, removes the last segment to maintain length.


changeDirection(event)

Controls the snake with arrow keys:

LEFT (37), UP (38), RIGHT (39), DOWN (40)

Prevents moving in the opposite direction.


checkGameOver()

Checks if:

the snake hits a wall,

the snake collides with itself.
If so, sets running = false.


displayGameOver()

Displays "GAME OVER" centered on the board with shadow effects.

resetGame()

Resets the game:

resets the score,

returns the snake to its initial position,

calls gameStart() to restart.



---

⚡ Features

Uses Canvas API to render the snake and food.

Pure JavaScript, no external libraries.

Smooth snake movement with recursive setTimeout.

Easy reset with a button.
