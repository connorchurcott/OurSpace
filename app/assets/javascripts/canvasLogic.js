// canvasLogic.js

// Get mainCanvas information
const canvas = document.getElementsByClassName("mainCanvas")[0]; 
const context = canvas.getContext("2d"); 

// Set squareSize, and number of rows and cols
const squareSize = 20; 
const rows = 60; 
const cols = 60; 

// Set canvas size to ensure same grid size regardless of monitor or refresh 
function resizeCanvas(){
    canvas.width = cols * squareSize; 
    canvas.height = rows * squareSize; 
    drawGridLines(); 
}

// Does the drawing of the gridlines 
function drawGridLines() {

    // line color and size
    context.strokeStyle = "black";
    context.lineWidth = 0.3; 

    // Vertical lines
    for(let x = 0; x <= canvas.width; x += squareSize){
        context.beginPath(); 
        context.moveTo(x, 0); 
        context.lineTo(x , canvas.height); 
        context.stroke(); 
    }

    // Horizontal lines
    for(let y = 0; y <= canvas.height; y += squareSize){
        context.beginPath(); 
        context.moveTo(0, y); 
        context.lineTo(canvas.width , y); 
        context.stroke(); 
    }
}

function paintSquare() {
    
}

// Event listners to update gridlines as window size changes
window.addEventListener('load', resizeCanvas); 
window.addEventListener('resize', resizeCanvas); 
window.addEventListener('click', )
