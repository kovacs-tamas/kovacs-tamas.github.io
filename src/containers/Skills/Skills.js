import React from 'react';

import image1 from '../../images/1.png';
import image3 from '../../images/3.png';
import image4 from '../../images/4.png';
import image6 from '../../images/6.png';
import image7 from '../../images/7.png';
import image8 from '../../images/8.png';
import image9 from '../../images/9.png';
import image10 from '../../images/10.png';
import image11 from '../../images/11.png';
import image2 from '../../images/2.png';
import image12 from '../../images/12.png';
import image13 from '../../images/13.png';
import image5 from '../../images/5.png';
import image14 from '../../images/14.png';
import image15 from '../../images/15.png';
import image16 from '../../images/16.png';
import image17 from '../../images/17.png';
import image18 from '../../images/18.png';

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
  languages = ['English', 'German', 'Hungarian'];
  countBackTheYears(startYear) {
    return this.year - startYear;
  }

  render() {
    return (
      <div className="parent">
        <div style={{ backgroundImage: `url(${image1})` }}></div>
        <div style={{ backgroundImage: `url(${image17})` }}></div>
        <div style={{ backgroundImage: `url(${image3})` }}></div>
        <div style={{ backgroundImage: `url(${image4})` }}></div>
        <div style={{ backgroundImage: `url(${image5})` }}></div>
        <div style={{ backgroundImage: `url(${image18})` }}></div>
        <div style={{ backgroundImage: `url(${image6})` }}></div>
        <div style={{ backgroundImage: `url(${image7})` }}></div>
        <div style={{ backgroundImage: `url(${image8})` }}></div>
        <div style={{ backgroundImage: `url(${image9})` }}></div>
        <div style={{ backgroundImage: `url(${image10})` }}></div>
        <div style={{ backgroundImage: `url(${image11})` }}></div>
        <div style={{ backgroundImage: `url(${image12})` }}></div>
        <div style={{ backgroundImage: `url(${image13})` }}></div>
        <div style={{ backgroundImage: `url(${image2})` }}></div>
        <div style={{ backgroundImage: `url(${image14})` }}></div>
        <div style={{ backgroundImage: `url(${image15})` }}></div>
        <div style={{ backgroundImage: `url(${image16})` }}></div>
      </div>
    );
  }
}

export default Skills;
