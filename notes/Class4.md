# Class 4 - Let's make the ball move!

## Step 0
Make sure you have the code from last week. If you don't, you can find it [here](../code/Pong-2/pong.js)

Also, we forgot to add this in the previous classes but add this on line 7 just under the `canvas.tabindex = 1` line.

```js
canvas.focus();
```
This just makes it to that the canvas accepts user input right away and you don't need to click on it to start playing.

## Step 1 - Refactoring last week's code.
Now that we have the paddles working, we have a lot of code in our update function. Since everything happens inside of update, it's good practice to break up your code into individual functions for each behaviour. Let's do this for the paddle movement.

Create this function.
```js
function handlePaddleMovement(dt){

}
```
Since we're moving the movement code outside of update, we won't have delta time anymore. To get around this, we add it as a parameter to this new function.

Now, move all the code you have in update, into the new handlePaddleMovement function.
```js
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
```

Then, we need to call this function inside of update so the movement still works.

```js
function update(dt){
    handlePaddleMovement(dt);
}
```

Now run your website, it should be the same as before but with much cleaner code.

## Step 2 - Rendering the ball. ⚽
Now that we have the paddles, we need something for them to hit. Add some variables near the top of your code for the positions and dimensions of the ball. It would make sense to add this around where the paddle dimensions and positions are.

```js
// Ball variables
const BALL_SIZE = 20;
let ballY = CANVAS_HEIGHT / 2 - BALL_SIZE / 2
let ballX = CANVAS_WIDTH / 2 - BALL_SIZE / 2
```
Make sure you create these beneath where you're setting `CANVAS_HEIGHT` and `CANVAS_WIDTH`. If you don't you won't have access to those variables.

We're setting the ballY and ballX to the center of the screen, minus half the size of the ball. This will render it right in the middle to start.

### Step 2.1 - Rendering the ball.
Now that we have the location and size of the ball, we can draw it in the render() function. In the render function add this line.

```
// Draw the ball
context.fillRect(ballX, ballY, BALL_SIZE, BALL_SIZE);
```

## Step 3 - Ball Movement ⚽
To start, we need the ball velocity. So lets create some variables for the ball velocity.

Add these variables with the other ball variables.
```js
let ballXVelocity = 300;
let ballYVelocity = 150;
```

### Step 3.1 - Move the ball
Now, lets create a function to manage the ball movement logic.
```js
function handleBallLogic(dt){

}
```

Then, call the handleBallLogic function in the update function.

Add this line in update(dt)

```js
handleBallLogic(dt);
```

Now, let's actually make the ball move. To move the ball, we want to add the velocity to it every frame, scaled by the delta time. To do so, add the following code in your handleBallLogic function.

```js
ballX += ballXVelocity * dt;
ballY += ballYVelocity * dt;
```

Since we're rendering the ball at ballX and ballY, changing the variables is enough to make the ball move!

## Step 4 - Collisions 💥

### Step 4.1 - Paddle Collisions
Here are the functions which will detect whether the ball collided with a paddle. Add this near the bottom of your code. If you'd like an explanation, ask Jeffrey / Sam to explain since it'll be easier to explain in person than it is to write.

```js
function ballCollidedWithAPaddle(){
    return didCollide(ballX, ballY, BALL_SIZE, BALL_SIZE, 0, player1Y, PADDLE_WIDTH, PADDLE_HEIGHT) 
           || didCollide(ballX, ballY, BALL_SIZE, BALL_SIZE, CANVAS_WIDTH - PADDLE_WIDTH, player1Y, PADDLE_WIDTH, PADDLE_HEIGHT) 
}

function didCollide(x1, y1, width1, height1, x2, y2, width2, height2){
    return x1 < x2 + width2 &&
           x1 + width1 > x2 &&
           y1 < y2 + height2 &&
           y1 + height1 > y2
}
```

Now, in the handleBallLogic() function, we will check to see if the ball collided with the a paddle. If it does, we simple flip the velocity from negative to positive or from positive to negative to change the direction.

To do that, we add this code inside of handleBallLogic() on the first line.

```js
if(ballCollidedWithAPaddle()){
    ballXVelocity *= -1;
}
```

Your handleBallLogic() function should now look like this.

```js
function handleBallLogic(dt){
    if(ballCollidedWithAPaddle()){
        ballXVelocity *= -1;
    }

    ballX += ballXVelocity * dt;
    ballY += ballYVelocity * dt;
}
```

In english, this is saying "If the ball collides with the paddle, multiply the ball's x velocity by -1 to change the direction."

### Step 4.2 - Wall collisions 🧱
Wall collisions are much simpler. We just need to check if the player has reached the top or bottom of the screen. If so, we change the flip the y velocity.

In the handleBallLogic function we can use the following logic to do that.

```js
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
```

## Step 5 - Challenge ✨
Right now, the game is pretty slow. As a challenge, try to increase the ball's x velocity every time it hits a paddle. That way, the longer the game goes on the faster it will be.

<details> 
  <summary>Hint 1</summary>
   You want to increase the ball speed when you change the ball's direction.
</details>
<details> 
  <summary>Hint 2</summary>
   If you're adding to the speed, adding to a negative speed will make the ball move slower.
</details>
<details> 
  <summary>Hint 3</summary>
   Check if the speed is negative or positive and add / subtract some value accordingly.
</details>
<details> 
  <summary>Hint 4</summary>
   You may want to multiply the ball's speed by a value like 1.1 to increase it regardless of the velocity's sign.
</details>
<details> 
  <summary>Solution 1</summary>
   Replace the following in handleBallLogic

```js
if(ballCollidedWithAPaddle()){
    ballXVelocity *= -1;
}
```

With this

```js
if(ballCollidedWithAPaddle()){
    ballXVelocity *= -1.1;
}
```

</details>
<details> 
  <summary>Solution 2</summary>
   In the if statement where you check if the ball collided with the paddle, change it to this.

```js
if(ballCollidedWithAPaddle()){
    ballXVelocity *= -1;

    if (ballXVelocity > 0)
        ballXVelocity += 30;
    else
        ballXVelocity -= 30;
}
```

</details>

## (Optional) Challenge - AI
For this challenge, try to make the second player paddle an AI. Instead of having a player control it with the arrow keys, try to make it react to the ball position and hit it.