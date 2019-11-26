/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
	state = {
		next: null,
		total: null,
		operation: null
	};

	handleClick = buttonName => {
		const info = calculate(this.state, buttonName);
		this.setState({ ...info });
	};

  render() {
		const { total, next } = this.state;
    return (
      <div id='app'>
        <Display res={next ? next : total } />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;

