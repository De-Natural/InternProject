import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import page1 from '../assets/shop-hero-3-product-slide-2.png'
import page2 from '../assets/Most-popular-2.png'

import { Navigation, Pagination } from 'swiper/modules';

export default function StartNow() {

   const pages = [page1, page2]
  return (
    <div className='h-full w-full flex flex-col items-center justify-center relative'>
      <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className=" h-[100%] w-full"
    >
      <SwiperSlide><img src={page1} alt="" style={{height: '100%',width:'100%'}} /></SwiperSlide>
      <SwiperSlide><img src={page2} alt="" style={{width:'100%', height: '100%'}} /></SwiperSlide>

    </Swiper>
       <div className="discription h-60 w-[60%] absolute top-30 z-20 flex flex-col items-center justify-around">
        <h2 className='text-5xl text-white uppercase font-semibold'>groceries delivery</h2>
        <p className=' text-white text-center font-sans'>We know how objects will act, but things on a small scale just do not act that way.</p>
        <button className='bg-green-600 text-white h-8 w-36 cursor-pointer rounded'>Start Now</button>
       </div>
      
    </div>
  )
}
