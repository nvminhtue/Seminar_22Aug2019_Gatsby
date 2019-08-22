/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({actions: {createPage }, graphql} ) => {
  const results = await graphql(`
  {
    allG4FamilyJson {
      edges {
        node {
          content
          slug
        }
      }
    }
  }
  `)

  results.data.allG4FamilyJson.edges.forEach(edge => {
    const data = edge.node.slug;
    createPage({
      path: `/g4/${data}`,
      component: require.resolve(`./src/data-site/static-site.js`),
      context: {
        slug: data,
      }
    })
  })
}