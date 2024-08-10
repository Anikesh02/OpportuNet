import React, { useState } from 'react'
import DSA from '../../components/Items/dsa'
import SDE from '../../components/Items/SDE'
import System from '../../components/Items/System'
import Sidebar from '../../components/Sidebar/Sidebar'

const Training = () => {

    const [activeComponent, setActiveComponent] = useState('DSA')  

  const renderComponent = () => {
    switch (activeComponent) {
      case 'DSA':
        return <DSA />
      case 'System':
        return <System/>
      case 'SDE':
        return <SDE />
      default:
        return <DSA />
    }
  }


  return (
    <>
     <div className='flex flex-col lg:flex-row'>
      <Sidebar setActiveComponent={setActiveComponent} />  
      <div className={`content ${activeComponent === 'DSA' ? 'active' : ''} w-full lg:w-3/4 px-5 h-[100svh] overflow-y-scroll`} style={{ backgroundColor: activeComponent === 'DSA' ? 'white' : 'inherit' }}
      >
        {renderComponent()}  
      </div>
    </div>
    </>
  )
}

export default Training