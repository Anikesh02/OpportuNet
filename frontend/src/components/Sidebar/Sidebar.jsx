import React from 'react';
import './sidebar.css';

const Sidebar = ({ setActiveComponent }) => {

    const [activeItem, setActiveItem] = React.useState(null); 

  const handleItemClick = (item) => {
    setActiveComponent(item);
    setActiveItem(item); 
  };


  return (
    <div className="text-white bg-green-600 w-full lg:w-1/4 lg:h-[100svh] px-5 py-5"> 
    <ul className='mt-24 flex flex-col gap-y-5'>
      <li 
        onClick={() => handleItemClick('DSA')} 
        className={`${activeItem === 'DSA' ? 'underline underline-offset-4' : ''} cursor-pointer py-3 border border-white px-5 rounded-lg`}
      >
        DSA Sheet
      </li>  
      <li 
        onClick={() => handleItemClick('System')} 
        className={`${activeItem === 'System' ? 'underline underline-offset-4' : ''} cursor-pointer py-3 border border-white px-5 rounded-lg`}
      >
        System Design
      </li>  
      <li 
        onClick={() => handleItemClick('SDE')} 
        className={`${activeItem === 'SDE' ? 'underline underline-offset-4' : ''} cursor-pointer py-3 border border-white px-5 rounded-lg`}
      >
        SDE Core Sheet
      </li>  
    </ul>
  </div>
  )
}

export default Sidebar