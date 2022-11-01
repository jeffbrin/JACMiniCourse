# Class 5 - Scorekeeping 🥅

## Step 1 - Detecting Goals

First, we'll create these two functions. Add them somewhere near the bottom of your script, but above the `GameLoop()` line.

```js
function didPlayer1Score(){
    // Return 1 if player 1 scored
    return ballX > CANVAS_WIDTH;
}

function didPlayer2Score(){
    // Return 2 if player 2 scored
    return ballX < -BALL_SIZE;
}
```
These will detect whether a player has scored.

Next, create this function and add it below the ones we just added. It will reset the ball to the middle of the screen.
```js
function resetBall(){
    freezeBall = true;
    ballX = CANVAS_WIDTH / 2 - BALL_SIZE / 2;
}
```

Next, we'll change update to actually reset the ball on a goal. Add the following code inside your `update` function.

```js
if(didPlayer1Score()){
    resetBall();
}
else if(didPlayer2Score()){
    resetBall();
}
```

## Step 1 - Serving 🏓

Now, we'll freeze the ball when someone scored so it can be served. Add the following variables near the top of your script.

```js
// Manage the serving state
let serving = 1;
let freezeBall = true;
```

Next, in our `handleBallLogic` function, we'll only let the ball move if the `freeze` variable is false. Add this code to your `handleBallLogic` function, on the very first line.

```js
if(freezeBall)
    return;
```
It means, "if the ball should be frozen, leave the function early without updating the location." If you run your website, the ball should be frozen in the middle of the screen.

Now, we need a serve function to let the ball start moving. Add this constant variable and function to your script.

```js
const STARTING_X_VELOCITY = 300;
function serve(){
    freezeBall = false;
    if(serving == 1)
        ballXVelocity = STARTING_X_VELOCITY
    else
        ballXVelocity = -STARTING_X_VELOCITY
}
```

Finally, in the update function, we'll allow the user to actually serve. Add this code to your `update` function.

```js
if(keys[" "] && freezeBall)
    serve();
```

## Step 3 - Detecting Who Scored

Now, we can serve and detect goals, but we aren't displaying or tracking any score. You also may have noticed that the same person serves every time. Let's change that.

Near the top of your script, add the following variables.

```js
let player1Score = 0;
let player2Score = 0;
```

Then, in the update function, we can increase a player's score every time they score.
Change the score. 

In update, change the section where we detect goals to look like this. At the same time, we'll set the player that should be serving next.
```js
if(didPlayer1Score()){
    serving = 2;
    resetBall();
    player1Score += 1;
}
else if(didPlayer2Score()){
    serving = 1;
    resetBall();
    player2Score += 1;
}
```

# Step 4 - Displaying the Score
Our last step is to show the players the score. To do so, Change your render function to look like this
```js
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

    context.font = "48px Arial"
    // Player 1 score
    context.fillText(player1Score, CANVAS_WIDTH / 4, 50);

    // Player 2 score
    context.fillText(player2Score, CANVAS_WIDTH *3 / 4, 50);
}
```

Make sure you remove the other render function so you don't have 2.