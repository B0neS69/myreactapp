import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/style/Service.css';
const ServicesPage = ({ services, selectedServices, setSelectedServices }) => {

  const addToCart = (service) => {
    //перевіряємо чи є вибрана послуга в списку SelectedServi
    if (!selectedServices.some((selectedService) => selectedService.title === service.title)) {
      setSelectedServices((prevSelectedServices) => [...prevSelectedServices, service]);
    }
  };

  const removeFromCart = (service) => {
    setSelectedServices((prevSelectedServices) =>
      prevSelectedServices.filter((selectedService) => selectedService.title !== service.title)
    );
  };

  return (
    <Container>
      <h2 className="mt-4">Наші послуги</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={4} className="mb-4">
            <div className="card">
              <img src={service.image} className="card-img-top" alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <p className="card-price">Ціна: {service.price} ₴</p>
                <button
                  className={`btn btn-${selectedServices.some((selectedService) => 
                    selectedService.title === service.title) ? 'danger' : 'primary'}`}
                  onClick={() => selectedServices.some((selectedService) => 
                    selectedService.title === service.title) ? removeFromCart(service) : addToCart(service)}
                >
                  {selectedServices.some((selectedService) => 
                    selectedService.title === service.title) ? 'Видалити з корзини' : 'Додати до корзини'}
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
  