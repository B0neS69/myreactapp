import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ServiceCard = ({ title, description, price, addToCart, removeFromCart, isAddedToCart, image }) => {
  return (
    <Card className='serviceCard'>
      <Card.Img className='card-img-top' variant="top" src={image} alt={title} /> 
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><strong>Ціна: {price}</strong></Card.Text>
        {isAddedToCart ? (
          <Button variant="danger" onClick={() => removeFromCart({ title, price })}>
            Видалити
          </Button>
        ) : (
          <Button variant="success" onClick={() => addToCart({ title, price })}>
            Додати
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
