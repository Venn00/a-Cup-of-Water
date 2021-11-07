import { 
  WaveGroup
} from "./waveGroup.js";



class App{
  constructor() {
    this.canvas = document.createElement('canvas'); //캔바스추가
    this.ctx = this.canvas.getContext('2d');  //canvas.getcontext('2');
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
    requestAnimationFrame(this.animate.bind(this));
  }


  resize() { // 해상도 증가 시키고 이를 축소 시켜 확대하더라도 ,Bitmap의 약점보완
    this.stageWidth = document.body.clientWidth;    
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2,2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.waveGroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
}