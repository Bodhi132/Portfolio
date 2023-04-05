import React from 'react'
import { technologies } from '../constants'
import IconsHolder from './IconsHolder'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-[3rem] sm:px-[7rem]'>
    {technologies.map((technology)=>(
      <div className='w-28 h-28' key={technology.name}>
            <IconsHolder icon={technology.icon}/>
      </div>
    ))}
  </div>
  )
}

export default Tech