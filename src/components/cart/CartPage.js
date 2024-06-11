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
            <Col key={index} md={12} className="cart-item">
              <Card className="cart-card">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>{service.title}</div>
                  <div className="cart-price">{service.price} грн</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col md={12} className="cart-total">
          <div className="cart-total-price">
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Загальна вартість:</h4>
                <div className="cart-price">{calculateTotalPrice()} грн</div>
              </div>
            </div>
            <div>
              
            </div>
            <div className="d-flex justify-content-end">
              <Button variant="success" className="cart-button">Замовити</Button>
            </div>
            <div className="d-flex justify-content-end">
              <Button variant="danger"className="cart-button" onClick={clearCart}>Видалити замовлення</Button>
            </div>
          </div>
          </Col>
        </Row>
      ) : (
        <p className="cart-empty">Ваша корзина порожня.</p>
      )}
    </Container>
  );
};

export default CartPage;
