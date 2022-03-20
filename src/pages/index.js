import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
  const blogContent = data?.allPost?.nodes || [];

  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Object Press Gatsby</title>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="headless cms, content management, gatsby, gatsby starter, object press"
        />
        <meta
          name="description"
          content="A free headless content management system, that's built to scale!"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <header id="header">
        <div className="content">
          <h1>Object Press Gatsby</h1>
          <p>Object Press and Gatsby Starter Kit</p>
          <ul className="actions">
            <li>
              <a
                href="https://github.com/ObjectPress/object-press-starters"
                className="button primary icon fa-download"
              >
                Download Starter
              </a>
            </li>
            <li>
              <span
                role="button"
                tabIndex={0}
                onClick={() => scrollTo('#one')}
                onKeyDown={() => scrollTo('#one')}
                className="button icon fa-chevron-down"
              >
                Learn More
              </span>
            </li>
          </ul>
        </div>
        <div className="image phone">
          <div className="inner">
            <StaticImage
              src="../assets/images/screen.jpg"
              className="mobile"
              placeholder="blurred"
              layout="constrained"
              alt="mobile screen"
            />
          </div>
        </div>
      </header>

      <section id="one" className="wrapper style2 special">
        <header className="major">
          <h2>An awesome way to jumpstart your way into the Jamstack!</h2>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-camera-retro">
              <span className="label">Shoot</span>
            </span>
          </li>
          <li>
            <span className="icon fa-refresh">
              <span className="label">Process</span>
            </span>
          </li>
          <li>
            <span className="icon fa-cloud">
              <span className="label">Upload</span>
            </span>
          </li>
        </ul>
      </section>

      <section id="two" className="wrapper">
        <div className="inner alt">
          {blogContent.map((post) => {
            return (
              <section className="spotlight" key={post.title}>
                <div className="image fit">
                  <img src={post.images[0]} alt={post.altTags[0]} />
                </div>
                <div className="content">
                  <h3>{post.title}</h3>

                  <p>{post.description}</p>

                  <ul className="actions special">
                    <li>
                      <Link
                        to={`/${post.slug}`}
                        className="button primary icon fa-plus small"
                      >
                        Read more...
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            );
          })}
          <section className="special">
            <ul className="icons labeled">
              <li>
                <span className="icon fa-camera-retro">
                  <span className="label">Ipsum lorem accumsan</span>
                </span>
              </li>
              <li>
                <span className="icon fa-refresh">
                  <span className="label">Sed vehicula elementum</span>
                </span>
              </li>
              <li>
                <span className="icon fa-cloud">
                  <span className="label">Elit fusce consequat</span>
                </span>
              </li>
              <li>
                <span className="icon fa-code">
                  <span className="label">Lorem nullam tempus</span>
                </span>
              </li>
              <li>
                <span className="icon fa-desktop">
                  <span className="label">Adipiscing amet sapien</span>
                </span>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section id="three" className="wrapper style2 special">
        <header className="major">
          <h2>Elements Page</h2>
          <p>This starter is included with Elements demo for the starter</p>
        </header>
        <ul className="actions special">
          <li>
            <Link to="/elements" className="button primary icon fa-plus">
              Check Elements
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query blogGridPageQuery {
    allPost {
      nodes {
        title
        publishAt
        pageTitle
        slug
        content
        description
        keywords
        images
        altTags
      }
    }
  }
`;

export default IndexPage;
