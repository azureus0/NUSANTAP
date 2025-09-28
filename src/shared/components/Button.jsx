import React from 'react'

function Button({ children, className }) {
  return (
    <button className={`rounded-full font-DMsans ${className}`}>
      {children}
    </button>
  )
}

export default Button

