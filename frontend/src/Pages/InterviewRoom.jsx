import React from 'react'

const InterviewRoom = () => {
    return (
      <div style={{ position: 'relative', marginTop: '46px' }}>
      <iframe 
          src="https://code-sync-live.vercel.app/" 
          style={{ width: '100%', height: '95vh', border: 'none' }} 
          title="Interview Room"
      />
      <div style={{ position: 'absolute', top: '150px', left: '1000px', color: 'white', zIndex: 1 , fontSize: '30px'}}>
          By <span className='text-[#1ddb6f]'>opportuNet</span>
      </div>
  </div>
      )
}

export default InterviewRoom
