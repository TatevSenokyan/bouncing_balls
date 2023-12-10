
class Canvas {
    constructor() {
        this.canvas = document.querySelector("canvas");
    }
    context () {
        return this.canvas.getContext("2d");
    }

    setSize () {
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
    }
}

export const canvas = new Canvas();
canvas.setSize();
