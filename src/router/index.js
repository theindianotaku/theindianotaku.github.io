import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import ProjectsListPage from '../components/ProjectsListPage';
import ProjectPage from '../components/ProjectPage';
import NotFoundPage from '../components/NotFoundPage';
import Lines from '../components/Common/Lines';

const AppRouter = () => (
  <BrowserRouter>
    <div className="shell">
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" exact={true} component={LandingPage} />
          <Route path="/work" component={ProjectsListPage} />
          <Route path="/projects/:id" component={ProjectPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Lines />
    </div>
  </BrowserRouter>
);

export default AppRouter;