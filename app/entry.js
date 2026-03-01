import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Eagerly loaded
import Index from './views/Index';

// All of our CSS
import './static/css/main.scss';

// Lazy loaded
const About = lazy(() => import('./views/About'));
const Projects = lazy(() => import('./views/Projects'));
const Resume = lazy(() => import('./views/Resume'));
const Stats = lazy(() => import('./views/Stats'));
const Contact = lazy(() => import('./views/Contact'));
const Blog = lazy(() => import('./views/Blog'));
const BlogPost = lazy(() => import('./views/BlogPost'));
const NotFound = lazy(() => import('./views/NotFound'));

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/stats" component={Stats} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        {/* Only useful in development mode */}
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </Router>,
  document.getElementById('root'),
);
