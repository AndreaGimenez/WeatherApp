import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

const Spinner = ({ size = 65, inline = false, white = false }) => (
  <div className={inline ? styles.inline : styles.center}>
    <svg className={styles.spinner} width={size} height={size} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle
        className={white ? styles.whitePath : styles.path}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  </div>
);

Spinner.propTypes = {
  size: PropTypes.number,
  inline: PropTypes.bool,
  white: PropTypes.bool,
};

export default Spinner;
