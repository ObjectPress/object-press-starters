const { slugify } = require("./src/utils");
const axios = require("axios");

const POST_NODE_TYPE = `Post`;

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions;
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

  // loop through data and create Gatsby nodes
  content.body.forEach((post) =>
    createNode({
      id: createNodeId(`${POST_NODE_TYPE}-${post.title}`),
      ...post,
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post),
      },
    })
  );
  return;
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query Post {
      allPost {
        nodes {
          branches {
            altTag
            description
            keywords
            summary
          }
          content
          images
          publishAt
          title
        }
      }
    }
  `);

  const posts = data.allPost.nodes;

  posts.forEach((post) => {
    createPage({
      path: `/${slugify(post.title)}`,
      component: require.resolve(`./src/templates/post`),
      context: post,
    });
  });
};
