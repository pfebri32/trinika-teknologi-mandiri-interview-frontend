import React from 'react';

// Styles.
import styles from '../styles/inputs/InputA.module.scss';

const InputA = ({ label, type, error, value, ...rest }) => {
  const render = () => {
    switch (type) {
      case 'file':
        // Rendering input for file type.
        return (
          <div className={styles.group}>
            {label && <div className={styles.label}>{label}</div>}
            <div className={styles.inputFileWrapper}>
              <label
                for={rest.id}
                className={`${styles.inputFile} ${error && styles.inputError}`}
              >
                Upload File
                <input type={type} {...rest} style={{ display: 'none' }} />
              </label>
              <div>{value}</div>
            </div>
            {error && <div className={styles.error}>{error}</div>}
          </div>
        );
      case 'textarea':
        // Rendering input for textarea type.
        return (
          <div className={styles.group}>
            {label && <div className={styles.label}>{label}</div>}
            <textarea
              className={`${styles.input} ${styles.textarea} ${
                error && styles.inputError
              }`}
              type={type}
              {...rest}
            >
              {value}
            </textarea>
            {error && <div className={styles.error}>{error}</div>}
          </div>
        );
      default:
        // Rendering input as default.
        return (
          <div className={styles.group}>
            {label && <div className={styles.label}>{label}</div>}
            <input
              className={`${styles.input} ${error && styles.inputError}`}
              type={type}
              value={value}
              {...rest}
            />
            {error && <div className={styles.error}>{error}</div>}
          </div>
        );
    }
  };
  return <>{render()}</>;
};

export default InputA;
