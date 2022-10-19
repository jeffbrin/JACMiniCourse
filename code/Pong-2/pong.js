const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 720;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const PADDLE_WIDTH = 30;
const PADDLE_HEIGHT = 140;
const HORIZONTAL_PADDLE_PADDING = 10;
const PADDLE_SPEED = 1000;

let paddle1PositionX = HORIZONTAL_PADDLE_PADDING;
let paddle1PositionY = 0;
let paddle2PositionX = CANVAS_WIDTH - PADDLE_WIDTH - HORIZONTAL_PADDLE_PADDING;
let paddle2PositionY = CANVAS_HEIGHT - PADDLE_HEIGHT;

let BALL_SIZE = 20;
let ballPositionX = CANVAS_WIDTH / 2 - BALL_SIZE / 2;
let ballPositionY = CANVAS_HEIGHT / 2 - BALL_SIZE / 2;



// Make the canvas able to recieve input
canvas.tabIndex = 1;

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

// Update the game logic.
function update(deltaTime)
{
    // TODO...
}

// Display the game logic
function render()
{
    //Clearing the whole canvas
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Display the left paddle
    context.fillStyle = 'white';
    context.fillRect(paddle1PositionX, paddle1PositionY, PADDLE_WIDTH, PADDLE_HEIGHT);

    // Display the right paddle
    context.fillRect(paddle2PositionX, paddle2PositionY, PADDLE_WIDTH, PADDLE_HEIGHT);

    // Display the ball
    context.fillRect(ballPositionX, ballPositionY, BALL_SIZE, BALL_SIZE);
}

GameLoop();