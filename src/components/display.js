import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    return (
      <div id='display'>
        <div className='displayValue'>
          {this.props.displayValue}
        </div>
      </div>
    );
  }
}

Display.propTypes = { displayValue: PropTypes.string };

Display.defaultProps = { displayValue: '0' };

export default Display;
