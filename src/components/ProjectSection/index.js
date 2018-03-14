import React from 'react';

import LazyImage from '../Common/LazyImage';

const ProjectSection = ({ project }) => {
  const hdUrl = project.image;

  const tagsElement = project.tags.map((tag, index) => (
    <span key={index}>{tag}</span>
  ));

  return (
    <div>
      Project Section
      <div>
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
      </div>
    </div>
  );
};

export default ProjectSection;

