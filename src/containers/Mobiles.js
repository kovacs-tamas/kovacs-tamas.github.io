import React from 'react';

class Mobiles extends React.Component {
  phones = [
    'Alcatel OT 302',
    'Alcatel OT 511',
    'Alcatel OT 715',
    'Alcatel OT DB',
    'Ericsson R320',
    'Ericsson T18',
    'Ericsson T20',
    'Ericsson T65',
    'Ericsson T68e',
    'Nexus 5',
    'HTC Desire',
    'HTC Sensation',
    'Huawei P10',
    'Apple iPhone 3GS',
    'Apple iPhone 5S',
    'Apple iPhone 6',
    'Apple iPhone 6s',
    'Apple iPhone 8',
    'Apple iPhone XS',
    'Apple iPhone 12 Pro',
    'Apple iPhone 13 Pro',
    'Motorola C336',
    'Motorola V300',
    'Nokia 6500 Classic',
    'Nokia 3100',
    'Nokia 3210',
    'Nokia 3310',
    'Nokia 3510',
    'Nokia 3650',
    'Nokia 6100',
    'Nokia 6210',
    'Nokia 6230',
    'Nokia 6230i',
    'Nokia 6234',
    'Nokia 6300',
    'Nokia 6310',
    'Nokia 6310i',
    'Nokia 6600',
    'Nokia 6610',
    'Nokia 7110',
    'Nokia 7250',
    'Nokia 8210',
    'Pixel 2',
    'Pixel 3a',
    'Samsung Black Jack',
    'Samsung Corby',
    'Samsung Galaxy S3',
    'Samsung Galaxy S6',
    'Samsung Galaxy S7',
    'Samsung X480',
    'Sharp 550SH',
    'Siemens C55',
    'Siemens C65',
    'Siemens M35',
    'Siemens M55',
    'Siemens MC60',
    'Siemens MT50',
    'Siemens S25',
    'Siemens S45',
    'Siemens S55',
    'Siemens SL45',
    'Siemens ST55',
    'Sony Ericsson K508i',
    'Sony Ericsson K750',
    'Sony Ericsson T100',
    'Sony Ericsson T610',
    'Sony J70',
    'Trium Mars',
  ];

  replaceSpaces(text) {
    return 'https://www.google.com/search?q=' + text.replace(' ', '+');
  }

  render() {
    const listItems = this.phones.map((phone, index) => (
      <li key={index.toString()}>
        <a href={this.replaceSpaces(phone)} target="_blank">
          {phone}
        </a>
      </li>
    ));

    return (
      <article className="shadowed personal rounded-10" id="Mobiles">
        <h3>Oh my good, i had 68 phones in 23 years :D</h3>
        <p>
          Here is a list about phones i had before. I owned some devices more
          times :)
        </p>
        <ol>{listItems}</ol>
      </article>
    );
  }
}

export default Mobiles;
