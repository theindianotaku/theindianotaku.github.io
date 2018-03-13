import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import HeroImage from '../../assets/images/debashish-normal.png';
import { TextScramble } from '../../utilities';

class HeroSection extends Component {
  textSramble = () => {
    const phrases = [
      'Neo,',
      'sooner or later',
      'you\'re going to realize',
      'just as I did',
      'that there\'s a difference',
      'between knowing the path',
      'and walking the path'
    ];
    
    const el = document.querySelector('.text');
    const fx = new TextScramble(el);
    
    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };
    
    next();
  }

  render () {
    return (
      <Grid fluid className="container" >
        <Row className="landing__wrapper" middle="xs" >
          <Col xs={12} sm={10} md={6} lg={6} >
            <div>
              <h3>
                <span className="accent">Debashish Nayak</span>
              </h3>
              <h4 className="normal sneaky-text">Frontend Developer, Foodie, Prosome.</h4>
              <p className="standout-text">
                <strong>Cheers</strong>, I&apos;m Debashish, <strong>front end developer</strong> & <strong>product designer</strong> dedicated to work with the aim of making products meaningful.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={10} md={6} lg={6} className="hidden-on-mobile" >
            <img className="landing__hero-image" src={HeroImage} alt="Debashish Nayak" />
          </Col>      
        </Row>
      </Grid>
    );
  }
}

export default HeroSection;