import React from 'react';
// eslint-disable-next-line no-unused-vars
import Button from './Button';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div id='button-panel'>
        <div className='group-1'>
          <Button name = 'AC' color='##e0e0e0'/>
          <Button name = '+/-' color='##e0e0e0'/>
          <Button name = '%' color='##e0e0e0'/>
          <Button name = '÷' />
        </div>

        <div className='group-2'>
          <Button name = '7' color='##e0e0e0'/>
          <Button name = '8' color='##e0e0e0'/>
          <Button name = '9' color='##e0e0e0'/>
          <Button name = '*' />
        </div>

        <div className='group-3'>
          <Button name = '4' color='##e0e0e0'/>
          <Button name = '5' color='##e0e0e0'/>
          <Button name = '6' color='##e0e0e0'/>
          <Button name = '-' />
        </div>

        <div className='group-4'>
          <Button name = '1' color='##e0e0e0'/>
          <Button name = '2' color='##e0e0e0'/>
          <Button name = '3' color='##e0e0e0'/>
          <Button name = '+' />
        </div>

        <div className='group-5'>
          <Button name = '0' color='##e0e0e0' wide={true}/>
          <Button name = '.' color='##e0e0e0'/>
          <Button name = '=' />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
