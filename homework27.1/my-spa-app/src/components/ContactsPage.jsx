import React from 'react';
import '../styles/ContactsPage.css'; 

function ContactsPage() {
  return (
    <div className="contacts-page">
      <h1 className="contacts-page__title">Контакти</h1>
      <div className="contacts-page__content">
        <p>Email: <a href="mailto:kkceeer@gmail.com">kkceeer@gmail.com</a></p>
        <p>Телефон: <a href="tel:+380988357835">+380988357835</a></p>
        <p>Instagram: <a href="https://www.instagram.com/georgiiveshchev/" target="_blank">@georgiiveshchev</a></p>
      </div>
    </div>
  );
}

export default ContactsPage;
