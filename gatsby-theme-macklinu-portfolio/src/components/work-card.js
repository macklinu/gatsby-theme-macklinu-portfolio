import React from 'react'
import { Link, graphql } from 'gatsby'
import cx from '@macklinu/cx'
import Card from './card'

export default ({ work, className, ...props }) => (
  <Link
    className={cx('cursor-pointer', className)}
    to={`/work/${work.fields.slug}`}
    {...props}
  >
    <Card
      fluid={work.frontmatter.bannerImage.childImageSharp.fluid}
      title={work.frontmatter.title}
      excerpt={work.excerpt}
    />
  </Link>
)

export const workCardFragment = graphql`
  fragment WorkCard on Mdx {
    id
    excerpt(pruneLength: 160)
    fields {
      slug
    }
    frontmatter {
      title
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
