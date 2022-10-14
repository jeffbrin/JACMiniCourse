# Class 3

## Goal 🥅 :
### Receive Input from the keyboard to move the paddle

## Game Loop
    Receive Input -> Update the Game Logic -> Render on the screen
    Delta Time
    Frames Per Second

<img src=https://gameprogrammingpatterns.com/images/game-loop-simple.png>

### Step 1: How to tell which key is being pressed?
In a game we need to capture the player's input ⌨️.

We will be doing something whenever the user presses the **w, s, UpArrow, DownArrow keys**

In order to do this we need to add something called an **Event Listener** 👂.

Events are built in to JavaScript and you can read up more on them [here](https://www.w3schools.com/js/js_events.asp)

An event listener attaches to a specific HTML object and will 'listen' for events which then gives us the ability to 'react' to them. Some examples of events are:

1. onclick 🖱️
2. onmouseover 🖱️
3. onload ⌛
4. onkeydown ⌨️
5. keypress ⌨️

We will be using the last one called 'keypress'. This means that when the user presses down a key the listener will trigger giving us an opportunity to do something with this key press.

    canvas.addEventListener('keypress', handleKeyPress);

The **handleKeyPress** argument being passed into the function is a function that indicates to the event listener which function to call when the event happens.
<br> These are called **Callback Functions**.


### Step 2: We need to create the handleKeyPress function

