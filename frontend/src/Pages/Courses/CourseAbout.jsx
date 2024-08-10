import React from 'react'
import { useParams } from 'react-router-dom'
import courseData from './data/courseDetail.json'


const CourseAbout = () => {
    const { id } = useParams();
    const course = courseData.find(course => course.id === parseInt(id));


    return <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About
                <span className='text-[#01B5C5] font-bold text-[24px] leading-9'>{course.name}</span>
            </h3>
            <p className="text-[14px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]">{course.about1}</p>
            <p className="text-[14px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]">{course.about2}</p>
        </div>

        <div className="mt-12 mb-6">
            <h3 className='text-[20px] leading-[30px] text-[#181A1E] font-semibold'>Contact</h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    {/* <span className="text-yellowColor text-[15px] leading-6 font-semibold">{formateDate('05-13-2008')} - {formateDate('03-04-2010')}</span> */}
                    <span className="text-[#FEB60D] text-[15px] leading-6 font-semibold">+917400115591</span>
                    <p className='text-[16px] leading-6 font-medium text-[#4E545F]'>Mr. Shekhar</p>
                    <p className='text-[14px] leading-6 font-medium text-[#4E545F]'>opportuNet Staff</p>

                </li>

                <li className="p-4 rounded bg-[#fff9ea]">
                    {/* <span className="text-yellowColor text-[15px] leading-6 font-semibold">{formateDate('05-13-2008')} - {formateDate('03-04-2010')}</span> */}
                    <span className="text-[#FEB60D] text-[15px] leading-6 font-semibold">+918255745851</span>
                    <p className='text-[16px] leading-6 font-medium text-[#4E545F]'>Mr. Patil</p>
                    <p className='text-[14px] leading-6 font-medium text-[#4E545F]'>opportuNet Staff</p>
                </li>
            </ul>
        </div>
    </div>
}

export default CourseAbout