import React from 'react';
import Button from './Button';
import '../styles/ButtonPanel.css';

const buttonList = [
  { label: 'AC', class: 'btn gray' },
  { label: '+/-', class: 'btn gray' },
  { label: '%', class: 'btn gray' },
  { label: '÷', class: 'btn orange' },
  { label: '7', class: 'btn' },
  { label: '8', class: 'btn' },
  { label: '9', class: 'btn' },
  { label: 'x', class: 'btn orange' },
  { label: '4', class: 'btn' },
  { label: '5', class: 'btn' },
  { label: '6', class: 'btn' },
  { label: '-', class: 'btn orange' },
  { label: '1', class: 'btn' },
  { label: '2', class: 'btn' },
  { label: '3', class: 'btn' },
  { label: '+', class: 'btn orange' },
  { label: '0', class: 'btn zero' },
  { label: '.', class: 'btn' },
  { label: '=', class: 'btn orange' },
];

const ButtonPanel = () => (
  <div className="ButtonPanel">
    {buttonList.map((button) => (
      <Button
        key={button.label}
        value={button.label}
        className={button.class}
      >
        {button.label}
      </Button>
    ))}
  </div>
);

export default ButtonPanel;
