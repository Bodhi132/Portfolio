import React from 'react'
import { technologies } from '../constants'
import BallCanvas from './canvas/Ball'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-[3rem] sm:px-[7rem]'>
    {technologies.map((technology)=>(
      <div className='w-28 h-28' key={technology.name}>
        <BallCanvas icon={technology.icon}/>
      </div>
    ))}
  </div>
  )
}

export default Tech