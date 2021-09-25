module.exports = {
  siteMetadata: {
    title: `Object Press Gatsby`,
    siteUrl: `https://gatsby.objectpress.io`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Object Press Gatsby`,
        short_name: `Object Press`,
        start_url: `.`,
        background_color: `#9c27b0`,
        theme_color: `#9c27b0`,
        display: `standalone`,
        icon: `${__dirname}/src/assets/images/logo-icon.png`,
      },
    },
    // loads the source-plugin and adds credentials
    {
      resolve: `gatsby-plugin-objectpress`,
      options: {
        appSecret: `XtMsuJ+nr7PJ4wqxWjRUhqwbg7BuCqHOm2Q5kP5Xq4M=`,
        userSecret: `Mk+iKS9MTaApmlCDWur9uJoqtQBk9Qm9prZU/ui5Dd0=`,
      },
    },
  ],
};
