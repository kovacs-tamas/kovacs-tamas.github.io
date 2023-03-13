import React from 'react';

import { Link } from 'react-router-dom';

import './Card.scss';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div>
          <Link to="/">Home</Link>
          <Link to="/privacy.html">Privacy</Link>
          <Link to="/mobiles.html">Mobiles</Link>

          <a href="https://www.linkedin.com/in/kovacs-tamas/">Linkedin</a>
          <a href="https://github.com/kovacs-tamas">Github</a>
          <a href="https://twitter.com/lengfelderr">Twitter</a>
        </div>
      </div>
    );
  }
}

export default Card;
