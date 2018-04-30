import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Github, Linkedin, Instagram, Twitter } from 'react-feather';

class ContactPage extends Component {
  render() {
    return (
      <div className="project__container">
        <Grid fluid className="valign-wrapper">
          <Row>
            <Col xs={12} sm={10} md={8} className="about__content">
              <div className="m-b-sm">
                <span className="fancy bold">Currently..</span>
              </div>
              <div className="m-b-sm">
                <span>I am looking for a <span className="accent bold">full-time job oppurtunity</span> anywhere who are in search for a dedicated and forward thinking developer.</span>
              </div>
              <div className="m-b-sm">
                <span className="fancy bold">Say Hi!</span>
              </div>
              <div className="m-b-sm">
                <span>Whether it&apos;s about anime, a project inquiry or simply a &apos;hi&apos;, I&apos;m quite friendly so don&apos;t be shy. Feel free to drop a message.</span>
              </div>
              <div className="m-b-sm">
                <a className="accent m-b-sm no-underline" rel="noopener noreferrer" target="_blank" href="mailto:debashishzero@gmail.com">
                  <h3 className="accent">debashishzero@gmail.com</h3>
                </a>
              </div>
              <div className="m-b-sm">
                <span className="fancy bold">Connect</span>
              </div>
              <div className="m-b-sm">
                <span>You can find me on any of the following networks.</span>
              </div>
              <div className="m-b-sm">
                <Row>
                  <Col xs={2}>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/theindianotaku">
                      <Github />
                    </a>
                  </Col>
                  <Col xs={2}>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/debashishnayak/">
                      <Linkedin />
                    </a>
                  </Col>
                  <Col xs={2}>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/debashish.nayak/">
                      <Instagram />
                    </a>
                  </Col>
                  <Col xs={2}>
                    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/theindian0taku">
                      <Twitter />
                    </a>
                  </Col>
                  <Col xs={2}>
                    <a href="https://myanimelist.net/profile/theindianotaku" rel="noopener noreferrer" target="_blank" className="no-underline">
                      <span className="icon-myanimelist"></span>
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ContactPage;
