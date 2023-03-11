import React from 'react';
import tamas from '../images/tamas.jpg';

import './card.scss';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div>
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

          <a
            className="button medium rounded-10"
            href="https://medium.com/@tamaskovacs"
            title="Medium"
          >
            Medium
          </a>

          <h1>Tamás Kovács</h1>
          <h2>
            <em>pronounced = tamash kovatsch</em>
          </h2>
          <img src={tamas} className="tamas shadowed" alt="Tamas Kovacs" />
        </div>
      </div>
    );
  }
}

export default Card;
