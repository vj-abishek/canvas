const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const grad = ctx.createLinearGradient(canvas.width/2,canvas.height/2,0,0)
// 
const outline = () => {
    ctx.beginPath()
grad.addColorStop(1,'#285AEB')
grad.addColorStop(0,' #fd5949')
grad.addColorStop(1,'#fdf497')
ctx.strokeStyle=grad

ctx.lineWidth = "2.5"
ctx.arc(canvas.width/2,canvas.height/2,30,ani,Math.PI * 2,false)

ctx.stroke()
}
let ani = 0;
outline()

const animationOutline = () => {
    let time = setInterval(() => {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        outline();
    ani++
    console.log(ani)
    },200)
}

canvas.addEventListener('click',()=> {
    animationOutline()
})
