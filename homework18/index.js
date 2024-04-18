function promptNumber() {
    let input;
    let iterations = 0;

    while (iterations < 10) {
        input = prompt("Введіть число більше 100:");

        if (input === null) {
            console.log("Користувач відмінив введення.");
            break;
        }

        const number = Number(input);

        if (isNaN(number)) {
            console.log("Ви ввели не число. Спробуйте ще раз.");
        } else if (number <= 100) {
            console.log("Введене число менше або дорівнює 100. Спробуйте ще раз.");
        } else {
            console.log("Ви ввели число більше 100 або текст. Останнє введення: " + number);
            break;
        }

        iterations++;
    }

    if (iterations === 10) {
        console.log("Досягнуто максимальну кількість ітерацій. Останнє введення: " + input);
    }
}

promptNumber();
