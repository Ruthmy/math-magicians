import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, className, handleClick }) => (
  <>
    <button type="button" className={className} onClick={handleClick}>
      {value}
    </button>
  </>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
