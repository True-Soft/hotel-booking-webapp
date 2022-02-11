import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import TypeHotelBar from '../components/TypeHotelBar';
import SpecialOffersBar from '../components/SpecialOffersBar';

const Home = () => {
  return (
    <Container fluid>
        <Container fluid>
            <Image
              src='https://mdbootstrap.com/img/new/slides/041.webp'
              className='img-fluid'
            />
        </Container>
        <Container>
              <TypeHotelBar/>
        </Container>
        <Container>
              <h1 className='text-center'>SPECIAL OFFERS</h1>
              <SpecialOffersBar/>
        </Container>
    </Container>
  );
};

export default Home;