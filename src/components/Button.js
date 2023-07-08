import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, className }) => (
  <>
    <button type="button" className={className} onClick={(event) => console.log('click', value, event.target.textContent)}>
      {value}
    </button>
  </>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
