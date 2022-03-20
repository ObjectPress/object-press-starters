exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query Post {
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
