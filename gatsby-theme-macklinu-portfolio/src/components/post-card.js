import React from 'react'
import { Link, graphql } from 'gatsby'
import { Card } from './card'
import cx from '@macklinu/cx'

export let PostCard = ({ post, className, ...props }) => (
  <Link
    className={cx('cursor-pointer', className)}
    to={`/blog/${post.fields.slug}`}
    {...props}
  >
    <Card
      fluid={post.frontmatter.bannerImage.childImageSharp.fluid}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      excerpt={post.excerpt}
    />
  </Link>
)

export const postCardFragment = graphql`
  fragment PostCard on Mdx {
    id
    excerpt(pruneLength: 160)
    fields {
      slug
    }
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      bannerImage {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
