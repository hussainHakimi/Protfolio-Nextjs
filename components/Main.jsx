import React from 'react'
import {AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import { BsPersonLinesFill } from 'react-icons/bs'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='text-sm uppercase text-gray-600 tracking-widest'>Lets Built Somthing Amazing</p>
          <h1 className='text-gray-700 py-4'>Hi, I am <span className='text-[#5651e5]'>Hussain</span></h1>
          <h1 className='text-gray-700 py-2'>A Front-End Web Developer</h1>
          <p className='text-gray-600 py-4 max-w-[70%] m-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam voluptatem officiis 
              aperiam eaque amet, quis porro? Voluptatem voluptates ipsa, quia dolorum accusamus, 
                ea, obcaecati dolores magni harum neque quam!
          </p>
          <div className='flex justify-between items-center max-w-[230px] md:max-w-[330px] sm:max-w-[280px] m-auto py-4'>
            <div className='rounded-full p-3 sm:p-4 md:p-6 shadow-lg shadow-gray-400 text-[#5651e5] hover:scale-110'>
              <GrLinkedinOption />
            </div>
            <div className='rounded-full p-3 sm:p-4 md:p-6 shadow-lg shadow-gray-400 text-[#5651e5] hover:scale-110'>
              <AiFillGithub />
            </div>
            <div className='rounded-full p-3 sm:p-4 md:p-6 shadow-lg shadow-gray-400 text-[#5651e5] hover:scale-110'>
              <AiOutlineMail/>
            </div>
            <div className='rounded-full p-3 sm:p-4 md:p-6 shadow-lg shadow-gray-400 text-[#5651e5] hover:scale-110'>
              <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main