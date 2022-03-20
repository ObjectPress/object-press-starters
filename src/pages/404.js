import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <section id="one" className="wrapper" style={{ minHeight: '100vh' }}>
        <header className="major">
          <h2>
            404
            <br />
            Page not found
          </h2>
        </header>
      </section>
    </Layout>
  );
};
export default NotFoundPage;
