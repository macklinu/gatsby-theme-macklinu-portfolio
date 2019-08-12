import React from 'react'
import { graphql } from 'gatsby'
import WorkCard from './work-card'
import Layout from './layout'
import { Styled } from '../lib/styled'

export default props => {
  let { edges } = props.data.allMdx
  return (
    <Layout>
      <Styled.h2 className='mb-2'>all work projects</Styled.h2>
      <div className='flex flex-row flex-wrap -mx-2 mb-4'>
        {edges.map(({ node }) => (
          <WorkCard className='p-2 w-full sm:w-1/2 lg:w-1/3' work={node} />
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/work/" } }
      limit: 1000
    ) {
      edges {
        node {
          id
          ...WorkCard
        }
      }
    }
  }
`
