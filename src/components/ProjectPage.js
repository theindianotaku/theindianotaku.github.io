import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { projects } from '../data/content';
import ProjectSection from './ProjectSection';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.projectRef = null;
    this.state = {
      id : 1
    };
  }

  componentWillMount () {
    if (this.props.match.params.id > projects.length) {
      this.props.history.push('/');
    } else {
      const id = this.props.match.params.id;
      this.setState({ id });
    }
  }
  
  componentWillReceiveProps (newProps) {
    this.setState({
      id: newProps.match.params.id
    });
  }

  componentWillUpdate () {
    this.projectRef.classList.add('fade-out');
  }

  componentDidUpdate () {
    this.projectRef.classList.remove('fade-out');
    this.projectRef.classList.add('fade-in');
  }

  nextProject = () => {
    const id = this.state.id;
    const nextId = parseInt(id) + 1;

    if (nextId > projects.length) {
      this.props.history.push('/projects/1');
    } else {
      this.props.history.push(`/projects/${nextId}`);
    }
  }

  prevProject = () => {
    const id = this.state.id;
    const prevId = parseInt(id) - 1;
    const lastId = projects.length;

    if (prevId < 1) {
      this.props.history.push(`/projects/${lastId}`);
    } else {
      this.props.history.push(`/projects/${prevId}`);
    }
  }

  render () {
    const project = projects[this.state.id - 1];
    return (
      <div className="project__container transition-ease" ref={(loadedElem) => this.projectRef = loadedElem} >
        <ProjectSection location={this.props.location} project={project} />

        {/* <button
          onClick={this.prevProject}
        >Prev</button>
        <button
          onClick={this.nextProject}
        >Next</button> */}
      </div>
    );
  }
}

export default withRouter(ProjectPage);