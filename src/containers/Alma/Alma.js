import React from 'react';

import { Link } from 'react-router-dom';

import home from '../../images/home.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

import './Alma.scss';

class Alma extends React.Component {
  play(url) {
    var audio = document.createElement('audio');
    audio.src = url;
    audio.play();
    audio.onloadeddata = function (data) {
      console.log('audio loaded', this, data);
    };
  }

  render() {
    return (
      <div className="mobiles">
        <div>
          <button
            onClick={() =>
              this.play(
                'https://babelium.blob.core.windows.net/staging/response/54/69ca56b2-e648-4684-b56e-e42588fb3ffd.webm?1730811387881'
              )
            }
          >
            Firefox
          </button>
          <button
            onClick={() =>
              this.play(
                'https://babelium.blob.core.windows.net/production/response/51539/d93af598-95f3-40b6-8bc3-e892aff6d22d.webm?1730141792324'
              )
            }
          >
            Firefox / Constantin
          </button>
          <button
            onClick={() =>
              this.play(
                'https://babelium.blob.core.windows.net/staging/response/55/014feb9e-cc49-495f-9324-61a42c8b2ca0.webm?1730812371608'
              )
            }
          >
            Chrome
          </button>
          &nbsp;
        </div>
      </div>
    );
  }
}

export default Alma;
