import { Ball } from "./components/ball.js";

export const data = {
    balls: [],
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    addBall: function (x, y, context) {
        if (this.balls.length === 15) {
            this.balls.length = 0;
        } else {
            this.balls.push(new Ball(x, y, context, this.random));
        }
    },
    addInitialBalls: function (context) {
        [...new Array(4)].forEach(() => {
          this.addBall(null, null, context);
        });
    },
 }