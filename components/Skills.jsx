import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2 '>
      <div className='max-w-[1240px] flex flex-col justify-center h-full m-auto'>
        <p className='text-xl text-[#5651e5] tracking-widest font-semibold'>Skills</p>
        <h2 className='py-4'>What Can I Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        
        {/* First Skill */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 shadow-gray-400 ease-in duration-300'>
            <div className='grid grid-cols-2 justify-center items-center'>
              <div className='m-atuo'>
                <Image src='/skills/html.png' alt='Html Logo' width='50' height='50'/>
              </div>
              <div>
                <h3>HTML5</h3>
              </div>
            </div>
          </div>
      {/* Second Skill */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-110 shadow-gray-400 ease-in duration-300'>
              <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-atuo'>
                  <Image src='/skills/css.png' alt='Html Logo' width='50' height='50'/>
                </div>
                <div>
                  <h3>CSS3</h3>
                </div>
              </div>
            </div>
      {/* Third Skill */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-110 shadow-gray-400 ease-in duration-300'>
              <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-atuo'>
                  <Image src='/skills/javascript.png' alt='Html Logo' width='50' height='50'/>
                </div>
                <div>
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>
      {/* Fourth Skill */}
              <div className='p-6 shadow-xl rounded-xl hover:scale-110 shadow-gray-400 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-center items-center'>
                  <div className='m-atuo'>
                    <Image src='/skills/react.png' alt='Html Logo' width='50' height='50'/>
                  </div>
                  <div>
                    <h3>React</h3>
                  </div>
                </div>
              </div>
      {/* Fivth Skill */}
              <div className='p-6 shadow-xl rounded-xl hover:scale-110 shadow-gray-400 ease-in duration-300'>
                <div className='grid grid-cols-2 justify-center items-center'>
                  <div className='m-atuo'>
                    <Image src='/skills/tailwind.png' alt='Html Logo' width='50' height='50'/>
                  </div>
                  <div>
                    <h3>Tailwindcss</h3>
                  </div>
                </div>
              </div>
      {/* Sixth Skill */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-110 shadow-gray-400 ease-in duration-300'>
              <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-atuo'>
                  <Image src='/skills/firebase.png' alt='Html Logo' width='50' height='50'/>
                </div>
                <div>
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
      {/* Seventh Skill */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-110 shadow-gray-400 ease-in duration-300'>
              <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-atuo'>
                  <Image src='/skills/github1.png' alt='Html Logo' width='50' height='50'/>
                </div>
                <div>
                  <h3>Github</h3>
                </div>
              </div>
            </div>
      {/* Eighth Skill */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-110 shadow-gray-400 ease-in duration-300'>
              <div className='grid grid-cols-2 justify-center items-center'>
                <div className='m-atuo'>
                  <Image src='/skills/node.png' alt='Html Logo' width='50' height='50'/>
                </div>
                <div>
                  <h3>Nodejs</h3>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Skills