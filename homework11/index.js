let N = parseInt(prompt("Введіть ціле число N:"));

if (!isNaN(N)) {
    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            console.log(i);
        } else {
            break;
        }
    }
} else {
    console.log("Ви не ввели число.");
}
