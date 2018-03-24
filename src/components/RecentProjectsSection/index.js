import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ChevronRight } from 'react-feather';

class RecentProjectsSection extends Component {
  render() {
    const bgImage = {
      backgroundImage: 'url("https://github.com/theindianotaku/portfolio-assets/blob/master/projects/01-hero.jpg?raw=true")'
    };

    return (
      <section className="">
        <div className="section-header p-b-md">
          <h4><span className="accent">{'//'}</span> recent works</h4>
        </div>
        <Grid fluid className="m-b-sm">
          <Row>
            <Col xs={12} sm={10} md={6} lg={4}>
              <div className="card">
                <a href="/" className="card__wrapper">
                  <div 
                    className="card__image"
                    style={bgImage}
                  >
                  </div>
                  <div className="card__desc">
                    <p className="label">
                      <span className="accent">Ongoing</span>
                      <span>UI/UX</span>
                      <span>Front-end</span>
                      <span>Team Project</span>
                    </p>
                    <h3 className="card__title valign-wrapper space-between">
                    Channeli Re-Design
                      <ChevronRight className="icon--arrow" />
                    </h3>
                    <div className="card__desc-panel" >
                      <p>Channel i is an e-portal providing various quality services to the students, alumni and the faculty of IIT Roorkee.</p>
                    </div>
                  </div>
                </a>
              </div>
            </Col>
            <Col xs={12} sm={10} md={6} lg={4}>
              <div className="card">
                <a href="/" className="card__wrapper">
                  <div className="card__image">
                  </div>
                  <div className="card__desc">
                    <p className="label">
                      <span className="accent">Ongoing</span>
                      <span>UI/UX</span>
                      <span>Front-end</span>
                      <span>Team Project</span>
                    </p>
                    <h3 className="card__title valign-wrapper space-between">
                    Channeli Re-Design
                      <ChevronRight                 className="icon--arrow" />
                    </h3>
                    <div className="card__desc-panel" >
                      <p>Channel i is an e-portal providing various quality services to the students, alumni and the faculty of IIT Roorkee.</p>
                    </div>
                  </div>
                </a>
              </div>
            </Col>
          </Row>  
        </Grid>
        <div className="section-header p-b-md">
          <h4><span className="accent">{'//'}</span> side projects</h4>
        </div>
        <Grid fluid className="m-b-sm">
          <Row>
            <Col xs={12} sm={10} md={6} lg={4}>
              <div className="card mini">
                <a href="/" className="card__wrapper">
                  <div className="card__desc valign-wrapper space-between">
                    <h4 className="card__title space-between">
                      Type Master
                    </h4>
                    <ChevronRight className="icon--arrow" />
                  </div>
                </a>
              </div>
            </Col>
            <Col xs={12} sm={10} md={6} lg={4}>
              <div className="card mini">
                <a href="/" className="card__wrapper">
                  <div className="card__desc valign-wrapper space-between">
                    <h4 className="card__title space-between">
                      The Indecision
                    </h4>
                    <ChevronRight className="icon--arrow" />
                  </div>
                </a>
              </div>
            </Col>
            <Col xs={12} sm={10} md={6} lg={4}>
              <div className="card mini">
                <a href="/" className="card__wrapper">
                  <div className="card__desc valign-wrapper space-between">
                    <h4 className="card__title space-between">
                      Expense-ify
                    </h4>
                    <ChevronRight className="icon--arrow" />
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default RecentProjectsSection;
