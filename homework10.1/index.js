// Створення об'єкта користувача
let user = {
    name : "Georiy",
    age : 16,
    city : "Odesa",
    
    gmail: "ghoraexample@gmail.com",
    number : "+380988357835",
    
    outputInfo : function() {
    console.log("Ім'я: " + this.name);
    console.log("Вік: " + this.age);
    console.log("Місце проживання: " + this.city);
    console.log("Електронна пошта: " + this.gmail);
    console.log("Номер телефону: " + this.number);
    }
  };
  
user.outputInfo();
 