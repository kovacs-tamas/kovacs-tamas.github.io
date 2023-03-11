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

          <center>
            <Link to="/" className="home-link">
              &#8962;
            </Link>
            <Link to="/privacy.html">Privacy</Link>
            <Link to="/mobiles.html">Mobiles</Link>

            <a href="https://www.linkedin.com/in/kovacs-tamas/">Linkedin</a>
            <a href="https://github.com/kovacs-tamas">Github</a>
            <a href="https://twitter.com/lengfelderr">Twitter</a>
          </center>
          <img src={tamas} className="tamas shadowed" alt="Tamas Kovacs" />
        </div>
      </div>
    );
  }
}

export default Card;
