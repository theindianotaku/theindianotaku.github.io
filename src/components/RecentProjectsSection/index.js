import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { recentProjects, projects, sideProjects } from '../../data/content';
import ProjectTile from '../Common/ProjectTile';
import SideProjectTile from '../Common/SideProjectTile';

class RecentProjectsSection extends Component {
  render() {

    return (
      <section className="">
        <div className="section-header p-b-md">
          <h4><span className="accent">{'//'}</span> recent works</h4>
        </div>
        <Grid fluid className="m-b-sm">
          <Row>
            {
              recentProjects.map((id) => (
                <Col key={id} xs={12} sm={10} md={6} lg={5}>
                  <ProjectTile project={projects[id]} />
                </Col>
              ))
            }
          </Row>  
        </Grid>
        <div className="section-header p-b-md">
          <h4><span className="accent">{'//'}</span> side projects</h4>
        </div>
        <Grid fluid className="m-b-sm">
          <Row>
            {
              sideProjects.map((sideProject, index) => (
                <SideProjectTile 
                  key={index} 
                  sideProject={sideProject}  
                />
              ))
            }
          </Row>
        </Grid>
      </section>
    );
  }
}

export default RecentProjectsSection;
