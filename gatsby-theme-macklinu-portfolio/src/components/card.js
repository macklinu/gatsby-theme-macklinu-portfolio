import React from 'react'
import Img from 'gatsby-image'
import cx from '@macklinu/cx'

export default ({ fluid, title, date, excerpt }) => (
  <div
    className={cx(
      'max-w-sm rounded overflow-hidden',
      'shadow-lg hover:shadow-2xl'
    )}
  >
    <Img fluid={fluid} />
    <div className='px-6 py-4'>
      <div className='font-bold text-xl'>{title}</div>
      {date && <div className='text-gray-500 text-sm mb-2'>{date}</div>}
      <p className='text-gray-700 text-base'>{excerpt}</p>
    </div>
  </div>
)
