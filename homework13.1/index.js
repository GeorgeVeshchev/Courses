document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    let nameInput = document.getElementById("name");
    let nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Имя обязательно!";
      return;
    } else {
      nameError.textContent = "";
    }
  
    let messageInput = document.getElementById("message");
    let messageError = document.getElementById("messageError");
    if (messageInput.value.trim().length < 5) {
      messageError.textContent = "Сообщение должно содержать не менее 5 символов";
      return;
    } else {
      messageError.textContent = "";
    }
  
    let phoneInput = document.getElementById("phone");
    let phoneError = document.getElementById("phoneError");
    let phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
      phoneError.textContent = "Invalid phone number (must start with +380)";
      return;
    } else {
      phoneError.textContent = "";
    }
  

    let emailInput = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = "Invalid email format";
      return;
    } else {
      emailError.textContent = "";
    }
  
    console.log("Name: " + nameInput.value);
    console.log("Message: " + messageInput.value);
    console.log("Phone number: " + phoneInput.value);
    console.log("Email: " + emailInput.value);
  });
  