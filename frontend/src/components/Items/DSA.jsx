import React from 'react';
import DSAitem from './DSAitem';
import { dsaData } from '../../assets/data/dsa';


const DSA = () => {
  return (
    <ul className="mt-[96px]">
        {dsaData.map((item,index)=>(
        <DSAitem item={item} key={index}/>
        ))}
    </ul>
  )
}

export default DSA;