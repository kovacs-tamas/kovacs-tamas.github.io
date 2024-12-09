import React from 'react';
import { useEffect } from 'react';

import './Alma.scss';

const Alma = () => {
  const files = [
    'https://babelium.blob.core.windows.net/staging/response/145/7ee1b47f-d2ff-4626-9a96-8e942caabc3c.webm?1733731815370',
    'https://babelium.blob.core.windows.net/staging/response/145/026010a8-6259-4c1b-ab4b-7d3dcc26e62d.webm?1733731814419',
    'https://babelium.blob.core.windows.net/staging/response/146/66b9da8f-8a02-45b0-ac01-e68415597f4a.webm?1733736993295',
  ];

  const audioPlayers = [];

  useEffect(() => {
    for (let i = 0; i < files.length; i++) {
      let audio = document.createElement('audio');
      audio.src = files[i];
      // audio.muted = true;
      audio.playsInline = true;
      audio.preload = 'auto';
      // audio.currentTime = 1;
      audio.autoplay = true;
      audio.onloadeddata = function (data) {
        console.log('audio loaded', this, data);
      };
      audio.onpause = function (data) {
        console.log('audio onpause', this, data);
      };
      audio.onended = function (data) {
        console.log('audio onended', this, data);
      };
      audio.onseeked = function (data) {
        console.log('audio onseeked', this, data);
      };

      audioPlayers.push(audio);
    }
  }, []);

  function play(id) {
    audioPlayers[id].currentTime = 0.01;
    console.log(audioPlayers, id, audioPlayers[id]);
    audioPlayers[id].load();
    audioPlayers[id].play();
  }

  return (
    <div className="mobiles">
      <div className="players">
        {audioPlayers.map((audioURL, i) => (
          <>{audioURL}</>
        ))}
      </div>
      <div>
        <button onClick={() => play(0)}>First {files[0]}</button>
        <br />
        <br />
        <button onClick={() => play(1)}>Second {files[1]}</button>
        <br />
        <br />
        <button onClick={() => play(2)}>Third - should work {files[2]}</button>
        <br />
      </div>
    </div>
  );
};

export default Alma;
