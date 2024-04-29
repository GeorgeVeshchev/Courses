let contactBook = {
    contacts: [
      { name: "Georgit", phone_number: "+380988357835", email_address: "georgit@example.com" },
      { name: "Dan", phone_number: "+380888343734", email_address: "dan@example.com" },
      { name: "John", phone_number: "+380754345872", email_address: "john@example.com" },
      { name: "Dima", phone_number: "+3804567324322", email_address: "dima@example.com" }
    ],
  
   
    searchContact: function(name) {
      for (let contact of this.contacts) {
        if (contact.name === name) {
          return contact;
        }
      }
      return null; 
    },
  
    
    addContact: function(name, phone_number, email_address) {
      let newContact = {
        name: name,
        phone_number: phone_number,
        email_address: email_address
      };
      this.contacts.push(newContact);
    }
  };
  
  
  console.log(contactBook.searchContact("Georgit")); 
  contactBook.addContact("Oleg", "+38098357242", "oleg@example.com");
  console.log(contactBook.searchContact("Oleg")); 
  