import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Col, Container } from 'react-bootstrap';
import { Context } from '../index';

const TypeHotelBar = observer(() => {
  const {typeHotel} = useContext(Context)

  return (
    <Col className='d-flex'>
      {typeHotel._type.map(type =>
        <Container fluid>
          <a href='#'>
          <Card key={type.id}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn49wG_ZCTsQzM0VgmdtytOhBbZCB96WroWQ&usqp=CAU" />
            <Card.Body>
              <Card.Title>{type.name}</Card.Title>
            </Card.Body>
          </Card>
          </a>
        </Container>
      )}
    </Col>
  );
});

export default TypeHotelBar;