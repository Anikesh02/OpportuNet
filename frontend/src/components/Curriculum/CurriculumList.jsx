import React from 'react'
import { curriculums } from '../../assets/data/curriculum'
import CurriculumItem from './CurriculumItem'

const CurriculumList = () => {
  return (
    <ul className="mt-[38px]">
        {curriculums.map((item,index)=>(
        <CurriculumItem item={item} key={index}/>
        ))}
    </ul>
  ) 
}

export default CurriculumList