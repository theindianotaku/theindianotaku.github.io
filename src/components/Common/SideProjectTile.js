import React from 'react';
import { Github } from 'react-feather';
import { Col } from 'react-flexbox-grid';

const SideProjectTile = ({ sideProject }) => {
  return (
    <Col xs={12} sm={10} md={6} lg={4}>
      <div className="card mini">
        <a href={sideProject.link} className="card__wrapper">
          <div className="card__desc valign-wrapper space-between">
            <h4 className="card__title space-between">
              {sideProject.title}
            </h4>
            <Github className="icon--arrow" />
          </div>
        </a>
      </div>
    </Col>
  );
};

export default SideProjectTile;