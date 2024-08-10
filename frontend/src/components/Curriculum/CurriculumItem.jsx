import React, { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

const CurriculumItem = ({item}) => {
    const [isOpen,setIsOpen] = useState(false)

    const toggleAccordion = () => {
      setIsOpen(!isOpen)
    }
     
    const getYouTubeVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
        const matches = url.match(regex);
        return matches ? matches[1] : null;
    }

return (
    <div className='p-3 lg:p-5 rounded-[17px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer'>
    <div className="flex items-center justify-between gap-5" onClick={toggleAccordion}>
        <h5 className='text-[12px] leading-7 lg:text-[16px] lg:leading-8 text-headingColor'>{item.question}</h5>
        <div className={`${isOpen && 'bg-primaryColor text-white border-none'}w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>
        {isOpen ? (
            <AiOutlineArrowUp />
        ) : (
            <AiOutlineArrowDown />
        )}
        </div>
    </div>

    {isOpen && (
  <div className='mt-4'>
    <h6 className='text-[16px] font-bold'>{item.title}</h6>
    {/* Replace video tag with iframe for YouTube video */}
    <iframe 
      className='w-full mt-6' 
      width="560" 
      height="315" 
      src={`https://www.youtube.com/embed/${getYouTubeVideoId(item.videoUrl)}`} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
    <p className='text-[14px] leading-6 lg:text-[12px] lg:mt-6 lg:leading-7 font-[400] text-textColor'>{item.content}</p>
    <div className='mt-6 gap-6 '>
      {item.links.map((link, index) => (
        <a key={index} href={link.url} className='text-[black] font-semibold border rounded-md border-grey-300 ml-48  bg-[white] py-2 px-6 text-blue-500 hover:text-[white] hover:bg-[#388E3C] duration-500'>{link.text}</a>
      ))}
    </div>
  </div>
)}
</div>
)
}

export default CurriculumItem