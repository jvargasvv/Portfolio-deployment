import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-zinc-300 text-black py-10 mt-14'>
      <div className='max-w-[1200px] mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-2xl font-bold mb-4'>About Me</h3>
            <p className='text-gray-600 text-justify'>
            I'm a versatile individual passionate about software and web development, with a creative edge that extends into my love for basketball and dancing. 
            I thrive on building innovative solutions while staying active both mentally and physically.
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-bold mb-4'>Quick Links</h3>
            <ul className='text-gray-600'>
              <li className='mb-2'><a href='#About' className='hover:underline'>About</a></li>
              <li className='mb-2'><a href='#Work' className='hover:underline'>Work</a></li>
              <li className='mb-2'><a href='#Contact' className='hover:underline'>Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-2xl font-bold mb-4'>Have A Question?</h3>
            <ul className='text-gray-600'>
              <li className='mb-2'>Email: <a href='thanvargas402@gmail.com' className='hover:underline'>vargasjonathanv24@gmail.com</a></li>
              <li className='mb-2'>Phone: (915) 907-6191</li>
              <li className='mb-2'>Address: Robinsons Homes East, Antipolo City</li>
              <li className='mb-2'>Zip Code: 1870</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <a href='https://www.linkedin.com/in/jonathan-vargas-703753296/' className='text-gray-600 mx-4 hover:text-black'>
            <FaLinkedin size={30} />
          </a>
          <a href='https://www.facebook.com/Than.vargas24/' className='text-gray-600 mx-4 hover:text-black'>
            <FaFacebook size={30} />
          </a>
          <a href='https://www.instagram.com/jvargasvv/' className='text-gray-600 mx-4 hover:text-black'>
            <FaInstagram size={30} />
          </a>
        </div>
        <div className='text-center text-gray-600 mt-10'>
          <p>&copy; 2024 Vargas. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
