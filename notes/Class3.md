# Class 3

## Goal 🥅 :
### Receive Input from the keyboard to move the paddle

## Game Loop
Receive Input -> Update the Game Logic -> Render on the screen

<img src=https://gameprogrammingpatterns.com/images/game-loop-simple.png>

## Delta Time (dt)
We must scale all of our values with delta time in order for the game logic to behave the same on every computer.

### 60 FPS
Every frame renders and updates every 0.0167 Seconds or 16.7ms


### 30 FPS
Every frame renders and updates every 0.0333 Seconds or 33.3ms

## The First Gif is scaling the game to 60 FPS, second is 30 FPS
<img src="../Assets/60fps.gif">
<img src="../Assets/30fps.gif">


In both of these the ball is moving at 100 pixels * the framerate per update  function call however they are scaled to different framerates.

We want to avoid tying the physics to the framerate by using delta time.

    // Old
    function update() {
        spaceship.x += 10; 
        // Every frame, move the spaceship 10 pixels to the right.
    }

    // New
    function update(dt) {
        spaceship.x += 10 * dt; 
        // Every frame, move the spaceship (10 * dt) pixels to the right.
    }

## So what is delta time?
Very simple it is the time elapsed between the previous frame and the current frame.

## Clearing the canvas before rendering
We have to clear the canvas every time right before we render. This will give the illusion of movement.

### What is we don't clear?
Well...
<br>

![NotClearing](../Assets/notClearRect.gif)



<br><br>

---


<br><br>

### Stop 0: Download Pong 2 from GitHub

Let's look at the code...

### Step 1: How to tell which key is being pressed?
In a game we need to capture the player's input ⌨️.

We will be doing something whenever the user presses the **W, S, UpArrow, DownArrow keys**

In order to do this we need to add something called an **Event Listener** 👂.

Events are built in to JavaScript and you can read up more on them [here](https://www.w3schools.com/js/js_events.asp)

An event listener attaches to a specific HTML object and will 'listen' for events which then gives us the ability to 'react' to them. Some examples of events are:

1. onclick 🖱️
2. onmouseover 🖱️
3. onload ⌛
4. keydown ⌨️
5. keyup ⌨️

We will be using the last ones called 'keydown' and 'keyup'. This means that when the user presses down a key the listener will trigger giving us an opportunity to do something with this key press.

    canvas.addEventListener('keydown', handleKeyPressDown);
    canvas.addEventListener('keyup', handleKeyPressUp);

The **handleKeyPress** argument being passed into the function is a function that indicates to the event listener which function to call when the event happens.
<br> These are called **Callback Functions**.

### Step 2: We need add something to keep track of the keypresses
    const keys = {};


### Step 3: We need to create the handleKeyPress functions
    function handleKeyPressDown(event){
        keys[event.key] = true;
    }
    function handleKeyPressUp(event){
        keys[event.key] = false;
    }

### Step 4: We must now update the logic in the 'update' function:
    // Player 1 movement.
	if (keys.w) {
		// Add negative paddle speed to current Y scaled by deltaTime.
		player1Y -= PADDLE_SPEED * dt;
	}
	else if (keys.s) {
		// Add positive paddle speed to current Y scaled by deltaTime.
		player1Y += PADDLE_SPEED * dt;
	}

	// Player 2 movement.
	if (keys.ArrowUp) {
		// Add negative paddle speed to current Y scaled by deltaTime.
		player2Y -= PADDLE_SPEED * dt;
	}
	else if (keys.ArrowDown) {
		// Add positive paddle speed to current Y scaled by deltaTime.
		player2Y += PADDLE_SPEED * dt;
	}
