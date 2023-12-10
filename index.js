import { canvas } from "./assets/components/canvas.js";
import { data } from "./assets/data.js";


const draw = () => {
    canvas.context().clearRect(0, 0, innerWidth, innerHeight);
    data.balls.forEach((ball) => ball.draw());
}

const update = () => {
    data.balls.forEach((ball) => ball.update());
  }

const tick = () => {
  requestAnimationFrame(tick);
  update();
  draw();
}
tick();


document.addEventListener("click", (event) => {
   data.addBall(event.x, event.y, canvas.context());
});



