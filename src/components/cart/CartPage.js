import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CartPage.css';

const CartPage = ({ selectedServices, removeFromCart, clearCart }) => {
  const calculateTotalPrice = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0);
  };

  return (
    <Container className="cart-container">
      <h2>Корзина</h2>
      {selectedServices.length > 0 ? (
        <Row className="cart-row">
          {selectedServices.map((service, index) => (
            <Col key={index} md={12} className="cart-col">
              <Card className="cart-card">
                <Card.Body className="cart-card-body">
                  <div className="cart-card-title">{service.title}</div>
                  <div className="cart-card-text">{service.price} грн</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col md={12} className="cart-total-col">
            <Card className="cart-total-card">
              <Card.Body className="cart-total-card-body">
                <div className="cart-total-row">
                  <Card.Title className="cart-total-title">Загальна вартість:</Card.Title>
                  <Card.Text className="cart-total-text">{calculateTotalPrice()} грн</Card.Text>
                </div>
                <div className="cart-buttons">
                  <Button variant="success" className="cart-order-button">Замовити</Button>
                  <Button variant="danger" className="cart-clear-button" onClick={clearCart}>
                    Видалити замовлення
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <p className="cart-empty-text">Ваша корзина порожня.</p>
      )}
    </Container>
  );
};

export default CartPage;
