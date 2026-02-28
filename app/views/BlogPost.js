import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';

import Main from '../layouts/Main';
import blogs from '../data/blogs';

const LinkRenderer = ({ ...children }) => <Link {...children} />;

const BlogPost = ({ match }) => {
  const post = blogs.find((b) => b.slug === match.params.slug);

  if (!post) {
    return (
      <Main>
        <Helmet title="Post Not Found" />
        <article className="post">
          <header>
            <div className="title">
              <h2>Post Not Found</h2>
            </div>
          </header>
          <p>The blog post you are looking for does not exist.</p>
          <Link to="/">Go back home</Link>
        </article>
      </Main>
    );
  }

  return (
    <Main>
      <Helmet title={post.title} />
      <article className="post" id="blog-post">
        <header>
          <div className="title">
            <h2>{post.title}</h2>
          </div>
          <div className="meta">
            <span className="published">{dayjs(post.date).format('MMMM D, YYYY')}</span>
          </div>
        </header>
        <ReactMarkdown
          source={post.markdown}
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />
      </article>
    </Main>
  );
};

export default BlogPost;
