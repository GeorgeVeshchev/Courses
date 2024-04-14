let num = parseInt(prompt("Введіть ціле число:"));

if (!isNaN(num)) {
    let isPrimeNumber = true;

    if (num <= 1) {
        isPrimeNumber = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrimeNumber = false;
                break;
            }
        }
    }

    if (isPrimeNumber) {
        console.log(num + " є простим числом.");
    } else {
        console.log(num + " не є простим числом.");
    }
} else {
    console.log("Ви не ввели число.");
}
