let buttonContainer = document.getElementById("buttonContainer");

buttonContainer.addEventListener("click", function(event) {

    if (event.target.tagName === 'BUTTON') {

        let buttonText = event.target.textContent;
    
        alert("Клікнуто на кнопці: " + buttonText);
    }
});
