import React from 'react'
import LottieAnimation from '../components/LottieAnimation'
import { useNavigate } from 'react-router-dom'

const MockInterviewLanding = () => {
  const navigate = useNavigate()
  return (
    <div className="h-[50rem] mt-10 w-full bg-white relative flex flex-col items-center justify-center wax-w-7xl">
    {/* Radial gradient for the container to give a faded look */}
    <p className="text-xl lg:text-5xl max-w-sm lg:max-w-lg text-center font-semibold z-20 text-black my-10">
    Land Your Dream Job with 
    <span className='bg-gradient-to-r from-green-500 to-green-800 py-8 text-transparent bg-clip-text'> AI-Powered </span>
    Mock Interviews
    </p>
    <button className='px-4 py-2 rounded-lg z-20 text-white bg-green-500 hover:bg-green-700 hover:duration-100' onClick={() => navigate('.././mock-interview-info')}>
        Get Started
    </button>
    <div className='absolute'>
        <LottieAnimation />
    </div>
  </div>

  )
}

export default MockInterviewLanding