import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = ({ screenValue }) => (
  <div className="Display">
    { screenValue }
  </div>
);

Display.defaultProps = { screenValue: '0' };

Display.propTypes = {
  screenValue: PropTypes.string,
};

export default Display;
