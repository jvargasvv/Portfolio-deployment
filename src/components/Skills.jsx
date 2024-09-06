import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import php from '../assets/php.png'
import java from '../assets/java.png'

const Skills = () => {
  return (
    <div className='mt-28 text-gray-800 md:h-[150px] max-w-[1200px] mx-auto text-center'>
      <h2 className='text-gray-800 text-2xl md:text-4xl font-bold m-10'>
       TECHNICAL SKILLS
      </h2>
      <div className='grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={html} alt="" />
          <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={css} alt="" />
          <p className='mt-2'>CSS</p>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={javascript} alt="" />
          <p className='mt-2'>JAVASCRIPT</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={java} alt="" />
          <p className='mt-2'>JAVA</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={php} alt="" />
          <p className='mt-2'>PHP</p>
        </div>  

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={react} alt="" />
          <p className='mt-2'>REACT</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={tailwind} alt="" />
          <p className='mt-2'>TAILWIND</p>
        </div>
      
      </div>
    </div>
  )
}

export default Skills
