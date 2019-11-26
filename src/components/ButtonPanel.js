/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './Button';

const ButtonPanel = props => {
  const handleClick = buttonName => props.clickHandler(buttonName);
  return (
    <div id='button-panel'>
      <div className='group-1'>
        <Button name = 'AC' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '+/-' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '%' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '÷' clickHandler={handleClick} />
      </div>

      <div className='group-2'>
        <Button name = '7' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '8' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '9' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '*' clickHandler={handleClick} />
      </div>

      <div className='group-3'>
        <Button name = '4' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '5' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '6' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '-' clickHandler={handleClick} />
      </div>

      <div className='group-4'>
        <Button name = '1' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '2' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '3' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '+' clickHandler={handleClick} />
      </div>

      <div className='group-5'>
        <Button name = '0' color='##e0e0e0' wide={true}
          clickHandler={handleClick} />
        <Button name = '.' color='##e0e0e0' clickHandler={handleClick} />
        <Button name = '=' clickHandler={handleClick} />
      </div>
    </div>
  );
};


export default ButtonPanel;
