import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Components.
import FormAddEvent from '../../components/forms/FormAddEvent';

// Styles.
import styles from '../styles/events/AddEvent.module.scss';

const AddEvent = () => {
  return (
    <Container className={styles.container}>
      <Row className="no-gutters">
        <Col md={6}>
          <div className={styles.leftContent}>
            <FormAddEvent />
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.rightContent}>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/assets/undraw_meeting.svg`}
              alt="meeting"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEvent;
