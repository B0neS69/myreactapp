import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pcreg from '../../img/pcrep.jpg'; 
import pcpg from '../../img/pcpg.png';
import pcnew from '../../img/pcnew.png';
import './Home.css';

const Home = () => {
  return (
    <Carousel>

      <Carousel.Item>

        <img 
          className="d-block w-100"
          src={pcreg}          alt="First slide"
        />
        
        <Carousel.Caption>
          <h5 >Ремонт та чистка ПК</h5>
          <p>Проводимо професійний ремонт ПК та чистку від пилу</p>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>

        <img
          className="d-block w-100"
          src={pcpg}          alt="Second slide"
        />

        <Carousel.Caption>
          <h5>Встановлення ПЗ</h5>
          <p>Видалимо віруси та встановимо будь-яке ПЗ</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>

        <img
          className="d-block w-100"
          src={pcnew}          alt="Third slide"
        />

        <Carousel.Caption>
          <h5>Збірка ПК</h5>
          <p>
            Допоможимо вам підібрати ПК під ваші вимоги
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default Home;
