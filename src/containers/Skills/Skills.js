import React from 'react';

import image1 from '../../images/screenshots/1.png';
import image2 from '../../images/screenshots/2.png';
import image3 from '../../images/screenshots/3.png';
import image4 from '../../images/screenshots/4.png';
import image5 from '../../images/screenshots/5.png';
import image6 from '../../images/screenshots/6.png';
import image7 from '../../images/screenshots/7.png';
import image8 from '../../images/screenshots/8.png';
import image9 from '../../images/screenshots/9.png';
import image10 from '../../images/screenshots/10.png';
import image11 from '../../images/screenshots/11.png';
import image12 from '../../images/screenshots/12.png';
import image13 from '../../images/screenshots/13.png';
import image14 from '../../images/screenshots/14.png';
import image15 from '../../images/screenshots/15.png';
import image16 from '../../images/screenshots/16.png';
import image17 from '../../images/screenshots/17.png';
import image18 from '../../images/screenshots/18.png';
import image19 from '../../images/screenshots/19.png';
import image20 from '../../images/screenshots/20.png';
import image21 from '../../images/screenshots/21.png';
import image22 from '../../images/screenshots/22.png';
import image23 from '../../images/screenshots/23.png';
import image24 from '../../images/screenshots/24.png';
import image25 from '../../images/screenshots/25.png';
import image26 from '../../images/screenshots/26.png';
import image27 from '../../images/screenshots/27.png';
import image28 from '../../images/screenshots/28.png';
import image29 from '../../images/screenshots/29.png';
import image30 from '../../images/screenshots/30.png';
import image31 from '../../images/screenshots/31.png';

import './Skills.scss';

class Skills extends React.Component {
  year = new Date().getFullYear();

  skills = ['Projectmanagement', 'Communication', 'Planning', 'Bullshit'];
  programmingLanguages = [
    'Git',
    'PHP',
    'Bash',
    'Javascript',
    'Typescript',
    'Angular',
    'React',
    'Ionic',
    'Cordova',
    'Capacitor',
    'Dart',
    'Flutter',
  ];

  images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
  ];
  languages = ['English', 'German', 'Hungarian'];

  shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  render() {
    this.shuffleArray(this.images);

    return (
      <div className="parent">
        {this.images.map((image, index) => (
          <div key={index} style={{ backgroundImage: `url(${image})` }}></div>
        ))}
      </div>
    );
  }
}

export default Skills;
