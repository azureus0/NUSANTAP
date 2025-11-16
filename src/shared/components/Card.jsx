import React from 'react'

function Card({ children, className,...props }) {
  return (
    <div
      className={`flex flex-col border-[#DBDFD0] border-[0px] rounded-[12px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${className} `
    }{...props}
    >
      {children}
    </div>
  )
}

export default Card
