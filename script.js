const canvas = document.getElementById('render-canvas');
const ctx = canvas.getContext('2d');
canvas.height = innerHeight;
canvas.width = innerWidth;
const ParticlesArray = [];
const colorgroup = [
    '#8a00d4', '#d527b7', '#f782c2', '#f9c46b', '#e3e3e3',
    '#e74645', '#fb7756', '#facd60', '#fdfa66', '#1ac0c6',
    '#454d66', '#309975', '#58b368', '#dad873', '#efeeb4',
    '#272643', '#ffffff', '#e3f6f5', '#bae8e8', '#2c698d',
    '#361d32', '#543c52', '#f55951', '#edd2cb', '#f1e8e6',
    '#072448', '#54d2d2', '#ffcb00', '#f8aa4b', '#ff6150',
    '#12492f', '#0a2f35', '#f56038', '#f7a325', '#ffca7a',
    '#122c91', '#2a6fdb', '#48d6d2', '#81e9e6', '#fefcbf',
    '#27104e', '#64379f', '#9854cb', '#ddacf5', '#75e8e7',
    '#f7a400', '#3a9efd', '#3e4491', '#292a73', '#1a1b4b',
    '#343090', '#5f59f7', '#6592fd', '#44c2fd', '#8c61ff',
    '#1f306e', '#553772', '#8f3b76', '#c7417b', '#f5487f',
    '#e0f0ea', '#95adbe', '#574f7d', '#503a65', '#3c2a4d',
    '#f9b4ab', '#fdebd3', '#264e70', '#679186', '#bbd4ce',
    '#492b7c', '#301551', '#ed8a0a', '#f6d912', '#fff29c',
    '#ffa822', '#134e6f', '#ff6150', '#1ac0c6', '#dee0e6',
];

gradient = ctx.createRadialGradient(innerWidth / 1.5, innerHeight / 1.5, 0, innerWidth, innerHeight, 1110);
for (let i = 0; i < 6; i++) {
    var element = colorgroup[Math.round(i * Math.random() * 8)];
    gradient.addColorStop(0, "" + element + "");
    gradient.addColorStop(0.2, "" + element + "");
    gradient.addColorStop(0.4, "" + element + "");
    gradient.addColorStop(0.6, "" + element + "");
    gradient.addColorStop(0.8, "" + element + "");

    gradient.addColorStop(0.2, "" + element + "");
    gradient.addColorStop(0, "" + element + "");
}


ctx.fillStyle = gradient;
ctx.fillRect(0, 0, innerWidth, innerHeight);
// 
const numberofParticles = 250;

class Particles {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.g = 9.81;
        this.width = Math.round(Math.random() * 10) + 5;
        this.height = Math.round(Math.random() * 10) + 5;
    }
    update() {
        this.x += Math.round(Math.random() * 5) * 5;
        this.y += Math.round(Math.random() * 5) * 5;
        this.x -= Math.round(Math.random() * 5) * 5;
        this.y -= Math.round(Math.random() * 5) * 5;

    }
    draw() {
        ctx.fillStyle = "rgb(" + Math.round(Math.random() * 225) + ", " + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ")";
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
        ctx.fill()
    }

}

function init() {
    for (let i = 0; i < numberofParticles; i++) {
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        ParticlesArray.push(new Particles(x, y))
    }
}
init()


function animate() {
    for (let i = 0; i < ParticlesArray.length; i++) {

        ParticlesArray[i].update();
        ParticlesArray[i].draw();

    }

    requestAnimationFrame(animate);
}
animate();
window.addEventListener("resize", function() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
})