import React from 'react'
import ComputerCanvas from './canvas/Computers'
import { motion } from 'framer-motion'
import { myImage } from '../assets'

const Hero = () => {
    return (
        <section className='relative w-full sm:h-screen h-[55vh] mx-auto'>
            <div className='sm:px-16 p-6 flex flex-row absolute inset-0 max-w-7xl top-[3rem] items-start gap-5'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-5 h-5 rounded-full bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500' />
                    <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-rose-400 via-fuchsia-500 to-indigo-500 ' />
                </div>

                <div className='max-[350px]:mb-24'>
                    <div className='flex flex-row'>
                        <h1 className='sm:text-[4.5rem] text-40px bg-clip-text bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 text-transparent sm:mr-6 mr-2'>Hey, I'm</h1>
                        <h1 className='sm:text-[4.5rem] text-40px bg-clip-text bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400 text-transparent '>Bodhisattwa</h1>
                    </div>
                    <p className='sm:text-[1.5rem] '>I develop Web Applications and <br className='sm:block hidden' />User Interfaces</p>
                </div>
            </div>
            
            {/* <ComputerCanvas/> */}
            <div className='absolute sm:left-[30rem] sm:top-[13rem] top-[8rem] left-[4rem] '>
                <img src={myImage} alt="" className='sm:h-[350px] h-[300px]'/>
            </div>

            <div className='absolute sm:bottom-[8rem] bottom-[2rem] right-9  w-full flex justify-center items-center '
            onClick={()=>{
                window.scrollTo(0, 700);
            }}>
                <a href="#about">
                    <div className='w-[45px] h-[85px] rounded-3xl border-slate-400 border-4 flex justify-center items-start p-2 ml-[5rem] '>
                        <motion.div
                        animate={{
                            y:[0,45,0]
                        }}
                        transition={
                            {
                                duration:1.5,
                                repeat:Infinity,
                                repeatType:'loop'
                            }
                        }
                        className='w-5 h-5 rounded-full bg-slate-400 mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero