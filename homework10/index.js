const dollarRate = 26;

function grivnas(dollars) {
    return dollars * dollarRate;
}

for (let i = 10; i <= 100; i += 10) {
    console.log(i + " = " + grivnas(i));
}
