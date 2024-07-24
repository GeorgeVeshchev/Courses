import React from 'react';
import '../styles/AboutPage.css'; 

function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-page__title">Про мене</h1>
      <div className="about-page__content">
        <p>Мене звуть Георгій. Мені 16 років,  я з Одеси, Україна.</p>
        <p>Я займаюсь спортом , особливо цікавлюсь боксом.</p>
        <p>Мої головні якості - це наполегливість, відповідальність , вміння працювати в команді.</p>
      </div>
    </div>
  );
}

export default AboutPage;
