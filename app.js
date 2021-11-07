import { Point } from "./point.js";

let mouseX ;
let mouseY ;

class App{
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.point = new Point(this.ctx);

    // window.addEventListener('resize', this.resize.bind(this), false);  //현재 의미없음.
    this.resize();
    window.requestAnimationFrame(this.animation.bind(this));


    document.addEventListener("mousemove",function(e){
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2,2);
  }

  animation() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    window.requestAnimationFrame(this.animation.bind(this));
    this.point.draw(this.ctx, mouseX, mouseY);
  }
}



window.onload = function () {
  new App();
}