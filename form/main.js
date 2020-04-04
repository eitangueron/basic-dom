const submitButton = document.getElementById('submitButton')

const users = []

submitButton.onclick = function () {


    const name = document.getElementById('nameInput').value
    const salary = document.getElementById('salaryInput').value
    const birthday = document.getElementById('birthdayInput').value
    const phoneNumber = document.getElementById('phoneNumberInput').value

    //checking that name is longer then 2 (via color maipulation showing mistakes):

    if (name.length <= 2) {
        document.getElementById('invalidName').style.color = 'red'
    } else {
        document.getElementById('invalidName').style.color = 'rgb(207, 216, 208)'
    }

    //checking that salary is between 10k-16k (via color maipulation showing mistakes):

    if (salary > 16000 || salary < 10000) {
        document.getElementById('invalidSalary').style.color = 'red'
    } else {
        document.getElementById('invalidSalary').style.color = 'rgb(207, 216, 208)'
    }

    //checking that birthday entered (via color maipulation showing mistakes):

    if (!birthday) {
        document.getElementById('invalidBirthDay').style.color = 'red'
    } else {
        document.getElementById('invalidBirthDay').style.color = 'rgb(207, 216, 208)'
    }

    //checking that phone number is 10 digits (via color maipulation showing mistakes):

    if (phoneNumber.length !== 10) {
        document.getElementById('invalidPhoneNumber').style.color = 'red'
    } else {
        document.getElementById('invalidPhoneNumber').style.color = 'rgb(207, 216, 208)'
    }

    //if all good adding user to users list:

    if (name.length > 2 && salary < 16000 && salary > 10000 && birthday && phoneNumber.length === 10) {
        users.push({
            name: name,
            salary: salary,
            birthday: birthday,
            phoneNumber: phoneNumber
        })

        alert('Thank you for applying!\nGood luck!')

        ///clearing input fields:

        document.getElementById('nameInput').value = null
        document.getElementById('salaryInput').value = null
        document.getElementById('birthdayInput').value = null
        document.getElementById('phoneNumberInput').value = null
    }
}



