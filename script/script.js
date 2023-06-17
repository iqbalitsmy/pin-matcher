function getPin() {
    const pin = generatePin();
    const pinString = pin + "";
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
});
document.getElementById("calculator").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typeNumbers = document.getElementById("typed-number");
    const prevNumber = typeNumbers.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumbers.value = '';
        } else if (number === '<') {
            const digits = prevNumber.split("");
            console.log(digits)
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumbers.value = remainingDigits;
        }
    } else if (prevNumber.length < 4) {
        typeNumbers.value = prevNumber + number;
    }
});

document.getElementById("vefiry-pin").addEventListener("click", function (event) {
    console.log("verify pin")
})