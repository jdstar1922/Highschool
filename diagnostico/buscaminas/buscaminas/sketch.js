function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
let rows;
let cols;
let grid;
let totalMines = 30;
let w = 20;
let flaggedMines = 0;
function setup() {
  createCanvas(401, 401);
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Celda(i, j, w);
    }
  }
  let options = new Array();
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
        options.push([i,j]);
    }
  }
  for(let n = 0; n < totalMines; n++){
    let index = floor(random(options.length));
    let choice = options[index];
    let i = choice[0];
    let j = choice[1];
    options.splice(index,1);
    grid[i][j].mine = true;
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].countMines();
    }
  }
}
function draw() {
  background(200);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
function gameOver(){
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].revealed=true;
    }
  }
}
function mousePressed() {
  if(keyIsDown(16)){
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if(grid[i][j].contains(mouseX,mouseY)){
          grid[i][j].flag();
          if(grid[i][j].mine){
            flaggedMines++;
            console.log(flaggedMines);
            if(flaggedMines == totalMines){
              console.log("Ganaste");
              gameOver();
            }
          }
        }
      }
    }
  }else{
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if(grid[i][j].contains(mouseX,mouseY)){
          grid[i][j].reveal();
          if(!grid[i][j].flagged){
            if(grid[i][j].mine){
              gameOver();
            }
          }
        }
      }
    }
  }
}
function keyPressed(){
  if(keyCode === 16){
  }
}
