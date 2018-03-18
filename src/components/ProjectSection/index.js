import React, { Fragment } from 'react';

import LazyImage from '../Common/LazyImage';
import Pluses from '../Common/Pluses';
import HLines from '../Common/HLines';

const ProjectSection = ({ project }) => {
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
          <a className="project-showcase medium">Show Gallery</a>
        </div>
      </div>
      <div className="half project-content">
        <h5>{project.period}</h5>
        <span>{project.role}</span>
        <p>{project.description}</p>
        <p>Team: <span>{project.type}</span></p>
        <p>Stack: <span>{project.technical}</span></p>
      </div>
      <Pluses />
      <HLines />
      {/* <div>
        <img height="100px" width="auto" src={hdUrl} alt="heloo"/>
        <LazyImage theme={project.theme} toLoad={hdUrl} />
        <p>{project.title}</p>
      </div>
      <div>
        <p>{tagsElement}</p>
        <p>role: <span>{project.role}</span></p>
        <p>Team: <span>{project.type}</span></p>
        <p>Stack: <span>{project.technical}</span></p>
        <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
      </div> */}
    </Fragment>
  );
};

export default ProjectSection;

