// canvasLogic.js

// Get mainCanvas information
const canvas = document.getElementsByClassName("mainCanvas")[0]; 
const context = canvas.getContext("2d"); 

// Set mainCanvas dimensions based on monitor size
canvas.width = window.innerWidth - 200; 
canvas.height = window.innerHeight;

// Set how big each square should be 
const squareSize = 25; 

// drawGridLines function
function drawGridLines() {

    // line color and size
    context.strokeStyle = "black";
    context.lineWidth = 0.5; 

    // Vertical 
    for(let x = 0; x <= canvas.width; x += squareSize){
        context.beginPath(); 
        context.moveTo(x, 0); 
        context.lineTo(x , canvas.height); 
        context.stroke(); 
    }

    // Horizontal
    for(let y = 0; y <= canvas.height; y += squareSize){
        context.beginPath(); 
        context.moveTo(0, y); 
        context.lineTo(canvas.width , y); 
        context.stroke(); 
    }
}

// Call functions 
drawGridLines(); 
