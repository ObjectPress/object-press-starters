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
          slug
        }
      }
    }
  `);

  const posts = data.allPost.nodes;

  posts.forEach((post) => {
    createPage({
      path: `/${post.slug}`,
      component: require.resolve(`./src/templates/post`),
      context: post,
    });
  });
};