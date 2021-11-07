import { Water } from "./water.js";

export class Cup {
  constructor() {
    this.color = "#000000";  
  }
  
  draw(ctx, leftbtm, lefttop, rightbtm, righttop) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(lefttop[0], lefttop[1]);
    ctx.lineTo(leftbtm[0], leftbtm[1]);
    ctx.lineTo(rightbtm[0], rightbtm[1]);
    ctx.lineTo(righttop[0], righttop[1]);
    ctx.stroke();
  }
}