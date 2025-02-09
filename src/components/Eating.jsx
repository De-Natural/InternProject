import React from 'react'
import popular from '../assets/Most-popular-2.png';
import pop from '../assets/Most-popular-dish-2.png'
import Vector from '../assets/Vector.svg'
import Color from '../assets/product-colors.png'

export const Eating = () => {
  return (
    <div className='eat h-screen w-full mt-20'>
      <div className='h-fit lg:h-full w-11/12 mx-auto xl:w-8/12 px-2 py-4 flex flex-col lg:flex-row'>
        <div className="post h-full w-[500px] items-center bg-[#FAFAFA] flex flex-col gap-2">
  
          <div className="div h-40 w-4/5 flex flex-col text-center gap-4">
            <h2 className='text-2xl font-medium'>Most popular</h2>
            <p className='text-sm'>We focus on ergonomics and meeting 
                you where you work. It's only a 
                keystroke away.
              </p>
            </div>
            <div className="div h-52 w-4/5 flex flex-col"><img className='h-full w-full' src={pop} alt="" /></div>
            <div className="div h-40 w-4/5 flex flex-col items-center justify-center gap-4">
              <p className='text-sm font-medium'>English Department</p>
              <p className='text-[10px] flex gap-1'><span className='h-3 w-3'><img className='h-full w-full cursor-pointer' src={Vector} alt="" /></span><span>15 Sales</span></p>
              <p className='text-[10px] flex gap-1'><span className='text-blue-400'>$59.8</span><span>$5.89</span></p>
              <div className='h-4 w-20'><img className='h-full w-full' src={Color} alt="" /></div>
            </div>
          </div>
        <div className="chop h-[280px] lg:h-full w-full">
          <img className='h-full w-full object-[100%]' src={popular} alt="" />
        </div>
      </div>
    </div>
  )
}
