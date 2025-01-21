import React from 'react'

function Button({ className, children }) {
  return (
    <button className={className}>{children}</button>
  )
}

export default Button

//bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black