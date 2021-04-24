import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Modal, Button } from 'react-bootstrap';

// Configs.
import { API, APIFormData } from '../../configs/api';

// Components.
import InputA from '../inputs/InputA';

// Styles.
import styles from '../styles/forms/FormAddEvent.module.scss';

const FormAddEvent = () => {
  // States.
  const [tagValues, setTagValues] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Formik validate.
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
    } else if (values.note.length < 50) {
      errors.note = 'Minimum length 50.';
    }

    if (!values.date) {
      errors.date = 'Required';
    }

    if (!values.image) {
      errors.image = 'Required';
    } else if (values.image.size > 1000 * 1000) {
      errors.image = 'Maximal size is 1MB.';
    } else if (
      values.image.type !== 'image/jpg' &&
      values.image.type !== 'image/jpeg' &&
      values.image.type !== 'image/png'
    ) {
      errors.image = 'File format is limited for jpg, jpeg and png.';
    }

    if (values.participants.length < 1) {
      errors.participants = 'Required';
    }

    return errors;
  };

  // Formik form.
  const formik = useFormik({
    initialValues: {
      title: '',
      locatiom: '',
      note: '',
      date: '',
      image: null,
      participants: [],
    },
    validate,
    onSubmit: async (values, { setSubmitting }) => {
      const body = new FormData();

      body.append('title', values.title);
      body.append('location', values.location);
      body.append('note', values.note);
      body.append('date', values.date);
      body.append('image', values.image);
      body.append('participants[]', JSON.stringify(values.participants));

      try {
        const res = await API.post('/event', body, APIFormData);
        console.log(res);
        setSubmitting(false);
        setModalMessage('Success');
        setModalShow(true);
      } catch (error) {
        console.log(error);
        setSubmitting(false);
        setModalMessage('Failed');
        setModalShow(true);
      }
    },
  });

  // Handlers.
  const handleDeleteTag = (i) =>
    formik.setFieldValue(
      'participants',
      formik.values.participants.filter((val, index) => {
        return index !== i;
      })
    );
  return (
    <>
      <form>
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
          <InputA
            label="Participants"
            type="tags"
            name="participants"
            error={formik.touched.participants && formik.errors.participants}
            value={tagValues}
            tags={formik.values.participants}
            onDeleteTag={handleDeleteTag}
            onChange={(e) => setTagValues(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value) {
                const values = formik.values.participants;
                const isDuplicate = values.find((val) => {
                  return val === e.target.value;
                });
                if (!isDuplicate) {
                  values.push(e.target.value);
                  formik.setFieldValue('participants', values);
                }
                setTagValues('');
              }
            }}
            onBlur={formik.handleBlur}
          />
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
            onChange={(e) => formik.setFieldValue('image', e.target.files[0])}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className={styles.submit} onClick={formik.handleSubmit}>
          Submit
        </div>
      </form>
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormAddEvent;
