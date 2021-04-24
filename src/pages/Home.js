import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

// Configs.
import { API } from '../configs/api';
import { getMonthString } from '../configs/date';

// Components.
import EventCard from '../components/cards/EventCard';

// Styles.
import styles from './styles/Home.module.scss';

const Home = ({ event, initEvent }) => {
  // States.
  const [loading, setLoading] = useState(true);

  // Get events.
  const getEvents = async () => {
    try {
      const res = await API.get('/events');
      const { data } = res.data;
      initEvent(data.events, data.events.lenght);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  // Renders.
  const renderEvents = () =>
    event.events.map(({ image, location, title, date, note }) => {
      const temp = new Date(date);
      let dateString = temp.getDay() + ' ';
      dateString += getMonthString(temp.getMonth()) + ' ';
      dateString += temp.getFullYear();
      return (
        <Col lg={4} md={6} key={event.id}>
          <EventCard
            img={image}
            location={location}
            title={title}
            date={dateString}
            note={note}
          />
        </Col>
      );
    });
  return (
    <Container>
      <Row className={styles.row}>
        {!loading && event.events.length > 0 && renderEvents()}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  event: state.event,
});

const mapDispatchToProps = (dispatch) => {
  return {
    initEvent: (events, length) =>
      dispatch({ type: 'INIT', payloads: { events, length } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
