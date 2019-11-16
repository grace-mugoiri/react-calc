/* eslint-disable no-unused-vars */
import React from 'react';
import Display from '../display';
// eslint-disable-next-line no-unused-vars
import ButtonPanel from '../buttonPanel';


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Display value={'display pane'} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
