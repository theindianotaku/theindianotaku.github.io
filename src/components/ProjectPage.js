import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import { projects } from '../data/content';
import { imageList } from '../data/imageList';
import ProjectSection from './ProjectSection';
import SliderModal from './Common/SliderModal';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.projectRef = null;
    this.state = {
      id : 1,
      modalIsOpen: false,
      didScroll: false,
      touch: {
        xUp: 0,
        xDown: 0,
        yUp: 0,
        yDown: 0
      }
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

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  resetScroll = () => {
    this.setState({ didScroll: false, touch: {xDown: 0, yDown: 0} });
  }

  handleWheel = (e) => {
    if (!this.state.didScroll) {
      this.setState({didScroll: true});
      e.deltaY > 0 ? this.nextProject() : this.prevProject();
      setTimeout(() => {
        this.resetScroll();        
      }, 1000);
    }
  }

  handleTouchStart = (e) => {
    let xDown = e.touches[0].clientX;                                      
    let yDown = e.touches[0].clientY;

    this.setState({ touch: {xDown, yDown}} );
  }

  handleTouchMove = (e) => {
    let {xDown, yDown } = { ...this.state.touch };
    if ( ! xDown || ! yDown ) {
      return;
    }

    let xUp = e.touches[0].clientX;                                    
    let yUp = e.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( (Math.abs( xDiff ) > Math.abs( yDiff )) && !this.state.didScroll) { /*most significant*/
      this.setState({didScroll: true});

      if ( xDiff > 0 ) {
        this.prevProject();
      } else {
        this.nextProject();
      }
    }

    /* reset values */
    setTimeout(() => {
      this.resetScroll();        
    }, 500);
  }

  render () {
    const project = projects[this.state.id - 1];
    const images = imageList[this.state.id - 1];

    return (
      <div 
        className="project-item__container transition-ease" 
        ref={(loadedElem) => this.projectRef = loadedElem} 
        onWheel= {this.handleWheel}
        onTouchStart = {this.handleTouchStart}
        onTouchMove = {this.handleTouchMove}
      >
        <ProjectSection 
          location={this.props.location} 
          project={project}
          openModal={this.openModal} 
        />
        <div className="project-nav">
          {projects.map((project, index) => {
            return (
              <NavLink key={index} className="project-nav-item" activeClassName="active" to={`/projects/${index + 1}`}>
                <span className="project-nav-bar base"></span>
                <span className="project-nav-bar clone"></span>
                <span className="project-nav-title">{project.title}</span>
              </NavLink>
            );
          })}
        </div>
        <SliderModal 
          images={images}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Feature Slider Modal"
        />
      </div>
    );
  }
}

export default withRouter(ProjectPage);