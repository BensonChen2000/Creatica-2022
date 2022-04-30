/*

<script src="https://smtpjs.com/v3/smtp.js">
</script>

*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genCode() {
    const digit = 5
    var code = ""
    for (let i = 0; i < digit; i++) {
        code = code + getRandomInt(0, 9).toString()
    }

    return code
}


// will send an email to the email given and return the secret code
function sendEmail(email) {

    var code = genCode()
    Email.send({
        SecureToken : "1245b064-df34-4973-b267-8d367865023f",
        To : email,
        From : "bensonxxc@gmail.com",
        Subject : "New",
        Body : "The secret code is " + code
    }).then(
    message => alert(message)
    );

    return code
}