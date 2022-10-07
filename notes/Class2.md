# Class 2

## Goal 🥅 :
    Draw Rectangles and the ball onto the canvas

## Functions
    Go Over Functions again
    Reiterate braces and brackets
    Parameters
    Scoping
    return values
        Really useful and we're going to use for functions that get something
        GetRandomNumber()
    Reuse the code for various applications

## Loops 🔁
    let foo = 0;

    for(let i = 0; i < 3; i++){
        foo += 1;
    }

    console.log(foo);

## Canvas
    (0,0) Top left
    y++ is down
    x++ is right

<img src="https://www.w3resource.com/w3r_images/html-canvas-grid.png">


## Game Loop
    Receive Input -> Update the Game Logic -> Render on the screen
    Delta Time
    Frames Per Second

<img src=https://gameprogrammingpatterns.com/images/game-loop-simple.png>

## Drawing On the Canvas
    context

## 🖌️ Draw onto the Canvas 🖼️
### 🎯Step 0 :
What we did last class.
Code is available on GitHub [here](https://github.com/jeffbrin/JACMiniCourse/tree/main/Previous%20Classes%20Code/Class%201).
Look Under 'Previous Classes Code' Folder

### 🎯Step 0.5:
In order to be able to properly use the canvas we have to add a few lines of code and store the canvas's context into a variable.

    const context = canvas.getContext('2d');
    canvas.tabIndex = 1;

🗒️*Note **const** is another reserved key word used to declare a variable (like **let**) however once a value is assign to it, it cannot be changed*


### 🎯Step 1:
We have our canvas in the HTML and we have a variable that is storing that HTML object. We now what to resize the canvas in order to make it bigger to better suit our needs.

In order to do so we will access two properties on the canvas variable we have:

1. canvas.width
2. canvas.height
   
Let us set them to a specific resolution:

1280x720 (commonly known as 720p)

    canvas.width = 1280;
    canvas.height = 720;

### 🎯Step 2:
Now that we have it sized the way we want, let us find a way to draw something onto the canvas.

In order to do this we will use the **context** variable we declared earlier.

The context variable is storing the 2d representation of what is inside the canvas.

    context.font = '40px Arial';
    context.fillText("Hello World", canvas.width / 2 - 50 canvas.height / 2 - 50);
We choose **canvas.width / 2** and **canvas.height / 2** in order to have it relatively center.

### 🎯Step 3:
In a game we need to capture the player's input ⌨️.

We will be doing something whenever the user presses the spacebar (denoted by ' ')

In order to do this we need to add something called an **Event Listener** 👂.

An event listener attaches to a specific HTML object and will 'listen' for events which then gives us the ability to 'react' to them. Some examples of events are:

1. onclick 🖱️
2. onmouseover 🖱️
3. onload ⌛
4. onkeydown ⌨️
5. keypress ⌨️

We will be using the last one called 'onkeydown'. This means that when the user presses down a key the listener will trigger giving us an opportunity to do something with this key press.

    canvas.addEventListener('keypress', handleKeyPress);

The **handleKeyPress** argument being passed into the function is a function that indicates to the event listener which function to call when the event happens.

❗One last thing we want to do is keep track of the number of times the user presses on the spacebar key.

In order to do this we will create a variable called clicksCount.

This is a variable that serves a specific purpose and it is called a 'counter' in programming. It is called this because it increments by one every time.

    let clicksCount = 0;
Add that line before adding the event listener to the canvas variable.

Your Code should look something like this:


    const canvas = document.getElementsByTagName('canvas')[0];
    const context = canvas.getContext('2d');

    canvas.tabIndex = 1;

    canvas.width = 1280;
    canvas.height = 720;
    
    let clicksCount = 0;

    canvas.addEventListener('keypress', handleKeyPress);

### 🎯Step 4
We will now create the **handleKeyPress** function.

In this function we want to make sure that the key that triggered the keypress event was the spacebar key.

    function handleKeyPress(event)
    {
        if (event.key == ' ')
        {
            clicksCount++;
            context.font = '40px Arial';
            context.fillText(clicksCount, canvas.width / 2 - 50, canvas.height / 2 - 50);
        }
    }
Add this code under the code written earlier.

⚒️ Breaking down the code ⚒️
---
We have a function that takes in an event as a parameter.

This event is an object that contains properties, just like canvas except the properties are different.

We will check if event.key was the spacebar key (denoted by ' ').

If this expression evaluates to true then we know the user pressed the spacebar and we will proceed into the if statement.

🗒️ *Note if the user presses a different key, the function is still called, except nothing happens*

Once inside the if statement body we will increment clicksCount, we will set the font to 40 pixels in size and the font is Arial.

Next is where we draw to the screen like we did earlier.

🐛 However there is a Bug 🐛
---
The function just keeps on getting called and the numbers just keep on getting drawn over eachother creating a mess.

![Not Clearing Canvas](../Assets/notClearingCanvas.gif)

In order to fix this bug we have to clear the canvas before redrawing the text.

This happens so fast that we can't perceive it and it gives the illusion of being a smooth transition.

![Frames Per Second](https://thumbs.gfycat.com/WholeDirtyLice-max-1mb.gif)

![Clearing Canvas](../Assets/clearingCanvas.gif)

Add this line of code inside the function before the context.fillStyle() line:

    context.clearRect(0, 0, canvas.width, canvas.height);


The function will now look like:

    function handleKeyPress(event)
    {
        if (event.key == ' ')
        {
            clicksCount++;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.font = '40px Arial';
            context.fillText(clicksCount, canvas.width / 2 - 50, canvas.height / 2 - 50);
        }
    }


### 🎯Step 5 Game Loop
Probably next class
---

