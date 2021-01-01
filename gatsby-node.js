const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const BlogPostTemplate = path.resolve(`src/templates/Project.tsx`);

  return graphql(
    `
      query {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allContentfulBlogPost.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `${edge.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: edge.node.id,
          slug: edge.node.slug,
        },
      });
    });
  });
};
