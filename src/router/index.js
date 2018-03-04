import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      {/* <Route path="/work/projects/:id" component="" />
      <Route path="/work" component="" /> */}
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;