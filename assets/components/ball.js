
const speed = (h) => {
    // h = 16t^2; formula is taken from physics
    return (h/Math.sqrt(h/16))/(60);
}
// function tick(currenttimr) {
//     const deltatime = current -localStorage
//     last = current
// }
export class Ball {
    static restCoefficient = 0.4;
    constructor(x, y, context, random) {
        this.minY = y;
        this.radius = random(10, 20);
        this.x = x;
        this.y = y;
        this.context = context;
        this.yDelta = speed(window.innerHeight-this.minY);
        this.color = "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")";
    }
    draw () {
      this.context.fillStyle = this.color;
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      this.context.fill();
    };

    update () {
        if (((this.y + this.radius) > window.innerHeight) && this.yDelta>0) {
            this.minY += (window.innerHeight-this.minY)*Ball.restCoefficient;
            this.yDelta *= -1;
        }

       if (((this.y - this.radius) < this.minY) && this.yDelta<0) {
           this.yDelta *= -1;
       }

       if ((this.minY+this.radius)>window.innerHeight) {
          this.yDelta = 0
       }

        this.y += this.yDelta;

         
    };
}