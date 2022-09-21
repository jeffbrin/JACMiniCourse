let clicksCount = 0;

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

// Don't forget
canvas.tabIndex = 1;

canvas.width = 1000;
canvas.height = 1000;

canvas.addEventListener('keypress', handleKeyPress);

function handleKeyPress(event){
    if(event.key == ' '){
        clicksCount++;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '40px Arial';
        context.fillText(clicksCount, canvas.width / 2 - 50, canvas.height / 2 - 50);
    }
}