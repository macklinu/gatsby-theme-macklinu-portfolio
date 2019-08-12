import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

let FooterLink = props => (
  <a
    className='text-base font-bold p-2 ml-4 rounded hover:bg-gray-800'
    {...props}
  />
)

let Footer = () => (
  <footer className='p-6 bg-black text-white flex justify-end'>
    <div className='mx-auto' />
    <div>
      <FooterLink href='https://github.com/macklinu'>github</FooterLink>
      <FooterLink href='https://www.linkedin.com/in/macklinu'>
        linkedin
      </FooterLink>
      <FooterLink href='https://twitter.com/macklinu'>twitter</FooterLink>
    </div>
  </footer>
)

let AvatarLink = ({ avatar, ...props }) => (
  <Link
    className='cursor-pointer p-2 rounded hover:bg-gray-200'
    to='/'
    {...props}
  >
    <div className='flex items-center'>
      <Img fixed={avatar.childImageSharp.fixed} />
      <span className='ml-2 text-base font-bold'>mackie</span>
    </div>
  </Link>
)

let NavLink = props => (
  <Link
    className='text-base font-bold p-2 rounded hover:bg-gray-200 ml-4'
    {...props}
  />
)

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/mackie-face.png/" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <>
      <div className='container mx-auto px-4 flex flex-col min-h-screen'>
        <nav className='flex justify-between py-6'>
          <AvatarLink avatar={data.avatar} />
          <div className='mx-auto' />
          <div className='flex flex-row items-center'>
            <NavLink to='/about'>about</NavLink>
            <NavLink to='/blog'>blog</NavLink>
            <NavLink to='/work'>work</NavLink>
          </div>
        </nav>
        {children}
      </div>
      <Footer />
    </>
  )
}
