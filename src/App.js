import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import ServicesPage from './components/services/ServicesPage';
import CartPage from './components/cart/CartPage';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import virImage from './img/vir.jpg';
import repImage from './img/rep.avif';
import inImage from './img/in.png';
import clImage from './img/cl.png';

function App() {
  const [selectedServices, setSelectedServices] = useState([]);
  const services = [
    {
      id: 1,
      title: 'Видалення вірусів',
      description: 'Ми видалимо віруси та шкідливі програми з вашого комп`ютера.',
      price: 500,
      image: virImage,
    },
    {
      id: 2,
      title: 'Ремонт обладнання',
      description: 'Виправлення таких проблем з обладнанням, як зламані екрани, клавіатур та ін.',
      price: 300,
      image: repImage,
    },
    {
      id: 3,
      title: 'Встановлення ПЗ',
      description: 'Встановлення та налаштування програмного забезпечення.',
      price: 250,
      image: inImage,
    },
    {
      id: 4,
      title: 'Очищення від пилу',
      description: 'Проведення очищення комп`ютера від накопиченого пилу та бруду.',
      price: 100,
      image: clImage,
    },
  ];

  return (
    <Router>
      <section className="app">
        <header className="app-header">
          <Menu cartCount={selectedServices.length} />
        </header>
        <Routes>
          <Route index element={<Navigate to="/home" />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<ServicesPage services={services} selectedServices={selectedServices} setSelectedServices={setSelectedServices} />} />
          <Route path="/cart" element={<CartPage selectedServices={selectedServices} />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
        <footer className="app-footer">
          <Contact />
        </footer>
      </section>
    </Router>
  );
}

export default App;
