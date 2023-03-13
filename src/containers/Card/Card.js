import React from 'react';

import { Link } from 'react-router-dom';

import home from '../../images/home.png';
import github from '../../images/github.png';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';

import './Card.scss';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div>
          <Link to="/privacy.html">Privacy</Link>
          <Link to="/mobiles.html">Mobiles</Link>
          <span className="spacer" />
          <Link
            className="icon"
            to="/"
            style={{ backgroundImage: `url(${home})` }}
          ></Link>
          <a
            href="https://www.linkedin.com/in/kovacs-tamas/"
            className="icon"
            style={{ backgroundImage: `url(${linkedin})` }}
          ></a>
          <a
            href="https://github.com/kovacs-tamas"
            className="icon"
            style={{ backgroundImage: `url(${github})` }}
          ></a>
          <a
            href="https://twitter.com/lengfelderr"
            className="icon"
            style={{ backgroundImage: `url(${twitter})` }}
          ></a>
          &nbsp;
        </div>
      </div>
    );
  }
}

export default Card;
