import React from 'react';
import './skills.scss';

import image1 from '../images/apps/1.png';

import image3 from '../images/apps/3.png';
import image4 from '../images/apps/4.png';

import image6 from '../images/apps/6.png';
import image7 from '../images/apps/7.png';
import image8 from '../images/apps/8.png';
import image9 from '../images/apps/9.png';
import image10 from '../images/apps/10.png';
import image11 from '../images/apps/11.png';
import image2 from '../images/apps/2.png';
import image12 from '../images/apps/12.png';
import image13 from '../images/apps/13.png';
import image5 from '../images/apps/5.png';
import image14 from '../images/apps/14.png';
import image15 from '../images/apps/15.png';
import image16 from '../images/apps/16.png';

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
        <div style={{ backgroundImage: `url(${image3})` }}></div>
        <div style={{ backgroundImage: `url(${image4})` }}></div>
        <div style={{ backgroundImage: `url(${image5})` }}></div>
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
