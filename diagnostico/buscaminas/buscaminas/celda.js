
class Celda {
  constructor(i,j,w) {
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    this.neighboorCount = 0;
    this.mine = false;
    this.revealed = false;
    this.flagged = false;
  }
  contains(x,y){
    return(x > this.x && x<this.x +this.w && y > this.y && y < this.y + this.w);
  }
  flag(){
    this.flagged = true;
  }
  reveal(){
    if(!this.flagged){
      this.revealed = true;
      if(this.neighboorCount == 0){
          this.floodFill();
      }
    }
  }
  show() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
    if(this.flagged){
      fill(0);
      rect(this.x, this.y, this.w, this.w);
    }
    if(this.revealed){
      if(this.mine){
        fill(255);
        rect(this.x, this.y, this.w, this.w);
        fill(120);
        ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5,this.w * 0.5);
      }
      else{
        fill(255);
        rect(this.x, this.y, this.w, this.w);
        if(this.neighboorCount > 0){
          textAlign(CENTER);
          fill(0);
          text(this.neighboorCount, this.x+this.w * 0.5, this.y + this.w -6);
        }
      }
    }
  }
  countMines(){
    if(this.mine){
      this.neighboorCount = -1;
      return;
    }
    let total = 0;
    for(let xoff = -1; xoff <= 1; xoff++){
      let i = this.i + xoff;
      if(i < 0 || i >=cols)continue;
      for(let yoff = -1; yoff <= 1; yoff++){
        let j = this.j + yoff;
        if(j < 0 || j >= rows)continue;
        let neighbor = grid[i][j];
        if(neighbor.mine){
          total++;
        }
      }
    }
    this.neighboorCount = total;
  }
  floodFill(){
    for(let xoff = -1; xoff <= 1; xoff++){
      let i = this.i + xoff;
      if(i < 0 || i >=cols)continue;
      for(let yoff = -1; yoff <= 1; yoff++){
        let j = this.j + yoff;
        if(j < 0 || j >=cols)continue;
        let neighbor = grid[i][j];
        if(!neighbor.revealed){
          neighbor.reveal();
        }
      }
    }
  }
}
