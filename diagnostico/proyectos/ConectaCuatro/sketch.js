let arr;
function make2DArray(cols, rows) {
  arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
let rows;
let cols;
let grid;
let w = 100;
let end = false;
let options = new Array();
let ultimaPos = new Array();
let player1 = true;
function setup() {
  createCanvas(701, 601);
  const button = createButton("reset");
  button.mousePressed(resetSketch);
  resetSketch();
}
function resetSketch() {
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Celda(i, j, w);
    }
  }
  for (let i = 0; i < cols; i++) {
    ultimaPos[i] = arr[0].length - 1;
  }
}
function draw() {
  background(127);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
function mousePressed() {
  if (!end) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i][j].contains(mouseX, mouseY)) {
          switch (i) {
            case 0:
              fills(i, j);
              break;
            case 1:
              fills(i, j);
              break;
            case 2:
              fills(i, j);
              break;
            case 3:
              fills(i, j);
              break;
            case 4:
              fills(i, j);
              break;
            case 5:
              fills(i, j);
              break;
            case 6:
              fills(i, j);
              break;
          }
        }
      }
    }
  }
}
function fills(i, j) {
  if (player1) {
    grid[i][ultimaPos[i]].fillCell(200, 0, 0);
    grid[i][ultimaPos[i]].p = 1;
    player1 = false;
  } else {
    grid[i][ultimaPos[i]].fillCell(0, 0, 200);
    grid[i][ultimaPos[i]].p = 2;
    player1 = true;
  }
  recorre();
  ultimaPos[i]--;
}
let gano, right, left, up, down;
function recorre() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (evaluarAlrededor(i, j)) gano = true;
    }
    if (gano) {
      console.log("Juego Terminado");
      end = true;
      break;
    }
  }
}
function evaluarAlrededor(i, j) {
  right = false;
  left = false;
  up = false;
  down = false;
  if (grid[i][j].i + 3 < cols) {
    if (
      noCero(i, j) &&
      grid[i][j].p === grid[i + 1][j].p &&
      grid[i][j].p === grid[i + 2][j].p &&
      grid[i][j].p === grid[i + 3][j].p
    ) {
      return ganador(grid[i][j].p);
    }
    right = true;
  }
  if (grid[i][j].i - 3 >= 0) {
    if (
      noCero(i, j) &&
      grid[i][j].p === grid[i - 1][j].p &&
      grid[i][j].p === grid[i - 2][j].p &&
      grid[i][j].p === grid[i - 3][j].p
    ) {
      return ganador(grid[i][j].p);
    }
    left = true;
  }
  if (grid[i][j].j + 3 < rows) {
    if (
      noCero(i, j) &&
      grid[i][j].p === grid[i][j + 1].p &&
      grid[i][j].p === grid[i][j + 2].p &&
      grid[i][j].p === grid[i][j + 3].p
    ) {
      return ganador(grid[i][j].p);
    }
    down = true;
  }
  if (grid[i][j].j - 3 >= 0) {
    up = true;
  }
  if (right) {
    if (up) {
      if (
        noCero(i, j) &&
        grid[i][j].p === grid[i + 1][j - 1].p &&
        grid[i][j].p === grid[i + 2][j - 2].p &&
        grid[i][j].p === grid[i + 3][j - 3].p
      ) {
        return ganador(grid[i][j].p);
      }
    }
    if (down) {
      if (
        noCero(i, j) &&
        grid[i][j].p === grid[i + 1][j + 1].p &&
        grid[i][j].p === grid[i + 2][j + 2].p &&
        grid[i][j].p === grid[i + 3][j + 3].p
      ) {
        return ganador(grid[i][j].p);
      }
    }
  }
  if (left) {
    if (up) {
      if (
        noCero(i, j) &&
        grid[i][j].p === grid[i - 1][j - 1].p &&
        grid[i][j].p === grid[i - 2][j - 2].p &&
        grid[i][j].p === grid[i - 3][j - 3].p
      ) {
        return ganador(grid[i][j].p);
      }
    }
    if (down) {
      if (
        noCero(i, j) &&
        grid[i][j].p === grid[i - 1][j + 1].p &&
        grid[i][j].p === grid[i - 2][j + 2].p &&
        grid[i][j].p === grid[i - 3][j + 3].p
      ) {
        return ganador(grid[i][j].p);
      }
    }
  }
}
function noCero(i, j) {
  return grid[i][j].p !== 0;
}
function ganador(ganador) {
  console.log(`El ganador es ${ganador}`);
  return true;
}
