import React from 'react'
import {Tilt} from 'react-tilt'
import {services} from '../constants'

import { motion } from 'framer-motion'

const ServiceCard = ({title,icon})=>{
    return(
        <Tilt className='sm:w-[250px] w-full slide_in'>
            <div className='w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] rounded-lg'>
                <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                    <img src={icon} alt={title} className='w-[5rem] h-[10rem] object-contain'/>
                    <h3 className='text-white text-[1.1rem] font-semibold text-center'>{title}</h3>
                </div>
            </div>
        </Tilt>
    )
}

const About = () => {
    return (
        <div>
            <motion.div
                className='sm:px-24'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <p className='sm:text-4xl ml-4 text-3xl bg-clip-text bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400 text-transparent'>Introduction</p>
                <h2 className='sm:text-8xl ml-3 text-5xl bg-clip-text  bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 text-transparent'>Overview.</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
                className='mt-4 sm:px-[6.8rem] sm:ml-0 ml-3 text-opacity-60 text-slate-100 text-md leading-6'
            >
                I am a B.C.A Student with a love for coding and building real world projects.I develop Web Applications and ui using Javascript And React.I am a quick learner and I am currently looking for oppurtunities to enhance my skills.
            </motion.div>
            <div className='mt-20 sm:mx-[7rem] flex flex-wrap gap-10 px-3'>
                {services.map((service)=>(
                    <ServiceCard key={service.title}  {...service}/>
                ))}
            </div>
        </div>
    )
}

export default About