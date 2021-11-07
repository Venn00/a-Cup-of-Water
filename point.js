import { Cup } from "./cup.js";
import { Water } from "./water.js";

export class Point{
  constructor() {    
    //point
    this.x = 300;
    this.y = 300;
    this.vx = 0;
    this.vy = 0;
    //cupgroup
    this.cup = new Cup();
    this.totalcups = 1;
    this.theta = 85 * Math.PI / 180; // cup
    this.radius = 0; //angle ,theta
    this.width = 60;
    this.height = 180; // it's not same to origin height
    this.watergroup = [];
    for (let i=0; i < this.totalcups; i++){
      this.watergroup[i] = new Water();
    }
    this.WATERLEVEL = 0.5
    ;
  }

  draw(ctx, mouseX, mouseY) {
    this.x += this.vx;
    this.y += this.vy;
    //Calculate Velocity.
    if (Math.abs(mouseX - this.x) > 3) {
        this.vx = (mouseX - this.x) / 10;
    }else{
        this.vx = 0;
    }
    if (Math.abs(mouseY - this.y) > 3) {
        this.vy = (mouseY - this.y) / 10;
    }else{
        this.vy = 0;
    }

    //Calulate Angle.
    this.radius += 0.1  * this.vx * Math.PI / 180;
    if (Math.abs(this.radius) < 0.002 ){
      this.radius = 0}
    else{ 
        this.radius *= 0.95; 
    }

    //Calculate Position
    const leftbtm = [this.x - this.width * Math.cos(this.radius) , this.y - this.width * Math.sin(this.radius)];
    const leftmid = [leftbtm[0] - this.height * Math.cos(-this.theta  - this.radius) * this.WATERLEVEL,
    leftbtm[1] - this.height * Math.sin(this.theta + this.radius)* this.WATERLEVEL];
    const lefttop = [leftbtm[0] - this.height * Math.cos(-this.theta  - this.radius),
      leftbtm[1] - this.height * Math.sin(this.theta + this.radius)];

    const rightbtm = [this.x + this.width * Math.cos(this.radius) , this.y + this.width * Math.sin(this.radius)];
    const rightmid = [rightbtm[0] + this.height * Math.cos(this.theta - this.radius )* this.WATERLEVEL,
    rightbtm[1] - this.height * Math.sin(+this.theta - this.radius)* this.WATERLEVEL];
    const righttop = [rightbtm[0] + this.height * Math.cos(this.theta - this.radius ),
    rightbtm[1] - this.height * Math.sin(+this.theta - this.radius)];
    // console.log(this.theta/Math.PI*180,  -this.radius/Math.PI*180)
    console.log(Math.sqrt((righttop[0]-rightbtm[0])**2 + (righttop[1]-rightbtm[1])**2 ));
    console.log(Math.sqrt((lefttop[0]-leftbtm[0])**2 + (lefttop[1]-leftbtm[1])**2 ))
    //Draw sets
    for (let i = 0; i < this.totalcups; i++ ) {
      const water = this.watergroup[i];
      console.log(rightbtm)
      water.draw(ctx, leftbtm, leftmid, lefttop, rightbtm, rightmid, righttop);
    }
    this.cup.draw(ctx, leftbtm, lefttop, rightbtm, righttop);
    
  }
}