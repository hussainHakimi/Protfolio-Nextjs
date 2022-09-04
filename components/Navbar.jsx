import React, { useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { IoMdMenu } from 'react-icons/io'
import { GrLinkedinOption } from 'react-icons/gr'
import { BsPersonLinesFill } from 'react-icons/bs'


const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () =>{
    setMenu(!menu)
  }
  return (
    <div className='w-full  fixed shadow-xl z-[100] h-14'>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src='/myLogo.png' alt='Logo' width="40" height='40'/>
        <div>
          <ul className='hidden md:flex'>
              <Link href='/'>
                <li className='ml-10 text-sm uppercase  hover:border-b'>
                  Home    
                </li>
              </Link>
              <Link href='/about'>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  About
                </li>
              </Link>
              <Link href='/skills'>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  Skills
                </li>
              </Link>
              <Link href='/projects'>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  Projects
                </li>
              </Link>
              <Link href='/contact'>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  Contact
                </li>
              </Link>
          </ul>
          <div className='md:hidden'>
            {/* <AiOutlineCloseCircle/> */}
            <IoMdMenu size={25} onClick={handleMenu}/>
          </div>
        </div>
      </div>

      <div className={menu ? 'md-hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div 
          className={menu 
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] ms:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
            : 'fixed left-[-100%] p-10 ease-in duration-500'
            }>
          <div>
            <div className='flex justify-between w-full items-center'>
              <Image src='/myLogo.png' alt='Logo' width="40" height='40'/> 
              <div className=' cursor-pointer p-3 rounded-full shadow-lg shadow-gray-400'>
                <AiOutlineClose size='15' onClick={handleMenu}/>
              </div>
            </div>
            <div className='border-b border-gray-500 my-4'>
              <p className='w-[85%] md-w-[90%] py-4 text-sm'> Let's Build cool Websites</p>
            </div>
          </div>
          <div className=' flex flex-col'>
            <ul className='uppercase space-y-8'>
              <Link href='/'>
                <li className=' text-[13px]'> Home</li>
              </Link>
              <Link href='/about'>
                <li className=' text-[13px]'> About</li>
              </Link>
              <Link href='/skills'>
                <li className=' text-[13px]'>Skills</li>
              </Link>
              <Link href='/projects'>
                <li className=' text-[13px]'>Projects</li>
              </Link>
              <Link href='/contact'>
                <li className=' text-[13px]'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5] font-semibold'>Let's Connect</p>
              <div className='my-4 flex items-center justify-between w-full sm:w-[80%]'>
                <div className='cursor-pointer p-3 rounded-full shadow-lg shadow-gray-400'>
                  <GrLinkedinOption />
                </div>
                <div className='cursor-pointer p-3 rounded-full shadow-lg shadow-gray-400'>
                  <AiFillGithub />
                </div>
                <div className='cursor-pointer p-3 rounded-full shadow-lg shadow-gray-400'>
                  <AiOutlineMail />
                </div>
                <div className='cursor-pointer p-3 rounded-full shadow-lg shadow-gray-400'>
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar