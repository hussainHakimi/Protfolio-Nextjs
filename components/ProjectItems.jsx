import React from 'react'
import propertyImg  from '../public/projects/property.jpg'
import Link from 'next/link'
import Image from 'next/image'


const ProjectItems = ({title, backgroundImg, projectUrl, demoLink}) => {
  return (
    <div className='relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl
            p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]' >
            <Image src={backgroundImg} alt='' className='rounded-xl group-hover:opacity-10'/>
            <div className='absolute hidden group-hover:block'>
              <h3 className='text-white text-2xl tracking-wider text-center'>{title}</h3>
              <p className='text-gray-200 text-center pb-4 pt-2'>React</p>
              <div className='flex'>
                <Link href={projectUrl} >
                  <p className='py-2 mx-4 px-4 bg-white mt-4 text-center rounded-lg text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
                <Link href={demoLink} >
                  <p className='py-2 bg-white px-4 mt-4 text-center rounded-lg text-gray-700 font-bold text-lg cursor-pointer'>Demo</p>
                </Link>
              </div>
            </div>
          </div>

  )
}

export default ProjectItems