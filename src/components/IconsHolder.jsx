import React from 'react'

const IconsHolder = ({icon}) => {
  return (
    <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-full p-3'>
        <img src={icon} alt="" className='object-contain w-26 h-26'/>
    </div>
  )
}

export default IconsHolder