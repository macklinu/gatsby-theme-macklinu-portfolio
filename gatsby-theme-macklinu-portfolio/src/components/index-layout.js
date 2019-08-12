import React from 'react'
import { Link, graphql } from 'gatsby'
import { Styled } from '../lib/styled'
import PostCard from '../components/post-card'
import WorkCard from '../components/work-card'
import Layout from './layout'
import Hello from './hello'

export default ({ data }) => {
  return (
    <Layout>
      <>
        <section>
          <Hello />
        </section>
        <section className='py-8'>
          <Styled.h3 className='mb-2'>featured work</Styled.h3>
          <div className='flex flex-row -mx-2 mt-2 mb-4'>
            {data.work.edges.map(({ node }) => (
              <WorkCard className='w-1/3 px-2' work={node} />
            ))}
          </div>
          <Link
            className='cursor-pointer text-base font-bold p-2 rounded hover:bg-gray-200 float-right'
            to='/work'
          >
            more projects →
          </Link>
        </section>
        <section className='py-8'>
          <Styled.h3 className='mb-2'>featured posts</Styled.h3>
          <div className='flex flex-row -mx-2'>
            {data.blog.edges.map(({ node }) => (
              <PostCard className='w-1/3 px-2' post={node} />
            ))}
          </div>
          <Link
            className='cursor-pointer text-base font-bold p-2 rounded hover:bg-gray-200 float-right'
            to='/blog'
          >
            more posts →
          </Link>
        </section>
      </>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    blog: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 160)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            bannerImage {
              childImageSharp {
                fluid(maxWidth: 512, traceSVG: { color: "#573ede" }) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    work: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/work/" }
        frontmatter: { featured: { eq: true } }
      }
      limit: 3
    ) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 160)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            bannerImage {
              childImageSharp {
                fluid(maxWidth: 512, traceSVG: { color: "#573ede" }) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
