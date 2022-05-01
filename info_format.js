// This class will check the username, password, and email of a string
const SUCCEED = 9
const FAILED = 10
const TOOSHORT = 11
const TOOLONG = 12


const MINPASS = 8
const MAXPASS = 30

const NUMBER = 0;
const LOWERCASE = 1;
const UPPERCASE = 2;
const SPECIALCASE = 3;

const MINUSER = 5;
const CONTAINSPECIAL = 13
const CONTAINSPACE = 14;
const NOTSTARTLETTER = 15;
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

// This function randomly generates a secure password that
// contains at least a number, a special character, and upper 
// plus lower case letter and size is between 8 to 30
function strongPassword(){
    // determine the number of numerical letters, special characters, 
    // and upper plus lower case letters in the password
    var num_num = Math.floor(Math.random() * 6) + (MINPASS / 4);
    var upper_num = Math.floor(Math.random() * 7) + (MINPASS / 4);
    var lower_num = Math.floor(Math.random() * 7) + (MINPASS / 4);
    var special_num = Math.floor(Math.random() * 6) + (MINPASS / 4);
    var password_length = num_num + upper_num + lower_num + special_num;
    var randompassword = '';
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var num = "1234567890";
    var special = "!@#$%^&*";
    var type;
    var c;
    
    // determine the type of character at each digit in the password
    while (num_num > 0 || upper_num > 0 || lower_num > 0 || special_num > 0) {
       type = Math.floor(Math.random() * 4);
        if (type == NUMBER && num_num > 0) {
            num_num--;
            c = Math.floor(Math.random() * num.length);
            randompassword += num.substring(c,c+1);
        }
        else if (type == LOWERCASE && lower_num > 0) {
            lower_num--;
            c = Math.floor(Math.random() * lower.length);
            randompassword += lower.substring(c,c+1);
        }
        else if (type == UPPERCASE && upper_num > 0) {
            upper_num--;
            c = Math.floor(Math.random() * upper.length);
            randompassword += upper.substring(c,c+1);
        }
        else if (type == SPECIALCASE && special_num > 0) {
            special_num--;
            c = Math.floor(Math.random() * special.length);
            randompassword += special.substring(c,c+1);
        }
    }
    return randompassword;
}

function validateUsername(username) {
    var special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    var c = username.substring(0, 1);
    var letter = /^[a-zA-Z]+$/
    if (username.length < 5) {
        return TOOSHORT
    }
    if (special.test(username)) {
        return CONTAINSPECIAL;
    }
    if (username.indexOf(' ') >= 0) {
        return CONTAINSPACE;
    }
    if (!letter.test(c)) {
        return NOTSTARTLETTER;
    }
    return SUCCEED;
}

console.log(validatePassword("aA123*@&lak"))
