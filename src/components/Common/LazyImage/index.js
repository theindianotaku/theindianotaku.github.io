import React, { Component } from 'react';
import './LazyImage.css';

class LazyImage extends Component {

  constructor(props) {
    super(props);
    this.ironImageHd = null;
  }

  componentDidMount() {
        
    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.srcLoaded;

    hdLoaderImg.onload = () => {
      this.ironImageHd.setAttribute(
        'style',
        `background-image: url('${this.props.srcLoaded}')`
      );
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
          style={{ backgroundImage: `url('${this.props.srcPreload}')` }}>
        </div>
      
      </div>
    );
  }

}

export default LazyImage;