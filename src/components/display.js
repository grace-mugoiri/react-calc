import React from 'react';

function display({value}) {
  return (
    <div className='display'>
      <div className='display-value'>
        {value}
      </div>
    </div>
  );
}

export default display;
