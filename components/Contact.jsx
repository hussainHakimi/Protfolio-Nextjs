import React from 'react'
import contactImg from '../public/contact.jpg'
import Image from 'next/image'
import { GrLinkedinOption } from 'react-icons/gr'
import {AiOutlineMail, AiFillGithub} from 'react-icons/ai'
import { BsPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'



const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] w-full m-auto px-2 py-16'>
        <p className='text-xl text-[#5651e5] tracking-wider uppercase font-semibold'>contact</p>
        <h2 className='py-4'>Get in Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* Left  */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image src={contactImg} alt="" className='rounded-xl hover:scale-105 ease-in duration-300' />
              </div>
              <div>
                <h2 className='py-2'>Name here</h2>
                <p>front-end developer</p>
                <p className='py-4 '> I am avaliable for freelanced or full-time positions. Contact me and let's talk</p>
              </div>
            <div>
              <p className='uppercase pt-8'>Connect with me</p>
              <div className='flex items-center justify-between py-4 max-w-[80%] mx-auto md:max-w-[75%] lg:max-w-full '>
                <div className='rounded-full p-3 sm:p-4 sm:p-4 md:p-6 shadow-lg shadow-gray-400 hover:scale-110'>
                <GrLinkedinOption />
              </div>
              <div className='rounded-full p-3 sm:p-4 md:p-6 shadow-lg shadow-gray-400 hover:scale-110'>
                <AiFillGithub />
              </div>
              <div className='rounded-full p-3 sm:p-4 md:p-6 shadow-lg shadow-gray-400 hover:scale-110'>
                <AiOutlineMail/>
              </div>
              <div className='rounded-full p-3 sm:p-4 md:p-6 shadow-lg shadow-gray-400 hover:scale-110'>
                <BsPersonLinesFill />
              </div>
              </div>
            </div>
            </div>
          </div>
          {/* Right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 '>
            <div className='p-4'>
              <form action="">
                <div className='grid md:grid-cols-2 gap-4 py-2 w-full'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'> Name</label>
                    <input type="text" className='border-2 rounded-lg p-3 border-gray-300 flex' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input type="text" className='border-2 rounded-lg p-3 border-gray-300 flex' />
                  </div>
                </div>
                <div className='w-full flex flex-col py-2 '>
                  <label className='uppercase text-sm py-2'> email</label>
                  <input type="text" className='border-2 rounded-lg p-3 border-gray-300 flex' />
                  
                  <label className='uppercase text-sm py-2'> Subject</label>
                  <input type="text" className='border-2 rounded-lg p-3 border-gray-300 flex' />

                  <label className='uppercase text-sm py-2'> Message</label>
                  <textarea name="" id="" cols="30" rows="10" className='rounded-lg border-2 border-gray-300'></textarea>
                </div>
                <button className='w-full uppercase py-4 text-gray-100 font-bold tracking-widest rounded-lg mt-4'>send message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className=' p-3 rounded-full w-[70px] h-[70px] mx-auto z-100 relative  text-center shadow-xl shadow-gray-400'>
              <HiOutlineChevronDoubleUp size='30' className=' absolute left-[20px] top-[18px] text-[#5651e5]'/>
              </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact