import { context } from "./assets/components/canvas.js";
import { data } from "./assets/data.js";

data.addInitialBalls(context);
data.changeMode();

const draw = function () {
    context.clearRect(0, 0, innerWidth, innerHeight);
    data.balls.forEach((ball) => ball.draw());
}

const update = function () {
    data.balls.forEach((ball) => ball.update());
}

const tick = () => {
  requestAnimationFrame(tick);
  update();
  draw();
}
tick();

document.addEventListener("click", function (event) {
  data.addBall(event.x, event.y, context);
});

document.querySelector(".switchPart>div").addEventListener('click', function(event) {
  event.stopPropagation();
  data.soundState();
  this.classList.toggle("soundOn");
  this.parentElement.classList.toggle("soundOnBg");
});

document.querySelector("img").addEventListener('click', function(event) {
  event.stopPropagation();
  data.changeMode("clicked");
});



