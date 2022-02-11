import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ABOUTUS_ROUTE, HOME_ROUTE, HOTEL_ROUTE, SPECIAL_ROUTE } from '../utils/consts';

const NavBar = () => {
  return (
    <Navbar style={{backgroundColor: 'rgba(0, 0, 0, 0.25)'}} expand="lg">
      <Container fluid>
        <Navbar.Brand>Hotel Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href={HOME_ROUTE}>Home</Nav.Link>
            <Nav.Link href={HOTEL_ROUTE}>Hotels</Nav.Link>
            <Nav.Link href={SPECIAL_ROUTE}>Special Offers</Nav.Link>
            <Nav.Link href={ABOUTUS_ROUTE}>About Us</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#">Reviews</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;