import React from 'react';
import tamas from './tamas.jpg';
import { Link } from 'react-router-dom';

import './Card.scss';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div>
          <h1>Tamás Kovács</h1>
          <a
            className="button linkedin rounded-10"
            href="https://www.linkedin.com/in/kovacs-tamas/"
            title="LinkedIn"
          >
            Linkedin
          </a>
          <a
            className="button github rounded-10"
            href="https://github.com/kovacs-tamas"
            title="GitHub"
          >
            Github
          </a>

          <Link to="/">Home</Link>
          <Link to="/privacy.html">Privacy</Link>
          <Link to="/mobiles.html">Mobiles</Link>

          <img src={tamas} className="tamas shadowed" alt="Tamas Kovacs" />
        </div>
      </div>
    );
  }
}

export default Card;
