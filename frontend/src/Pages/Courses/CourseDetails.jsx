import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import courseImg from '../../assets/images/App.png'
import starIcon from '../../assets/images/Star.png'
import CourseAbout from './CourseAbout'
import Feedback from './Feedback'
import SidePanel from './SidePanel'
import Curriculum from './Curriculum'
import courseData from './data/courseDetail.json'

const CourseDetails = () => {

    const { id } = useParams();
    const course = courseData.find(course => course.id === parseInt(id));

    const [tab, setTab] = useState('about')

    if (!course) {
        return <div>Course not found</div>;
    }

    return <section>
        <div className="max-w-[1170px] px-5 mx-auto mt-24">
            <div className="grid md:grid-cols-3 gap-[50px]">

                <div className='md:col-span-2'>
                    <div className="flex items-center gap-5">
                        <figure className='max-w-[400px] max-h-[400px]'>
                            <img src={course.img} alt={courseImg} className='w-full' />
                        </figure>

                        <div>
                            <h3 className='text-[#181A1E] text-[22px] leading-9 mt-6 mb-9 font-bold'>{course.name}</h3>
                            <span className='bg-[#CCF0F3] text-[#01B5C5] py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-6 lg:text-[16px] lg:leading-7 font-semibold rounde mt-16'>
                            <strike>{course.price}</strike> <span className='ml-2 text-[green]'>FREE</span>
                            </span>

                            <div className="flex items-center gap-[6px] mt-16">
                                <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-[#181A1E]">
                                    <img src={starIcon} alt="" />{course.rating}
                                </span>
                                <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-[#4E545F]'>(272)</span>
                            </div>

                            <p className='text-[18px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]  md:text-[15px] lg:max-w-[390px]'>
                                Grab your seat now !!!
                            </p>

                            <Link to='/roadmap'><button className="border border-gray-300 text-black hover:translate-x-4 font-semibold py-1.5 px-5 rounded-md lg:ml-32 lg:ml-7 lg:shadow xl:ml-2 hover:bg-[#388E3C] hover:border-gray-500 hover:text-white duration-500 ml-16 lg:hover:scale-105 mt-3 px-8 ">Explore Road Map</button></Link>
                        </div>
                    </div>
                    <div className="mt-[30px] border-b border-solid border-[#0066ff34]">
                        <button onClick={() => setTab('about')} className={`${tab === 'about' && 'border-b border-solid border-[#0067FF]'} py-2 px-5 mr-5 text-[16px] leading-7 text-[#181A1E] font-semibold`}>About</button>

                        <button onClick={() => setTab('curriculum')} className={`${tab === 'curriculum' && 'border-b border-solid border-[#0067FF]'} py-2 px-5 mr-5 text-[16px] leading-7 text-[#181A1E] font-semibold`}>Curriculum</button>
                        
                        <button onClick={() => setTab('feedback')} className={`${tab === 'feedback' && 'border-b border-solid border-[#0067FF]'} py-2 px-5 mr-5 text-[16px] leading-7 text-[#181A1E] font-semibold`}>Reviews</button>
                        

                    </div>

                    <div className="mt-[20px]">
                        {
                            tab === 'about' && <CourseAbout />
                        }
                        {
                            tab === 'feedback' && <Feedback />
                        }
                         {
                            tab === 'curriculum' && <Curriculum />
                        }
                    </div>

                </div>

                <div>
                    <SidePanel />
                </div>
            </div>
        </div>
    </section>
}

export default CourseDetails