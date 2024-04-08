function checkNumber(number) {
    let digits = number.toString(); 
    let allDigitsSame = digits[0] === digits[1] && digits[1] === digits[2]; 
    let anyDigitRepeats = digits[0] === digits[1] || digits[1] === digits[2] || digits[0] === digits[2]; 

    return { allDigitsSame, anyDigitRepeats };
}

    let numberToCheck = 333;

    let result = checkNumber(numberToCheck);
console.log(result);
