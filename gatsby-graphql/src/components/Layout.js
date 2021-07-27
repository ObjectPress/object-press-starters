import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = (pages) => {
  return (
    <div className="main-body">
      <Navigation />

      <div id="page-wrapper" {...pages} />

      <Footer />
    </div>
  );
};

export default Layout;
