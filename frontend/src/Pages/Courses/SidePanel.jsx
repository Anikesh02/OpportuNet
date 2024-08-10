import React from 'react'
import { Link } from 'react-router-dom'

const SidePanel = () => {
    return (
        <div className='border-gray-400 p-3 lg:p-5 rounded-md mt-0 shadow-lg'>
            <div className="flex items-center justify-between mt-16">

            <Link to='/'><button className="border border-gray-300 text-black font-semibold hover:translate-x-4 py-1.5 px-5 rounded-md lg:ml-32 lg:ml-7 lg:shadow xl:ml-2 hover:bg-[#388E3C]  hover:border-gray-500 hover:text-white duration-500  lg:hover:scale-105 mt-3 px-8">Enroll Now</button></Link>

                <p className="text__para mt-0 ml-6 font-semibold bg-[#fff9ea] text-[red] text-[6px] leading-6 lg:text-[12px] py-2 px-2 lg:leading-6 font-semibold rounde mt-3">Limited Seats Available !!</p>

            </div>
            <div className="mt-[30px]">
                    <p className="text__para mt-0  text-[15px] font-semibold text-headingColor">What you'll learn</p>
                    <ul className="mt-3 ">
                        <li className="flex items-center justify-between mb-2 mt-6">
                            <p className='text-[12px] leading-6 text-textColor font-normal'>✔️ Build 16 app development projects for your portfolio, ready to apply for junior developer jobs</p>
                        </li>
                        <li className="flex items-center justify-between mb-2 mt-6">
                            <p className='text-[12px] leading-6 text-textColor font-normal'>✔️ Learn the latest technologies, including Flutter, React Native, Kotlin and even Java development.</p>
                        </li>
                        <li className="flex items-center justify-between mb-2 mt-6">
                            <p className='text-[12px] leading-6 text-textColor font-normal'>✔️ After the course you will be able to build ANY app you want.</p>
                        </li>
                        <li className="flex items-center justify-between mb-2 mt-6">
                            <p className='text-[12px] leading-6 text-textColor font-normal'>✔️ Build fully-fledged websites and apps for your startup or business.</p>
                        </li>
                        <li className="flex items-center justify-between mb-2 mt-6">
                            <p className='text-[12px] leading-6 text-textColor font-normal'>✔️  Work as a freelance App developer.</p>
                        </li>
                        <li className="flex items-center justify-between mb-2 mt-6">
                            <p className='text-[12px] leading-6 text-textColor font-normal'>✔️ You'll be able to develop cloud apps using Google Firebase</p>
                        </li>
                        <li className="flex items-center justify-between mb-2 mt-6">
                            <p className='text-[12px] leading-6 text-textColor font-normal'> ✔️ Publish your apps on Google Play and generate revenue with Google Pay and Google Ads</p>
                        </li>
                        <li className="flex items-center justify-between mb-2 mt-6">
                            <p className='text-[12px] leading-6 text-textColor font-normal'>✔️ You will be very confident using Kotlin and programming in general</p>
                        </li>
                    </ul>
                </div>
                
        </div>
      )
}

export default SidePanel