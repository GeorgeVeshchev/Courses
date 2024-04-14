let stringa = prompt("Введіть рядок:");
let removeItem = prompt("Введіть символи, які потрібно видалити:");

function removeFunct(stringa, removeItem) {
    let result = '';
    for (let i = 0; i < stringa.length; i++) {
        if (!removeItem.includes(stringa[i])) {
            result += stringa[i];
        }
    }
    return result;
}

if (stringa && removeItem) {
    const result = removeFunct(stringa, removeItem.split(''));
    console.log("Результат:", result);
} else {
    console.log("Введіть рядок та символи для видалення.");
}
