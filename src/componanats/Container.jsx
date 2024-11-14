import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1270px] m-auto ${className}`}>{children}</div>
  )
}

export default Container