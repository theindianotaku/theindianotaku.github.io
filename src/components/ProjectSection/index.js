import React, { Fragment } from 'react';

import LazyImage from '../Common/LazyImage';
import Pluses from '../Common/Pluses';
import HLines from '../Common/HLines';

const ProjectSection = ({ project }) => {
  const hdUrl = project.image;

  const tagsElement = project.tags.map((tag, index) => (
    <span key={index}>{tag}</span>
  ));

  return (
    <Fragment>
      <div className="half project-pic">
        <div className="project-imgs">
          <div className="project-img-holder">
            <div className="dark-overlay"></div>
            <LazyImage theme={project.theme} toLoad={hdUrl} />
          </div>
        </div>
        <h1 className="project-title">
          {project.title}
        </h1>
      </div>
      <div className="half">

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

