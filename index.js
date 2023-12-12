import { context } from "./assets/components/canvas.js";
import { data } from "./assets/data.js";

data.addInitialBalls(context);

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





