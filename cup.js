import { Water } from "./water.js";

export class Cup {
  constructor() {
    //Cup Shape
    this.width = 70;
    this.height = 180; // it's not same to origin height
    this.theta = 85 * Math.PI / 180; // cup
    this.radius = 0; //angle ,theta
    
    //Water
    this.water = new Water;
  }
  
  draw(ctx, pointX, pointY, pointVx, vx, vy) {
    this.radius += 0.1  * pointVx * Math.PI / 180;
    if (Math.abs(this.radius) < 0.0001 ){
      this.radius = 0}
    else{ 
        this.radius *= 0.95; 
    }
    // this.radius = this.radius * 0.9;
    const leftbtm = [pointX - this.width * Math.cos(this.radius) , pointY - this.width * Math.sin(this.radius)];
    const lefttop = [leftbtm[0] - this.height * Math.cos(this.theta  + this.radius),
    leftbtm[1] - this.height * Math.sin(this.theta + this.radius)];
    const rightbtm = [pointX + this.width * Math.cos(this.radius) , pointY + this.width * Math.sin(this.radius)];
    const righttop = [rightbtm[0] + this.height * Math.cos(-this.theta  + this.radius),
    rightbtm[1] - this.height * Math.sin(+ Math.PI-this.theta + this.radius)];
   
    // //itworks but have some problem. it cannot express water level.
    // const lefttop = [pointX - this.width * Math.cos(this.radius), pointY - this.width * Math.sin(this.radius) ];
    // const righttop = [pointX + this.width * Math.cos(this.radius), pointY + this.width * Math.sin(this.radius) ];
    // const leftbtm = [pointX + this.height * Math.cos(this.radius + Math.PI - this.theta ),
    //   pointY + this.height * Math.sin(-this.radius + this.theta) ];     
    // const rightbtm = [pointX + this.height * Math.cos(this.radius + this.theta),
    //    pointY + this.height * Math.sin(this.radius + this.theta) ];
   
    this.water.draw(ctx, lefttop, leftbtm, rightbtm, righttop, pointX, pointY, vx, vy, this.height, this.width, this.radius);

    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.moveTo(lefttop[0], lefttop[1]);
    ctx.lineTo(leftbtm[0], leftbtm[1]);
    ctx.lineTo(rightbtm[0], rightbtm[1]);
    ctx.lineTo(righttop[0], righttop[1]);
    ctx.stroke();
    ctx.strokeStyle = "#000000";
  }
}