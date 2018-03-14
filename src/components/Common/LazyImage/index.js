import React, { Component } from 'react';
import './LazyImage.css';

import loader from '../../../assets/images/loader.svg';

class LazyImage extends Component {

  constructor(props) {
    super(props);
    this.ironImageHd = null;
  }

  componentDidMount() {
    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.toLoad;

    hdLoaderImg.onload = () => {
      this.ironImageHd.setAttribute(
        'style',
        `background-image: url('${this.props.toLoad}')`
      );
      this.ironImageHd.classList.add('lazy-image-fade-in');
    };
  }

  componentWillReceiveProps (prevProps) {
    this.ironImageHd.classList.add('lazy-image-fade-out');
    const hdLoaderImg = new Image();

    hdLoaderImg.src = prevProps.toLoad;

    hdLoaderImg.onload = () => {
      this.ironImageHd.setAttribute(
        'style',
        `background-image: url('${prevProps.toLoad}')`
      );
      this.ironImageHd.classList.remove('lazy-image-fade-out');
      this.ironImageHd.classList.add('lazy-image-fade-in');
    };
  }

  render() {
    return (
      <div className="lazy-image-container">
      
        <div 
          className="lazy-image-loaded" 
          ref={(imageLoadedElem) => this.ironImageHd = imageLoadedElem}>
        </div>
        <div 
          className="lazy-image-preload" 
          style={{ backgroundColor: `${this.props.theme}` }}>
          <img height="50" width="50" src={loader} alt=""/>
        </div>
      
      </div>
    );
  }

}

export default LazyImage;