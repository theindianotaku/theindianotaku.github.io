import React, { Component } from 'react';

import { projects } from '../data/content';
import ProjectSection from './ProjectSection';

// dangerouslySetInnerHTML={{ __html: projects[0].description }}

class ProjectPage extends Component {
  constructor (props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      id,
      projects
    };
  }

  componentWillMount () {
    // add redirect if invalid id
  }

  clickHandler = (e) => {
    e.preventDefault();
    const id = this.state.id;
    const newId = (parseInt(id) + 1).toString();
    this.setState({
      id: newId
    });
  }

  render () {
    const project = this.state.projects[this.state.id];
    return (
      <div>
        <ProjectSection project={project} />
        <button
          onClick={this.clickHandler}
        >Click me boi</button>
      </div>
    );
  }
}

export default ProjectPage;