const image = document.getElementById('img');
const dm = document.querySelector('.dm');
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
let lenght,i = -4,block = 5,count=0,
rgb={r:0,g:0,b:0}
;

canvas.width = image.naturalWidth || image.width
canvas.height = image.naturalHeight || image.height
let src= canvas.toDataURL()


ctx.drawImage(image,0,0)
let e = ctx.getImageData(0,0,canvas.width,canvas.height)

lenght = e.data.length;

while ((i += block * 4) < lenght) {
    ++count;
    rgb.r += e.data[i]
    rgb.g += e.data[i+1]
    rgb.b += e.data[i+2]
}
    rgb.r = ~~(rgb.r/count)
    rgb.g = ~~(rgb.g/count)
    rgb.b = ~~(rgb.b/count)

    console.log(rgb)
    dm.style.color = `rgb(${rgb.r,rgb.g,rgb.b})`