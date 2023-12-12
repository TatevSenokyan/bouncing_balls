
export class Ball {
    static restitutionCoefficient = 0.4;
    constructor(x, y, context, random) {
        this.radius = random(10, 20);
        this.minY = y || random(this.radius, innerHeight-this.radius);
        this.x = x || random(this.radius, innerWidth-this.radius);
        this.y = y || this.minY;
        this.context = context;
        this.speed = this.calcSpeed(innerHeight-this.minY);
        this.color = "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")";
    }

    calcSpeed (height) {
       // formula is taken from physics h = 16t^2
       return (height/Math.sqrt(height/16))/(60);
    }
    draw () {
      this.context.fillStyle = this.color;
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      this.context.fill();
    };

    update () {
        if (((this.y + this.radius) > innerHeight) && this.speed>0) {
            this.minY += (innerHeight-this.minY)*Ball.restitutionCoefficient;
            this.speed *= -1;
        }

       if (((this.y - this.radius) < this.minY) && this.speed<0) {
           this.speed *= -1;
       }

       if ((this.minY+this.radius)> innerHeight) {
          this.speed = 0
       }

        this.y += this.speed;
 
    };
}