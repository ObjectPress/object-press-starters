import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
/* Markdown Converter */
const showdown = require('showdown');
const converter = new showdown.Converter();

const PostPage = ({ pageContext: post }) => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{post.title} | Object Press Gatsby</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content={post.metaKeywords} />
        <meta name="description" content={post.description} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <header id="header">
        <div className="content">
          <section className="spotlight post">
            <div className="image fit">
              <img src={post.images[0]} alt={post.altTags[0]} />
            </div>

            <h1>{post.title}</h1>
          </section>
        </div>
      </header>

      <section id="two" className="wrapper">
        <div className="inner alt">
          <section className="spotlight">
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(post.content),
              }}
            />
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default PostPage;
