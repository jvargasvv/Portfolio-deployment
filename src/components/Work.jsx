import React from 'react'
import Megawide from '../assets/Megawide_Corporation_logo.png'
import Donut from '../assets/Donut.png'
import Telemed from '../assets/Telemed_Logo.png'
import Lock from '../assets/lock.png'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='Work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold text-gray-800 text-center'>PROJECTS</p>
            <p className='text-gray-400 text-center'>Check out some of my recent work</p>

        </div>

        <div className='grid sm:grid-cols-3 gap-4'>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
                            items-center mx-auto content-div h-[200px] bg-cover relative'>
                <img className='w-[300px]' src={Megawide} layout="fill" objectFit="cover" alt="" />
             

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
                            items-center mx-auto content-div h-[200px] bg-cover relative'>
                <img className='w-[150px]' src={Donut} layout="fill" objectFit="cover" alt="" />
             

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
                            items-center mx-auto content-div h-[200px] bg-cover relative'>
                <img className='w-[300px]' src={Telemed} layout="fill" objectFit="cover" alt="" />
             

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
                            items-center mx-auto content-div h-[200px] bg-cover relative'>
                <img className='w-[200px]' src={Lock} layout="fill" objectFit="cover" alt="" />
             

            </div>
            
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
                            items-center mx-auto content-div h-[200px] bg-cover relative'>
                <img className='w-[200px]' src={Lock} layout="fill" objectFit="cover" alt="" />
             

            </div>


            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center
                            items-center mx-auto content-div h-[200px] bg-cover relative'>
                <img className='w-[200px]' src={Lock} layout="fill" objectFit="cover" alt="" />
             

            </div>

        </div>
      
    </div>
  )
}

export default Work
