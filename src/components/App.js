/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <Display value={'display calculator panel'} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
