import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About</Link></h2>
          <p>Personal website.</p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        <Link to="/blog">blog</Link>, {' '}
        {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      
    </article>
  </Main>
);

export default Index;
