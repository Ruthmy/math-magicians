import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import buttonList from '../bd/ButtonsData';
import '../styles/ButtonPanel.css';

const ButtonPanel = ({ onHandleClick }) => (
  <div className="ButtonPanel">
    {buttonList.map((button) => (
      <Button
        key={button.label}
        value={button.label}
        className={button.class}
        handleClick={onHandleClick}
      >
        {button.label}
      </Button>
    ))}
  </div>
);

ButtonPanel.propTypes = {
  onHandleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
