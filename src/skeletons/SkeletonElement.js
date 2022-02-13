import React from 'react'

const SkeletonElement = ({ type }) => {
  const classes = `sekeleton ${type}`
  return <div className={classes}></div>
}

export default SkeletonElement
