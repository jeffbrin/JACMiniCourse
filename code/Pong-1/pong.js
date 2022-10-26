let canvas = document.getElementsByTagName("canvas")[0];
let context = canvas.getContext("2d");

// Make the canvas able to recieve input
canvas.tabIndex = 1;

// Create the canvas constants and set the dimensions
const CANVAS_HEIGHT = 720;
const CANVAS_WIDTH = 1080;
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;

// Create the paddle constants
const PADDLE_COLOUR = "white"
const PADDLE_WIDTH = 30;
const PADDLE_HEIGHT = 175;


context.fillStyle = PADDLE_COLOUR;

const keys = {};

canvas.addEventListener('keydown', handleKeyPressDown);
canvas.addEventListener('keyup', handleKeyPressUp);

// Draw the left paddle
context.fillRect(0, 0, PADDLE_WIDTH, PADDLE_HEIGHT);


// Draw the right paddle
context.fillRect(CANVAS_WIDTH - PADDLE_WIDTH, CANVAS_HEIGHT - PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_HEIGHT);

function handleKeyPressDown(event){

}
function handleKeyPressUp(event){
    
}