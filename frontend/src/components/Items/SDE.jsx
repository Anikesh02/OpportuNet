import React, { useState } from 'react';
import { sdeData } from '../../assets/data/sde';
import SDEitem from './SDEitem';


const SDE = () => {
  return (
    <ul className="mt-[96px]">
        {sdeData.map((item,index)=>(
        <SDEitem item={item} key={index}/>
        ))}
    </ul>
  )
}

export default SDE;