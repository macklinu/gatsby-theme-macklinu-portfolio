import React from 'react'
import { graphql } from 'gatsby'
import PostCard from './post-card'
import Layout from './layout'
import { Styled } from './styled'

export default props => {
  let { edges } = props.data.allMdx
  return (
    <Layout>
      <Styled.h2 className='mb-2'>all blog posts</Styled.h2>
      <div className='flex flex-row flex-wrap -mx-2 mb-4'>
        {edges.map(({ node }) => (
          <PostCard className='p-2 w-full sm:w-1/2 lg:w-1/3' post={node} />
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
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
          ...PostCard
        }
      }
    }
  }
`
