import React from 'react'
import image9 from '../assets/imahe9.png'

const About = () => {
  return (
    <div className='text-black max-w-[1200px] mx-auto my-32' id='About'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
          <div className='my-auto mx-auto'>
            <h2 className='text-4xl font-bold mb-4 text-gray-800'>ABOUT ME</h2>
            <p className='text-base lg:text-lg text-justify mb-10'>
            I'm a versatile individual passionate about software and web development, with a creative edge that extends into my love for basketball and dancing. 
            I thrive on building innovative solutions while staying active both mentally and physically.
            </p>
            <div className='mb-4'>
              <span className='block text-2xl font-bold mb-4'>Name: <a href="" className='ml-11 font-normal text-gray-600'>Jonathan Vargas</a></span>
              <span className='block text-2xl font-bold mb-4'>Age: <a href="" className='ml-16 font-normal text-gray-600'>24 years old</a></span>
              <span className='block text-2xl font-bold mb-5'>Address: <a href="" className='ml-5 font-normal text-gray-600'>  Blk 95 Lot 9 Robinsons Homes East Antipolo</a></span>
              <span className='block text-2xl font-bold mb-4'>Zip Code: <a href="" className='ml-2  font-normal text-gray-600'>1870</a></span>
              <span className='block text-2xl font-bold mb-4'>Email: <a href="mailto:thanvargas402@gmail.com" className='ml-12 font-normal text-gray-600'>vargasjonathanv24@gmail.com</a></span>
              <span className='block text-2xl font-bold'>Contact: <a href="tel:+639552974706" className='ml-6 font-normal text-gray-600'>+639 1590 76191</a></span>
            </div>
          </div>
        </div>
        <img className='mx-40 rounded-3xl py-8 md:py-0' src={image9} width={450} height={300} />
      </div>
    </div>
  )
}

export default About
