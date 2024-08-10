import React from 'react'
import { HiStar } from 'react-icons/hi'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import profile1 from './assets/images/people1.png'
import profile2 from './assets/images/people2.png'
import profile3 from './assets/images/people3.png'
import './Testimonial.css'


const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px] py-35'>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}} breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }}
    >
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3 ">
                    <div className="flex items-center gap-[13px]">
                        <img src={profile3} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Isha Gupta</h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken medical services from them. They treat so well and they are providing the best medical services.</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={profile1} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Muhibur Rahman</h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken medical services from them. They treat so well and they are providing the best medical services.</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={profile2} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Muhibur Rahman</h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken medical services from them. They treat so well and they are providing the best medical services.</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={profile3} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Muhibur Rahman</h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] sm:text-[18px] sm:leading-7 mt-3; '>I have taken medical services from them. They treat so well and they are providing the best medical services.</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={profile2} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Muhibur Rahman</h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken medical services from them. They treat so well and they are providing the best medical services.</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={profile3} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Muhibur Rahman</h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                                <HiStar className='text-[#FEB60D] w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>I have taken medical services from them. They treat so well and they are providing the best medical services.</p>
                </div>
            </SwiperSlide>
            

        </Swiper>

    </div>
  )
}

export default Testimonial