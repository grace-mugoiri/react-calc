import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const widthStyle = (this.props.wide) ? 'widthStyle' : '';
    return (
      <button
        id='button'
        className={widthStyle}
        style={{ backgroundColor: this.props.color }}>
        {this.props.name}
      </button>
    );
  }
}

Button.propTypes = { name: PropTypes.string, color: PropTypes.string };
Button.defaultProps = { color: 'orange' };

export default Button;
