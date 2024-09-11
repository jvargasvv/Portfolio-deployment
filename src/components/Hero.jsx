import React from 'react'
import image1 from '../assets/imahe1.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center max-w-[1200px] md:h-[70vh] mx-32 py-8 bg-200'>
      <div className='w-[600px] h-[300px] lg:w-[1200px] lg:h-[400px] mx-24'>  
        <img src={image1} alt="hero image3" className='w-full h-full object-cover' />
      </div>
      <div className='px-5 text-center sm:text-left'>
        <h1 className='text-gray-800 text-4xl sm:text-5xl font-semibold'>
          <span>
            Hi, I'm 
          </span> <br/>
          <span className='primary-color my-4 font-extrabold'>
          Jonathan V. Vargas
          </span> <br />
          <div className='font-semibold'>
          <TypeAnimation sequence ={[
              "Front-End Developer", 1000,
              "Web Designer", 1000,
              "Software Engineer", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity} 
          />
          </div>
        </h1>
        <p className='text-black sm:text-lg my-6 text-justify'>
          I am seeking for a position to utilize my skills 
          and abilities and achieve professional growth while being resourceful, 
          innovative and flexible. To add valuable assets to your esteemed organization as an active member. 
        </p>
        <div className='my-8'>
          <a href="https://drive.google.com/file/d/1ScHKNRcDpkiPP91ebXc0fsQZgzfhpiLF/view?usp=sharing" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br
             from-teal-400 to-teal-800 text-white'>
            Download CV
          </a>
          <a href="#Contact" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400
             hover:bg-gradient-to-br from-teal-400 to-teal-800 text-gray-800 hover:border-none'>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
