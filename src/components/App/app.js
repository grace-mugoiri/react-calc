import React from 'react';
import Display from '../display';
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
