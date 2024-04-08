let userName = prompt("Введіть ваше ім'я:");
if (userName !== null && userName.trim() !== '') {
    alert(`Hello, ${userName}! How are you?`);
} else {
    alert("Ім'я не може бути порожнім");
}
