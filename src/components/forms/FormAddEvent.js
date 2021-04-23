import React from 'react';
import { useFormik } from 'formik';

// Components.
import InputA from '../inputs/InputA';

// Styles.
import styles from '../styles/forms/FormAddEvent.module.scss';

const FormAddEvent = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Required';
    }

    if (!values.location) {
      errors.location = 'Required';
    }

    if (!values.note) {
      errors.note = 'Required';
    } else if (values.note.length <= 50) {
      errors.note = 'Minimum length 50.';
    }

    if (!values.date) {
      errors.date = 'Required';
    }

    if (!values.image) {
      errors.image = 'Required';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      title: '',
      locatiom: '',
      note: '',
      date: '',
      image: null,
    },
    validate,
    onSubmit: (values) => {
      console.log(values.image);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.header}>Add Event</div>
      <div>
        <InputA
          label="Title"
          name="title"
          placeholder="Your title.."
          type="text"
          error={formik.touched.title && formik.errors.title}
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <InputA
          label="Location"
          name="location"
          placeholder="Location for meeting..."
          type="text"
          error={formik.touched.location && formik.errors.location}
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <InputA label="Participant" type="text" />
        <InputA
          label="Date"
          name="date"
          type="date"
          error={formik.touched.date && formik.errors.date}
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <InputA
          rows={3}
          label="Note"
          name="note"
          placeholder="Write your note here..."
          type="textarea"
          error={formik.touched.note && formik.errors.note}
          value={formik.values.note}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <InputA
          type="file"
          label="Image"
          name="image"
          error={formik.touched.image && formik.errors.image}
          value={formik.values.image?.name}
          onChange={(e) => {
            console.log(e.target.files[0]);
            formik.setFieldValue('image', e.target.files[0]);
          }}
          onBlur={formik.handleBlur}
        />
      </div>
      <button className={styles.submit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormAddEvent;
