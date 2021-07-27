const { slugify } = require("./src/utils");
const axios = require("axios");

exports.createPages = async ({ actions: { createPage } }) => {
  // Object Press credentials
  const creds = {
    scan: `apps`,
    appSecret: `XtMsuJ+nr7PJ4wqxWjRUhqwbg7BuCqHOm2Q5kP5Xq4M=`,
    userSecret: `gcMeOyAu8TOYcDBBFkbNFS4tiTubU0ow+6IEoGcl3gQ=`,
  };

  // Call the external API endpoint to get all posts
  const response = await axios.post(`https://v2.objectpress.io/content`, creds);

  // Gather the response data
  const content = response.data;

  createPage({
    path: `/`,
    component: require.resolve(`./src/templates/landing`),
    context: content,
  });

  content.body.forEach((page) => {
    createPage({
      path: `/${slugify(page.title)}`,
      component: require.resolve(`./src/templates/post`),
      context: page,
    });
  });
};
