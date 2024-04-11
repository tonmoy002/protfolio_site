import React from 'react'
import { BsPersonRaisedHand } from "react-icons/bs";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div id="home" className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl font-bold text-[#d0cdd1] flex'> Hi <BsPersonRaisedHand size={40}  /> My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#f7f5f7]'> Tonmoy Deb Chowdhury</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#d0cdd1]'> I'm a Software Developer.</h2>
            <p className='text-[#d0cdd1] py-4 max-w-[700px]'>  My journey in the world of software development began with a fascination for turning ideas into functional,
            user-friendly applications. As a software developer, I'm passionate about developing web-based applications that are scalable and reliable.
            </p>
            
        </div>

    </div>
  )
}

export default Home