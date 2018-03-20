import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import HeroSection from './HeroSection';
import RecentProjectsSection from './RecentProjectsSection';

class LandingPage extends Component {
  render() {
    return (
      <Scrollbars autohide="true" autoHideTimeout={1000}
        autoHideDuration={200}>
        <HeroSection />
        <RecentProjectsSection />
      </Scrollbars>
    );
  }
}

export default LandingPage;