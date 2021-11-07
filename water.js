export class Water{
  constructor () {
    this.WATERLEVEL = 0.5;
    this.radius = parent.radius;
  }

  draw(ctx, lefttop, leftbtm, rightbtm, righttop, pointX, pointY, vx, vy ,height , width, radius) {
    this.width = width;
    this.height = height;
    this.lefttop = lefttop;
    this.leftbtm = leftbtm;
    this.rightbtm = rightbtm;
    this.righttop = righttop;
    this.radius = radius;
    console.log(this.lefttop  , lefttop)
    this.leftbtm = [pointX - this.width * Math.cos(this.radius) , pointY - this.width * Math.sin(this.radius)];
    this.lefttop = [this.leftbtm[0] - this.height * Math.cos(this.theta  + this.radius),
    this.leftbtm[1] - this.height * Math.sin(this.theta + this.radius) * this.WATERLEVEL];
    this.rightbtm = [pointX + this.width * Math.cos(this.radius) , pointY + this.width * Math.sin(this.radius)];
    this.righttop = [rightbtm[0] + this.height * Math.cos(-this.theta  + this.radius),
    rightbtm[1] - this.height * Math.sin(+ Math.PI-this.theta + this.radius) * this.WATERLEVEL];
    
    ctx.strokeStyle = "#b6dbff";
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(this.lefttop[0], this.lefttop[1]);
    ctx.lineTo(this.leftbtm[0], this.leftbtm[1]);
    ctx.lineTo(this.rightbtm[0], this.rightbtm[1]);
    ctx.lineTo(this.righttop[0], this.righttop[1]);
    ctx.closePath();
    ctx.stroke();


  }


}