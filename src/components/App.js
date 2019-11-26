/* eslint-disable no-unused-vars */

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  state = {
    next: '',
    total: '',
    operation: '',
  };

  handleClick = buttonName => {
    const data = calculate(this.state, buttonName);
    this.setState({ ...data });
  };

  render() {
    const { total, next } = this.state;
    return (
      <div id='app'>
        <Display result={next ? next : total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
