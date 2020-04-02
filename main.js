// // document.getElementById("playing-field").style.backgroundColor = "blue"

// const playingField = document.getElementById("playing-field")
// console.log(playingField)

// const down = document.getElementById("down")
// console.log(down)
// console.log(down.innerHTML)
// down.innerHTML = "Down"
// console.log(playingField.innerHTML)

// playingField.style.backgroundColor

// /////// moving right w/ prase int: sec 8 :
// const ball = document.getElementById('block')
// ball.style.backgroundColor = 'yellow'             //this is changing it to yellow from earlier
// console.log(ball)

//   const moveRight = function(){
//     ball.style.left = ((parseInt(ball.style.left)||0)+15)  + "px"
//   }

// //   parseInt(...) || 0 // will parse a number, or return 0 if it can't parse


// //   moveRight()
// //   moveRight()
// //   moveRight()

// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// document.body.appendChild(header)

// ///////section 10 :
// const subHeader = document.createElement('h2')
// subHeader.innerHTML = 'Game creator: Eitan Gueron '
// subHeader.setAttribute('class','subheaders')
// subHeader.style.fontSize = '30px'
// document.body.appendChild(subHeader)

// const rightButton = document.getElementById("right")
// const turnGreen = function(){
//     rightButton.style.backgroundColor = 'green'
// }

// /*

// /////////////random color maker:

// const colToHex = (c) => {
//     // Hack so colors are bright enough
//     let color = (c < 75) ? c + 75 : c
//     let hex = color.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
//   }

// const rgbToHex = function(r,g,b) {
//     return "#" + colToHex(r) + colToHex(g) + colToHex(b);
//   }

// const getRandomColor = () => {
//     return rgbToHex(
//       Math.floor(Math.random() * 255),
//       Math.floor(Math.random() * 255),
//       Math.floor(Math.random() * 255));
//   }

// ////^^^^^^^^^^random color maker^^^^^^^^^^^^^^^

// //// section 13:

// list.onclick= function(){
//     const addList = document.createElement('li')
//     addList.innerHTML = 'BAM!! Want another one?'
//     addList.style.color = getRandomColor()
//     document.getElementById('list').appendChild(addList)
// }

// */


// // onclick="turnGreen()"

// // const rightButton = document.getElementById("right")
// const leftButton = document.getElementById("left")
// const upButton = document.getElementById("up")
// const downButton = document.getElementById("down")


// const turnGreen = function(){
//     rightButton.style.backgroundColor = 'green'
// }


const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement('h2')
subHeader.innerHTML = 'Game creator: Eitan Gueron '
subHeader.setAttribute('class', 'subheaders')
subHeader.style.fontSize = '30px'
document.body.appendChild(subHeader)

const rightButton = document.getElementById("right")
const leftButton = document.getElementById("left")
const upButton = document.getElementById("up")
const downButton = document.getElementById("down")
const ball = document.getElementById('block')
ball.style.left = 0 + 'px'
ball.style.top = 0 + 'px'

//DOWN:
downButton.onmousedown = function () {
    downButton.style.backgroundColor = 'yellow'
    if(parseInt(ball.style.top)<360){
        ball.style.top = ((parseInt(ball.style.top)||0)+15)  + "px"
    }
    // ball.style.top = ((parseInt(ball.style.top)||0)+15)  + "px"
}
downButton.onmouseup = function () {
    downButton.style.backgroundColor = '#95a5a6'
}

//UP:
upButton.onmousedown = function () {
    upButton.style.backgroundColor = 'yellow'
    if(parseInt(ball.style.top)>=15){
        ball.style.top = ((parseInt(ball.style.top)||0)-15)  + "px"
    }
    // ball.style.top = ((parseInt(ball.style.top)||0)-15)  + "px"
}
upButton.onmouseup = function () {
    upButton.style.backgroundColor = '#95a5a6'
}

//LEFT:
leftButton.onmousedown = function () {
    leftButton.style.backgroundColor = 'yellow'
    if(parseInt(ball.style.left)>=15){
        ball.style.left = ((parseInt(ball.style.left)||0)-15)  + "px"
    }
    //ball.style.left = ((parseInt(ball.style.left)||0)-15)  + "px"
}
leftButton.onmouseup = function () {
    leftButton.style.backgroundColor = '#95a5a6'
}

//RIGHT:
rightButton.onmouseup = function () {
    rightButton.style.backgroundColor = '#95a5a6'
}
rightButton.onmousedown = function(){
    rightButton.style.backgroundColor = 'yellow'
    if(parseInt(ball.style.left)<390){
        ball.style.left = ((parseInt(ball.style.left)||0)+15)  + "px"
    }
    //ball.style.left = ((parseInt(ball.style.left)||0)+15)  + "px"
}




