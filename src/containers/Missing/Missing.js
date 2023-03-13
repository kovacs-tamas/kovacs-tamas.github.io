import React from 'react';

import './Missing.scss';

class Missing extends React.Component {
  render() {
    setTimeout(() => (window.location = '/'), 2000);
    return (
      <div className="missing">
        <h3>404...</h3>
      </div>
    );
  }
}

export default Missing;
