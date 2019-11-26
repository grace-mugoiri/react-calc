import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    return (
      <div id='display'>
        <div className='result'>
          {this.props.result}
        </div>
      </div>
    );
  }
}

Display.propTypes = { result: PropTypes.string };

Display.defaultProps = { result: '0' };

export default Display;
