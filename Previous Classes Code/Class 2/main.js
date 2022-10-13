let canvas = document.getElementsByTagName("canvas")[0];
let context = canvas.getContext("2d");

// Make the canvas able to recieve input
canvas.tabIndex = 1;

canvas.height = 720;
canvas.width = 1080;