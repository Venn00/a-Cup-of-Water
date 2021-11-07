import { Cup } from "./cup.js";

export class Point{
  constructor() {
      this.x = 100;
      this.y = 100;
      this.vx = 0;
      this.vy = 0;
      this.cup = new Cup();
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

      //draw cup
      const pointX = this.x;
      const pointY = this.y;
      const pointVx = this.vx;
      this.cup.draw(ctx, pointX, pointY, pointVx, this.vx, this.vy);

      ctx.fillStyle = '#fdd400';
      ctx.beginPath();
      ctx.arc(this.x, this.y, 10 ,0 , 2*Math.PI);
      ctx.fill();

      //Draw sets
     
  }
}