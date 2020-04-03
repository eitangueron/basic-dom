const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}



const capitalizeName = function (name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

const answer = document.createElement('p')
document.getElementById('all').appendChild(answer)  /// adding empty p 
answer.style.marginTop = 30 + 'px'
answer.style.fontSize = 22 + 'px'
const pressingButton = document.getElementById('nameEntered')


pressingButton.onclick = function () {

    const enteredInput = document.getElementById('customer').value //enteredinput = name enterd in lower case
    if (enteredInput === '') {  //checking that isnt pressing button without entering
        return null
    }
    const customerName = capitalizeName(enteredInput) //capitalizing
    document.getElementById('customer').value = ''   //refershing input 

    if (reservations[customerName] && !(reservations[customerName].claimed)) {
        answer.style.color = 'black'
        answer.innerHTML = `Welcome ${customerName}!`
    } else if (reservations[customerName] && reservations[customerName].claimed) {
        answer.style.color = 'black'
        answer.innerHTML = `Oops! ${customerName} has a reservation but it seems that the table is taken..`
    } else {
        answer.style.color = 'red'
        answer.innerHTML = `${customerName} has no reservation..`
    }

}
