import React from 'react'

const Container = ({children}) => {
  return (
    <div>
        <h1>Dynamic container</h1>
        {children}
    </div>
  )
}

export default Container
