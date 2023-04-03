import React, { useRef } from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { useState, useEffect } from 'react'
import { close, menu } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  // const linkref = useRef()

  // console.log(linkref);

  // const scroll = (active) =>{
  //   if(active === 'About')
  //   {
  //       window.scroll(0,600)

  //   }
  //    if(active === 'Work')
  //   {
  //     window.scroll(0,1600)
  //   }
  //   if(active === 'Contact')
  //   {
  //     window.scroll(0,2500)
  //   }
  // }

  // useEffect(() => {
  //   const handleWindowScroll = () => {
  //     if (toggle)
  //       if (active === 'About') {
  //         window.scroll(0, 600)
  //       }
  //     if (active === 'Work') {
  //       window.scroll(0, 1600)
  //     }
  //       if(active === 'Contact')
  //       {
  //         window.scroll(0,2500)
  //       }
  //   }

  //   window.addEventListener('scroll', handleWindowScroll);

  //   return () => window.removeEventListener('scroll', handleWindowScroll);
  // }, [toggle,active]);
  useEffect(() => {
        if (active === 'About') {
          window.scroll(0, 600)
        }
      if (active === 'Work') {
        if(window.innerWidth <1000 ){
          window.scrollTo(0, window.innerWidth)
        }
        window.scroll(0, 1600)
      }
        if(active === 'Contact')
        {
          if(window.innerWidth <1300 )
          window.scroll(0,4700)

          window.scroll(0,2500)
        }
    

    return () => setActive('');
  }, [active]);

  return (
    <div className='w-full relative'>
      <nav className=' md:w-5/6 min-[300px]:w-5/6 flex justify-between items-center px-4 py-4 relative top-0 mt-4 sm:left-[4rem] left-14 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl z-20 bg-black'>
        <div className='w-full flex items-center justify-between'>
          <Link
            to='/'
            onClick={() => {
              setActive('')
            }}
            className='flex items-center'>
            <img src={logo} alt="logo" className='w-[3.5rem] h-[3.5rem] object-contain cursor-pointer' />
            <p className='font-bold text-black text-xl'>Bodhisattwa Basu</p>
          </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ?
                  'text-white' : 'text-black'}
                font medium cursor-pointer px-2 hover:text-white`
                }
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className='sm:hidden flex justify-end items-center'>
            <img src={toggle ? close : menu} alt="menu" className='w-6 h-6 cursor-pointer' onClick={() => setToggle(!toggle)} />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-[4.5rem] right-0 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none top-6 flex flex-col justify-end items-start bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded py-6 px-7'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${active === link.title ?
                      'text-white' : 'text-black'}
                font-medium cursor-pointer py-2 px-2 hover:text-white`
                    }
                    onClick={() => {
                      setActive(link.title)
                      setToggle(!toggle)

                    }}

                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar