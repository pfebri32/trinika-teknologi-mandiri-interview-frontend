import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EventCard from '../components/cards/EventCard';

const Home = () => {
  return (
    <Container>
      <Row style={{ paddingTop: '30px' }}>
        <Col md={4}>
          <EventCard />
        </Col>
        <Col md={4}>
          <EventCard />
        </Col>
        <Col md={4}>
          <EventCard />
        </Col>
        <Col md={4}>
          <EventCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
