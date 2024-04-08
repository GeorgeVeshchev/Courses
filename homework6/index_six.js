let yearOfBirth = prompt("Введіть свій рік народження:");
let city = prompt("Введіть місто, де ви живете:");
let favoriteSport = prompt("Введіть свій улюблений вид спорту:");

let currentYear = new Date().getFullYear();

let age = currentYear - parseInt(yearOfBirth);

let capitalMessage = "";
if (city.toLowerCase() === "київ" || city.toLowerCase() === "вашингтон" || city.toLowerCase() === "лондон") {
    capitalMessage = `Ти живеш у столиці ${getCountry(city)}.`;
} else {
    capitalMessage = `Ти живеш у місті ${city}.`;
}


function getCountry(capital) {
    switch (capital.toLowerCase()) {
        case "київ":
            return "України";
        case "вашингтон":
            return "США";
        case "лондон":
            return "Великої Британії";
        default:
            return "невідомої країни";
    }
}


alert(`Твій вік: ${age} років.\n${capitalMessage}\nТвій улюблений вид спорту: ${favoriteSport}.`);
