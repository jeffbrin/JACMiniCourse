

let clicksCount = 0;

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

// Don't forget
canvas.tabIndex = 1;

canvas.width = 1000;
canvas.height = 1000;


// let fillTextX = canvas.width / 2 - 50;
// let lastTime = 0;
// let speed = 100;

canvas.addEventListener('keypress', handleKeyPress);




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


function basicIntDemo()
{
    let i = 5;
    let b = 4;

    i = 6;
    b = i;

    //What will be the output?
    console.log(b);
}

function typeCoercionDemo()
{
    let i = "5";
    let b = "9";

    console.log(i + b);
}

function ifStatementDemo()
{

    //boolean
    let isSunny = true;

    if (isSunny)
    {
        console.log("Go Outside");
    }
    else
    {
        console.log("Movie Night!");
    }



    //integer (Number in javascript)
    let maxNumber = 99;

    let myNumber = 5;

    //If Statement evaluates to a boolean (true or false)
    if (myNumber > maxNumber)
    {
        console.log("myNumber is larger");
    }
    else
    {
        console.log("maxNumber is larger");
    }



    // if (myNumber != maxNumber)
    // {
    //     console.log("Numbers are not equal");
    // }
    // else
    // {
    //     console.log("Numbers are equal");
    // }
}

function ifElseIfStatementDemo()
{
    //integer
    let maxNumber = 99;

    let myNumber = 99;


    if (myNumber > maxNumber)
    {
        console.log("myNumber is larger");
    }
    else if (myNumber < maxNumber)
    {
        console.log("maxNumber is larger");
    }
    else if (myNumber === maxNumber)
    {
        console.log("They are tied");
    }
}

// gameLoop();

// function gameLoop(currentTime = 0)
// {
//     const deltaTime = (currentTime - lastTime) / 1000;
//     update(deltaTime);
//     render();
//     lastTime = currentTime;
//     requestAnimationFrame(gameLoop);
// }

// function update(dt)
// {
//     if (fillTextX + 40 >= canvas.width || fillTextX <= 0)
//     {
//         speed *= -1;
//     }
//     fillTextX += speed * dt;
// }
// function render()
// {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.font = '40px Arial';
//     context.fillText(clicksCount, fillTextX, canvas.height / 2 - 50);
// }