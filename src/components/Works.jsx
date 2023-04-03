import React from 'react'
import { Tilt } from 'react-tilt'
import { github } from '../assets'
import { projects } from '../constants'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450
            }}
            className='p-5 rounded-2xl sm:w-[360px] w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'
        >
            <div className='relative w-full h-[230px]'>
                <img
                    src={image}
                    alt={name}
                    className='w-full h-full object-cover rounded-2xl'
                />
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="bg-gradient-to-r from-gray-700 via-gray-900 to-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img
                            src={github}
                            alt='github'
                            className='w-1/2 h-1/2 object-contain'
                        />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h3 className='text-white font-bold'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </Tilt>
    )
}

const Works = () => {
    return (
        <>
            <div className='mt-7'>
                <p className='sm:px-[7rem] sm:py-1 pb-0 px-[1rem] py-[1rem] font-extralight sm:text-4xl uppercase bg-clip-text bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400 text-transparent text-2xl ml-8 sm:ml-2'>My work</p>
                <h2 className='sm:px-[7rem]  px-[1rem] py-[.1rem] bg-clip-text  bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 text-transparent sm:text-[5rem] text-[2rem] ml-8 sm:ml-2'>Projects.</h2>
            </div>
            <div className='w-full flex text-start'>
                <div
                    className='mt-3 text-white opacity-50 text-[17px] max-w-3xl leading-[30px] sm:ml-[7rem] p-0 ml-[3rem]'
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </div>
            </div>
            <div className='mt-20 flex flex-wrap gap-7 sm:ml-[5rem] ml-5 p-6'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    )
}

export default Works