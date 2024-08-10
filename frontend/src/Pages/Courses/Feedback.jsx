import React, {useState} from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import avatar1 from '../../assets/images/patient-avatar.png'
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'
import { formateDate } from '../../utils/formateDate'


const Feedback = () => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false)

    return (
       <div>
      <div className="mb-[50px]">
          <h4 className="text-[20px] leading-[30px] font-semibold text-headingColor mb-[30px] ">
              All reviews (272)
              </h4>
  
          <div className="flex justify-between gap-10 mb-[30px]">
              <div className="flex gap-3">
                  <figure className='w-10 h-10 rounded-full'>
                      <img className='w-full' src={avatar} alt="" />
                  </figure>
  
                  <div>
                      <h5 className='text-[16px] leading-6 text-primaryColor font-semibold'>Ali ahmed</h5>
                      <p className="text-[14px] leading-6 text-textColor">{formateDate('06-14-2024')}</p>
                      <p className="text__para mt-3 font-medium text-[15px]">Good services, highly recommended 👍❤️</p>
                      </div>
              </div>
              <div className="flex gap-1">
                  {[ ...Array(5).keys()].map((_,index)=><AiFillStar key={index} color='#FEB60D' />)}
              </div>
          </div>
  
          <div className="flex justify-between gap-10 mb-[30px]">
              <div className="flex gap-3">
                  <figure className='w-10 h-10 rounded-full'>
                      <img className='w-full' src={avatar1} alt="" />
                  </figure>
  
                  <div>
                      <h5 className='text-[16px] leading-6 text-primaryColor font-semibold'>Abhishek Murugan</h5>
                      <p className="text-[14px] leading-6 text-textColor">{formateDate('07-14-2024')}</p>
                      <p className="text__para mt-3 font-medium text-[15px]">Jhakaas👍❤️</p>
                      </div>
              </div>
              <div className="flex gap-1">
                  {[ ...Array(4).keys()].map((_,index)=><AiFillStar key={index} color='#FEB60D' />)}
              </div>
          </div>
      </div>
  
      {!showFeedbackForm && <div className="text-center"><button className="border border-gray-300 text-black font-bold py-1.5 px-5 rounded-md lg:ml-32 lg:ml-7 lg:shadow xl:ml-36 hover:bg-green-300 hover:border-green-500 duration-500 mr-5 lg:hover:scale-105  mb-16 px-12" onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button></div>}
  
      {showFeedbackForm && <FeedbackForm/>}
  
    </div>
    )
}

export default Feedback