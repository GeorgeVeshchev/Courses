
let firstString = prompt("Введіть перший рядок:");
let secondString = prompt("Введіть другий рядок:");
let thirdString = prompt("Введіть третій рядок:");

let stringsArray = [firstString, secondString, thirdString];

console.log(stringsArray.sort(() => Math.random() - 0.5));