import React from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles.
import styles from '../styles/cards/EventCard.module.scss';

// Components.
import NameTagCard from './NameTagCard';

const EventCard = ({ img, location, title, date, note, participants }) => {
  const renderNameTags = () =>
    participants.map(({ name }) => <NameTagCard name={name} />);
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={img} alt={img} />
      </div>
      <div className={styles.head}>
        <div className={styles.location}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div className={styles.address}>{location}</div>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.participants}>{renderNameTags()}</div>
      <div className={styles.note}>
        <div className={styles.label}>Note :</div>
        <div className={styles.content}>{note}</div>
      </div>
    </div>
  );
};

export default EventCard;
