import React from 'react';

import LazyImage from '../Common/LazyImage';
//import image from '../../assets/images/my-name.png';

const image = 'https://github.com/IRIdeveloper/react-iron-image/blob/master/src/iron-image-small.jpg?raw=true';

// const hdUrl = 'https://images.unsplash.com/photo-1478562853135-c3c9e3ef7905';

const ProjectSection = ({ project }) => {
  const hdUrl = project.image;

  const tagsElement = project.tags.map((tag, index) => (
    <span key={index}>{tag}</span>
  ));

  return (
    <div>
      Project Section
      <div>
        <LazyImage srcPreload={image} srcLoaded={hdUrl} />
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

