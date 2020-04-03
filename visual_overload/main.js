const container = document.getElementById('container')

//random color func:
const getRandomColor = function () {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]

    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}

//creat a single box func :
const creatBox = function () {
    const box = document.createElement('div')
    box.style.width = 50 + 'px'
    box.style.height = 50 + 'px'
    box.style.backgroundColor = getRandomColor()
    box.onmouseenter = function () {
        box.style.backgroundColor = getRandomColor()
    }
    box.style.display = 'inline-block'
    box.style.border = 'black 1px solid'
    box.style.position = 'relative'
    box.style.top = 70 + 'px'
    box.style.marginLeft = 5 + 'px'
    container.appendChild(box)
}

//loop to creat sevrel boxs (this case 9):
for (let i = 0; i < 8; i++) {
    creatBox()
}
