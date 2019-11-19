import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    return (
      <div className='display'>
        <div className='display-value'>
          {this.props.value}
        </div>
      </div>
    );
  }
}

Display.PropTypes = { value: PropTypes.string };
Display.defaultProps = { value: '0' };

export default Display;
