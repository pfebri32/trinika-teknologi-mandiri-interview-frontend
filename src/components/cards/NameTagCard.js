import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// Styles.
import styles from '../styles/cards/NameTagCard.module.scss';

const NameTagCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
      <div className={styles.name}>Febriansyah Putra</div>
    </div>
  );
};

export default NameTagCard;
