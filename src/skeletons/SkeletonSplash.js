import React from 'react'
import SkeletonElement from './SkeletonElement'

const SkeletonSplash = () => {
  return (
    <div className='skeleton-wrapper'>
      <div className='skeleton-splash'>
        <SkeletonElement type='splash-text' />
        <SkeletonElement type='splash-qrcode' />
      </div>
    </div>
  )
}

export default SkeletonSplash
