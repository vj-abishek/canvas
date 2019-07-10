const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const grd = ctx.createLinearGradient(200,200,205,205);

canvas.width = innerWidth;
canvas.height = innerHeight;

let x = Math.random() * innerWidth; 
// 
let y =Math.random() *  innerWidth;
let radius= 30
// 
let dx = 4;
let dy = 4;
const animate = () => {
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth,innerHeight)

    ctx.beginPath();
    ctx.lineWidth="2";
    grd.addColorStop(0,'#fdf497')
    grd.addColorStop(1,'#fd5949')
    ctx.strokeStyle=grd
    ctx.fillStyle=grd
    ctx.arc(x, y,radius,0,Math.PI * 2)
    ctx.fill()
    ctx.stroke();
    x + radius > innerWidth || x - radius < 0 ? dx = -dx:''
    y + radius > innerHeight || y - radius < 0 ? dy = -dy:''
   x +=dx
   y += dy
   console.log(x)
}

animate()