const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  let { createPage } = actions

  createPage({
    path: `/`,
    component: require.resolve(`./src/index-layout.js`),
  })

  createPage({
    path: `/blog`,
    component: require.resolve(`./src/blog-layout.js`),
  })

  createPage({
    path: `/work`,
    component: require.resolve(`./src/work-layout.js`),
  })

  let blogPost = require.resolve(`./src/blog-post-layout.js`)
  let workPost = require.resolve(`./src/work-post-layout.js`)
  return graphql(
    `
      query {
        work: allMdx(
          filter: { fileAbsolutePath: { regex: "/content/work/" } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
        blog: allMdx(
          filter: { fileAbsolutePath: { regex: "/content/blog/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    let projects = result.data.work.edges
    projects.forEach((project, index) => {
      let previous =
        index === projects.length - 1 ? null : projects[index + 1].node
      let next = index === 0 ? null : projects[index - 1].node

      createPage({
        path: `/work${project.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: project.node.fields.slug,
          previous,
          next,
        },
      })
    })

    let posts = result.data.blog.edges
    posts.forEach((post, index) => {
      let previous = index === posts.length - 1 ? null : posts[index + 1].node
      let next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/blog${post.node.fields.slug}`,
        component: workPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  let { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    let value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
