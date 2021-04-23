import React from 'react';

// Components.
import InputA from '../inputs/InputA';

// Styles.
import styles from '../styles/forms/FormAddEvent.module.scss';

const FormAddEvent = () => {
  return (
    <form>
      <div className={styles.header}>Add Event</div>
      <div>
        <InputA
          error="Please insert your title."
          label="Title"
          placeholder="Your title.."
          type="text"
        />
        <InputA
          label="Location"
          placeholder="Location for meeting..."
          type="text"
        />
        <InputA label="Participants" type="text" />
        <InputA label="Date" type="text" />
        <InputA
          rows={3}
          label="Note"
          placeholder="Write your note here..."
          type="textarea"
        />
        <InputA type="file" label="Image" value="/asas/asasas.png" />
      </div>
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormAddEvent;
