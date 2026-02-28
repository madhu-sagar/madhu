import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import dayjs from 'dayjs';

import Main from '../layouts/Main';
import blogs from '../data/blogs';

const Blog = () => (
  <Main>
    <Helmet title="Blog" />
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2><Link to="/blog">Blog</Link></h2>
        </div>
      </header>
      {blogs.map(post => (
        <div key={post.slug} className="blog-preview">
          <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
          <span className="published">{dayjs(post.date).format('MMMM D, YYYY')}</span>
          <p>{post.description}</p>
        </div>
      ))}
    </article>
  </Main>
);

export default Blog;
