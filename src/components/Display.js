import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = ({ screenValue }) => (
  <div className="Display">
    {screenValue}
  </div>
);

Display.propTypes = {
  screenValue: PropTypes.string.isRequired,
};

export default Display;
