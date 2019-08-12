import React from 'react'
import { graphql } from 'gatsby'
import { Styled } from 'gatsby-theme-macklinu-portfolio'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Layout } from './layout'

export default props => {
  let { title, date, bannerImage } = props.data.mdx.frontmatter
  let { body } = props.data.mdx

  return (
    <Layout>
      <main className='container mx-auto px-4'>
        <article className='max-w-lg mx-auto leading-normal'>
          <Styled.h1>{title}</Styled.h1>
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
