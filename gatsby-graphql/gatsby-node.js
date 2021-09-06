const { slugify } = require("./src/utils");

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
