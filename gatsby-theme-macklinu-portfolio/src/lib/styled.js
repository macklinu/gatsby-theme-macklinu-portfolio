import React from 'react'
import cx from '@macklinu/cx'

let styles = {
  h1: 'text-6xl font-black',
  h2: 'text-5xl font-bold',
  h3: 'text-4xl',
  h4: 'text-3xl',
  h5: 'text-2xl',
  h6: 'text-xl',
  p: 'text-lg my-1 leading-normal',
  a: cx(
    'bg-yellow-300 hover:bg-yellow-500',
    'border-solid border-b-2 border-yellow-500'
  ),
  pre: 'font-mono py-2 px-4 bg-gray-300 rounded',
  code: 'font-mono',
  ul: 'list-inside list-disc',
  ol: 'list-inside list-decimal',
  li: 'text-lg leading-normal',
  blockquote: 'border-solid border-l-4 border-gray-700 pl-4 my-2',
  img: 'w-full',
}

export let Styled = Object.entries(styles).reduce((obj, [Tag, classes]) => {
  obj[Tag] = ({ className, children, ...props }) => (
    <Tag className={cx(classes, className)} {...props}>
      {children}
    </Tag>
  )
  obj[Tag].displayName = `TailwindStyled(${Tag})`
  return obj
}, {})
