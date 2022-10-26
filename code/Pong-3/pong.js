let canvas = document.getElementsByTagName("canvas")[0];
let context = canvas.getContext("2d");
const keys = {};

// Make the canvas able to recieve input
canvas.tabIndex = 1;
canvas.focus();

// Create the canvas constants and set the dimensions
const CANVAS_HEIGHT = 720;
const CANVAS_WIDTH = 1080;
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;

// Create the paddle constants
const PADDLE_COLOUR = "white"
const PADDLE_WIDTH = 30;
const PADDLE_HEIGHT = 175;
const PADDLE_SPEED = 400;

// Ball variables
const BALL_SIZE = 20;
let ballY = CANVAS_HEIGHT / 2 - BALL_SIZE / 2
let ballX = CANVAS_WIDTH / 2 - BALL_SIZE / 2
let ballXVelocity = -300;
let ballYVelocity = -150;

// Store paddle positions
let player1Y = 0;
let player2Y = CANVAS_HEIGHT - PADDLE_HEIGHT;

context.fillStyle = PADDLE_COLOUR;

canvas.addEventListener('keydown', handleKeyPressDown);
canvas.addEventListener('keyup', handleKeyPressUp);

// Make the canvas able to recieve input
canvas.tabIndex = 1;

function handleKeyPressDown(event){
    keys[event.key] = true;
}
function handleKeyPressUp(event){
    keys[event.key] = false;
}

let lastTime = 0;
// Function called every frame
function GameLoop(currentTime = 0)
{
    // Divide by 1000 to go from ms to s
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    // Update logic
    update(deltaTime);
    render();

    requestAnimationFrame(GameLoop);
}

function update(dt){
    handlePaddleMovement(dt);
    handleBallLogic(dt);
}

function handlePaddleMovement(dt){
    // Player 1 movement.
    if (keys.w) {
        // Subtract paddle speed from current Y scaled by deltaTime.
        player1Y -= PADDLE_SPEED * dt;
        if (player1Y < 0){
            player1Y = 0;
        }
    }
    else if (keys.s) {
        // Add paddle speed to current Y scaled by deltaTime.
        player1Y += PADDLE_SPEED * dt;
        if (player1Y > CANVAS_HEIGHT - PADDLE_HEIGHT){
            player1Y = CANVAS_HEIGHT - PADDLE_HEIGHT;
        }
    }

    // Player 2 movement.
    if (keys.ArrowUp) {
        // Subtract paddle speed from current Y scaled by deltaTime.
        player2Y -= PADDLE_SPEED * dt;
        if (player2Y < 0){
            player2Y = 0;
        }
    }
    else if (keys.ArrowDown) {
        // Add paddle speed to current Y scaled by deltaTime.
        player2Y += PADDLE_SPEED * dt;
        if (player2Y > CANVAS_HEIGHT - PADDLE_HEIGHT){
            player2Y = CANVAS_HEIGHT - PADDLE_HEIGHT;
        }
    }
}

function handleBallLogic(dt){
    if(ballCollidedWithAPaddle()){
        ballXVelocity *= -1;
    
        if (ballXVelocity > 0)
            ballXVelocity += 30;
        else
            ballXVelocity -= 30;
    }

    // Check if ball hit the top
    if (ballY < 0){
        ballY = 0;
        ballYVelocity *= -1;
    }
    // Check if ball hit the bottom
    else if (ballY > CANVAS_HEIGHT - BALL_SIZE){
        ballY = CANVAS_HEIGHT - BALL_SIZE;
        ballYVelocity *= -1;
    }

    ballX += ballXVelocity * dt;
    ballY += ballYVelocity * dt;
}

function ballCollidedWithAPaddle(){
    return didCollide(ballX, ballY, BALL_SIZE, BALL_SIZE, 0, player1Y, PADDLE_WIDTH, PADDLE_HEIGHT) 
           || didCollide(ballX, ballY, BALL_SIZE, BALL_SIZE, CANVAS_WIDTH - PADDLE_WIDTH, player2Y, PADDLE_WIDTH, PADDLE_HEIGHT) 
}

function didCollide(x1, y1, width1, height1, x2, y2, width2, height2){
    return x1 < x2 + width2 &&
           x1 + width1 > x2 &&
           y1 < y2 + height2 &&
           y1 + height1 > y2
}

// Display the game logic
function render()
{
    // Clear the screen
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_WIDTH);

    // Draw the left paddle
    context.fillRect(0, player1Y, PADDLE_WIDTH, PADDLE_HEIGHT);

    // Draw the right paddle
    context.fillRect(CANVAS_WIDTH - PADDLE_WIDTH, player2Y, PADDLE_WIDTH, PADDLE_HEIGHT);

    // Draw the ball
    context.fillRect(ballX, ballY, BALL_SIZE, BALL_SIZE);
}

GameLoop();