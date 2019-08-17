import React from 'react'
import cx from '@macklinu/cx'

export default ({ title, children, className, ...props }) => (
  <div
    className={cx(
      'border-t-4 border-blue-500 rounded-b',
      'bg-blue-100 text-blue-900 px-4 py-3 shadow-md',
      className
    )}
    role='alert'
    {...props}
  >
    <div>
      <p className='font-bold'>{title}</p>
      <p className='text-sm'>{children}</p>
    </div>
  </div>
)
