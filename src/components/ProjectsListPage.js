import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Scrollbars } from 'react-custom-scrollbars';

import { projects } from '../data/content';
import ProjectTile from './Common/ProjectTile';

class ProjectsListPage extends Component {
  render() {
    return (
      <Scrollbars
        autohide="true"
        autoHideTimeout={1000} 
        autoHideDuration={200}
      >
        <section>
          <div className="section-header p-b-md">
            <h4><span className="accent">{'//'}</span> list of all my projects</h4>
          </div>
          <Grid fluid className="m-b-sm">
            <Row>
              {
                projects.map((project, index) => {
                  return (
                    <Col key={index} xs={12} sm={10} md={6} lg={5}>
                      <ProjectTile project={project} />
                    </Col>
                  );
                })
              }
            </Row>
          </Grid>
        </section>
        <section>
          <div className="section-header p-b-md">
            <h4><span className="accent">{'//'}</span> my practice projects</h4>
          </div>
        </section>
      </Scrollbars>
    );
  }
}

export default ProjectsListPage;
