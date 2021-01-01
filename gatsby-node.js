const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const ProjectItemTemplate = path.resolve(`src/templates/Project.tsx`);

  return graphql(
    `
      query {
        allContentfulProjectItem {
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
    result.data.allContentfulProjectItem.edges.forEach((edge) => {
      createPage({
        // Path for this page — required
        path: `${edge.node.slug}`,
        component: ProjectItemTemplate,
        context: {
          id: edge.node.id,
          slug: edge.node.slug,
        },
      });
    });
  });
};
