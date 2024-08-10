import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import starIcon from '../../assets/images/Star.png';


function CourseCards({course})  {

    const { id, name, avgRating, totalRating, photo, specialization, totalStudents, hospital } = course;


    return (
        <div className='p-3 lg:p-9 gap-3 '>
            <div className=''>
                <img src={photo} className="w-full rounded-2xl" alt="" />
            </div>
            <h2 className="text-[5px] leading-[30px] lg:text-[18px] lg:leading-9 text-[#181A1E] font-[700] mt-3 lg:mt-5">{name}</h2>
            <div className="mt-2 lg:mt-4 flex items-center justify-between">
                <span className='bg-[#CCF0F3] text-[#01B5C5] py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>{specialization}</span>

                <div className="flex items-center gap-[6px]">
                    <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-[#181A1E]'><img src={starIcon} alt="" />{avgRating}</span>
                    <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font--[400] text-[#4E545F]'>({totalRating})</span>
                </div>
            </div>

            <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
                <div>
                    <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-[#181A1E]'>+{totalStudents} students</h3>
                    <p className='text-[14px] leading-6 font-[400] text-[#4E545F]'>At {hospital}</p>
                </div>

                <Link to={'/courses/' + id } className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-[#388E3C] duration-500  hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
            </div>
        </div>
    )
}

export default CourseCards