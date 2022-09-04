import React from 'react'
import Image  from 'next/image'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 py-16 flex items-center'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='text-[#5651e5] text-xl uppercase tracking-widest'>About</p>
            <h2 className='py-4'>Who Am I?</h2>
            <p className='py-2 text-gray-600'>// I am not a normal developer</p>
            <p className='py-2 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Modi ex quisquam reprehenderit, enim voluptate reiciendis amet repudiandae unde
                ratione commodi molestiae possimus! Quaerat neque blanditiis laudantium deleniti, recusandae molestiae eius!
            </p>
            <p className='py-2 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Modi ex quisquam reprehenderit, enim voluptate reiciendis amet repudiandae unde
                ratione commodi molestiae possimus! Quaerat neque blanditiis laudantium deleniti, recusandae molestiae eius!
            </p>
            <a href='' className='text-md py-2 block underline uppercase text-gray-400'>check out my latest project</a>
        </div>
        <div className=' w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-110 p-4 ease-in duration-300'>
          <img src="/about.jpg" className='object-fit rounded-xl h-full w-full '/>
        </div>
      </div>
    </div>
  )
}

export default About