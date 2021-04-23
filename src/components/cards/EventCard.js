import React from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles.
import styles from '../styles/cards/EventCard.module.scss';
import NameTagCard from './NameTagCard';

const EventCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/undraw_meeting.svg`}
          alt="meeting"
        />
      </div>
      <div className={styles.head}>
        <div className={styles.location}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div className={styles.address}>PISANGAN TIMUR, JAKARTA</div>
        </div>
        <div className={styles.title}>Meeting With CEO</div>
        <div className={styles.date}>17 Agustus 2021</div>
      </div>
      <div className={styles.participants}>
        <NameTagCard />
        <NameTagCard />
        <NameTagCard />
        <NameTagCard />
      </div>
      <div className={styles.note}>
        <div className={styles.label}>Note :</div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          ultricies magna, eu tincidunt ex. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Donec odio
          quam, ultrices non massa in, fermentum imperdiet mi. Sed pharetra elit
          enim, et bibendum metus cursus consectetur. Integer vehicula fringilla
          ullamcorper. Vivamus laoreet tellus sit amet ligula blandit, id
          consectetur quam accumsan. Curabitur nec vestibulum urna. Etiam
          viverra enim non diam bibendum porta vel in est. Duis fringilla lorem
          ac placerat ultricies. Fusce suscipit turpis a efficitur accumsan.
          Cras ultricies ex a tortor finibus, nec condimentum urna iaculis. Nunc
          laoreet, sapien a sagittis commodo, ante eros ullamcorper nisi, nec
          aliquet urna neque vitae leo. Aliquam sagittis scelerisque vehicula.
          Donec tristique, ex id molestie ultrices, ipsum neque lacinia mauris,
          et gravida justo nulla sed lacus. Donec interdum augue in lectus
          aliquam consectetur. Phasellus lectus nisi, convallis a nulla et,
          condimentum varius elit.
        </div>
      </div>
    </div>
  );
};

export default EventCard;
