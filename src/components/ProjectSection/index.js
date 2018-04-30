import React, { Fragment } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import LazyImage from '../Common/LazyImage';
import Pluses from '../Common/Pluses';
import HLines from '../Common/HLines';

const ProjectSection = ({ project, openModal }) => {
  const hdUrl = project.image;

  return (
    <Fragment>
      <div className="half project-pic">
        <div className="project-imgs">
          <div className="project-img-holder">
            <div className="dark-overlay"></div>
            <LazyImage theme={project.theme} toLoad={hdUrl} />
          </div>
        </div>
        <div className="project-title">
          <h1 className="project-title__title">
            {project.title}
          </h1>
          <a onClick={openModal} className="project-showcase medium">Show Gallery</a>
        </div>
      </div>
      <div className="half project-content bold">
        <Row className="hidden-on-mobile">
          <Col xs={12} sm={6}>
            <div>
              <span className="fancy">Period</span>
            </div>
            <div>
              <span>{project.period}</span>
            </div>
          </Col>
          <Col xs={12} sm={6} className="section-margin">
            <div>
              <span className="fancy">Role</span>
            </div>
            <div>
              <span>{project.role}</span>
            </div>
          </Col>
        </Row>
        <Row className="project-desc">
          <Col xs={12}>
            <span className="fancy">Description</span>
          </Col>
          <Col xs={12} md={11}>
            <span className="text-light">{project.description}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <div>
              <span className="fancy">Team</span>
            </div>
            <div>
              <span>{project.type}</span>
            </div>
          </Col>
          <Col xs={12} sm={6} className="section-margin">
            <div>
              <span className="fancy">Stack</span>
            </div>
            <div>
              <span>{project.technical}</span>
            </div>
          </Col>
        </Row>
        {
          project.showcaseText ? (
            <a rel="noopener noreferrer" target="_blank" href={project.showcaseLink} className="project-desc-showcase medium no-underline">{project.showcaseText}</a>
          ) : null
        }
      </div>
      <Pluses />
      <HLines />
    </Fragment>
  );
};

export default ProjectSection;

