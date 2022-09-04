import React from 'react'
import ProjectItems from './ProjectItems'
import propertyImg  from '../public/projects/property.jpg'
import cryptoImg from '../public/projects/crypto.jpg'
import netflixImg from '../public/projects/netflix.jpg'
import twitchImg from '../public/projects/twitch.jpg'

const Projects = () => {
  return (
    <div className='w-full '>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-[#5651e5] text-lg tracking-widest uppercase'>Projects</p>
        <h2 className='py-4'>What I've Build</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        
          <ProjectItems title='Property Finder' backgroundImg={propertyImg} projectUrl={'/property'} demoLink={'#'}/>
          <ProjectItems title='Crypto App' backgroundImg={cryptoImg} projectUrl={'/property'} demoLink={'#'}/>
          <ProjectItems title='Netflix' backgroundImg={netflixImg} projectUrl={'/property'} demoLink={'#'}/>
          <ProjectItems title='Twitch' backgroundImg={twitchImg} projectUrl={'/property'} demoLink={'#'}/>

        </div>
      </div>
    </div>
  )
}

export default Projects