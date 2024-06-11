import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Menu = ({ cartCount }) => {
  return (
    <Navbar bg="light" expand="lg" className="py-3"> 
      <Container fluid>
        <Navbar.Brand href="#home" className="fs-4 mx-5">Веб-сайт фірми з ремонту комп'ютерів</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" className="fs-5 mx-2">Про нас</Nav.Link> 
            <Nav.Link href="#services" className="fs-5 mx-2">Послуги</Nav.Link> 
            <Nav.Link as={Link} to="/cart" className="fs-5 mx-2">Корзина ({cartCount})</Nav.Link> 
          </Nav>
          <Navbar.Text className="fs-5 mx-5">
            Увійшли як: <a>Гаврилюк Андрій</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
