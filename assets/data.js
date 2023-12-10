import { Ball } from "./components/ball.js";

export const data = {
    balls: [],
    random: (min, max)=> {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    addBall:function (x,y, context) {
        this.balls.push(new Ball(x, y, context, this.random));
    }
 }