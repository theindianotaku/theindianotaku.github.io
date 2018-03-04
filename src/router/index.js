import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import ProjectsPage from '../components/ProjectsPage';
import WorkflowPage from '../components/WorkflowPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <main className="content-container">
        <Switch>
          <Route path="/" exact={true} component={LandingPage} />
          <Route path="/workflow" component={WorkflowPage} />
          <Route path="/work" component={ProjectsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;