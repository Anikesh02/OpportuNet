import React, { useState } from 'react';
import { systemData } from '../../assets/data/system';
import SystemItem from './SystemItem';


const System = () => {
  return (
    <ul className="mt-[96px]">
        {systemData.map((item,index)=>(
        <SystemItem item={item} key={index}/>
        ))}
    </ul>
  )
}

export default System;