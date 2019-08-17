import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Styled } from './styled'

export let wrapRootElement = ({ element }) => (
  <MDXProvider components={Styled}>{element}</MDXProvider>
)
