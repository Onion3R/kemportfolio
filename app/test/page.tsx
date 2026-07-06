import React from 'react'

function page() {
  return (
    <div className="p-20">
      <svg width="1000" height="700" viewBox="0 0 1000 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M980 20 L580 20 L20 290 L20 680 L380 680 L980 400 Z"
          stroke="blue" stroke-opacity="0.2" stroke-width="3" fill="none" />

        <path d="M980 20 L580 20 L20 290 L20 680 L380 680 L980 400 Z"
          stroke="blue" stroke-width="3" fill="none"
          stroke-dasharray="2000" stroke-dashoffset="2000">
          <animate attributeName="stroke-dashoffset"
            from="2000" to="0"
            dur="5s"
            repeatCount="indefinite" />
        </path>
      </svg>


    </div>
  )
}

export default page