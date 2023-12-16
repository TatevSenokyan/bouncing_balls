import { Ball } from "./components/ball.js";

export const data = {
    playSound: false,
    mode: "light",
    balls: [],
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    addBall: function (x, y, context) {
        if (this.balls.length === 15) {
            this.balls.length = 0;
        } else {
            this.balls.push(new Ball(x, y, context, this.random, this.switchSound, this.playSound ));
        }
        this.showBallsCount();
    },
    addInitialBalls: function (context) {
        [...new Array(4)].forEach(() => {
          this.addBall(null, null, context);
        });
        this.showBallsCount();
    },
    showBallsCount: function () {
       document.querySelector("nav>p").innerHTML = `Balls Count: ${this.balls.length}`;
    },
    switchSound: function () {
        const audio = new Audio("./assets/audio/bounce.wav");
        audio.currentTime = 0;
        audio.play();
    },
    soundState: function () {
       this.playSound = !this.playSound;
       return this.balls.map((ball)=>ball.playSound = this.playSound);
    },
    changeMode: function (state) {
        if (state) {
           this.mode = this.mode === "light" ? "dark" : "light";
        }
        const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
        const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
        document.querySelector("img").src = this.mode === "light" ? sun : moon;
        state && document.body.classList.toggle("dark");
    }
 }