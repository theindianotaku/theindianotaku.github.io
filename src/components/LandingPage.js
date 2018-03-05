import React, { Component } from 'react';

import HeroSection from './HeroSection';
import RecentProjectsSection from './RecentProjectsSection';

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <HeroSection />
        <RecentProjectsSection />
      </React.Fragment>
    );
  }
}

export default LandingPage;