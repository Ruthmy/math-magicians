import { React, useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Calculator = () => {
  const currentOperation = {
    total: null,
    next: null,
    operation: null,
  };

  const [screenValue, setScreenValue] = useState(currentOperation);

  const onHandleClick = (event) => {
    setScreenValue(calculate(screenValue, event.target.textContent));
  };

  return (
    <div className="App">
      <Display screenValue={screenValue.next || screenValue.total || '0'} />
      <ButtonPanel onHandleClick={onHandleClick} />
    </div>
  );
};

export default Calculator;
