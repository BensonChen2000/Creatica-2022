// This class will check the username, password, and email of a string
const SUCCEED = 4
const FAILED = 5
const TOOSHORT = 6
const TOOLONG = 7


const MINPASS = 8
const MAXPASS = 30

const NUMBER = 0;
const LOWERCASE = 1;
const UPPERCASE = 2;
const SPECIALCASE = 3;
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

function strongPassword(){
    var num_num = Math.floor(Math.random() * 6) + (MINPASS / 4);
    var upper_num = Math.floor(Math.random() * 7) + (MINPASS / 4);
    var lower_num = Math.floor(Math.random() * 7) + (MINPASS / 4);
    var special_num = Math.floor(Math.random() * 6) + (MINPASS / 4);
    var password_length = num_num + upper_num + lower_num + special_num;
    var randompassword = '';
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var num = "1234567890";
    var special = "~`!@#$%^&*()_-+={}[]|\/:;'<>,.?";
    var type;
    var c;
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

console.log(validatePassword("aA123*@&lak"))