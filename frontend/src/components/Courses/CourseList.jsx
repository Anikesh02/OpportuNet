import React from 'react'
import CourseCards from './CourseCards'
import { courses } from '../../assets/data/course'

const CourseList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {courses.map((course)=>(
        <CourseCards key={course.id} course={course}/>
        ))}
    </div>

  )
}

export default CourseList