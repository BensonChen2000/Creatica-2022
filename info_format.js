// This class will check the username, password, and email of a string
const SUCCEED = 0
const FAILED = 1
const TOOSHORT = 2
const TOOLONG = 3


const MINPASS = 8
const MAXPASS = 30

// This function will check if password contains a number, 
// a special character, and upper plus lower case letter
// and size is between 8 to 30
function validatePassword(password){

    if (password.length < MINPASS) {
        return TOOSHORT
    } else if (password.length > MAXPASS) {
        return TOOLONG
    }

    var pw = /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/

    if (pw.test(password)) {
        return SUCCEED
    } else {
        return FAILED
    }
}


console.log(validatePassword("aA123*@&lak"))
