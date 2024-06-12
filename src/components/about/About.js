import React from 'react';
import './About.css';
const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Про нас</h2>
      <p className="about-description">
        Наша компанія - ваш надійний партнер у сфері ремонту та обслуговування комп'ютерів. 
        Ми пропонуємо широкий спектр послуг, включаючи:
      </p>
      <ul className="about-services">
        <li>Ремонт та обслуговування комп'ютерів</li>
        <li>Чистка комп'ютерів від пилу та забруднень</li>
        <li>Збірка та налаштування персональних комп'ютерів</li>
        <li>Встановлення програмного забезпечення</li>
        <li>Видалення вірусів та інших загроз для безпеки</li>
      </ul>
    </div>
  );
};

export default About;
