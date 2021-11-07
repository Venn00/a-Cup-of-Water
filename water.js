export class Water{
  constructor () {
    this.color = "#33b4ff"
  }

  draw(ctx, leftbtm, leftmid, lefttop, rightbtm, rightmid, righttop) {
    

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1;
    ctx.moveTo(leftmid[0], leftmid[1]);
    ctx.lineTo(leftbtm[0], leftbtm[1]);
    ctx.lineTo(rightbtm[0], rightbtm[1]);
    ctx.lineTo(rightmid[0], rightmid[1]);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill() 
    ctx.stroke();
  }


}