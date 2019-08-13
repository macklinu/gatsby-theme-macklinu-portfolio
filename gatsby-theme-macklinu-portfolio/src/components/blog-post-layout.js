import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Styled } from '../lib/styled'
import Layout from './layout'

export default props => {
  let { title, date, bannerImage } = props.data.mdx.frontmatter
  let { body } = props.data.mdx

  return (
    <Layout>
      <main>
        <Styled.h1>{title}</Styled.h1>
        <article className='max-w-xl mx-auto leading-normal'>
          <p className='text-sm text-gray-600'>{date}</p>
          <Img className='my-4' fluid={bannerImage.childImageSharp.fluid} />
          <div className='py-4'>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
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
      body
    }
  }
`
