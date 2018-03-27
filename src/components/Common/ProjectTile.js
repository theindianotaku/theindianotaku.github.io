import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-feather';

const ProjectTile = ({ project }) => {
  const bgImage = {
    backgroundImage: `url("${project.image}")`
  };
  const theme = {
    color: project.theme
  };

  return (
    <div className="card">
      <Link to={`/projects/${project.id}`} className="card__wrapper">
        <div 
          className="card__image"
          style={bgImage}
        >
        </div>
        <div className="card__desc">
          <p className="label">
            {
              project.isOngoing ? (<span style={theme}>Ongoing</span>) : null
            }
            {
              project.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))
            }
          </p>
          <h3 style={theme} className="card__title valign-wrapper space-between">
            {project.title}
            <ChevronRight style={theme} className="icon--arrow" />
          </h3>
          <div className="card__desc-panel" >
            <p>{project.short ? project.short : null}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectTile;