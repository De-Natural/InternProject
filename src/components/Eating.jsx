import React from 'react'
import snacks from '../assets/snacks.png';
import popular from '../assets/Most-popular-2.png';

export const Eating = () => {
  return (
    <div className='eat h-screen w-full flex'>
      <div className="post h-full w-[500px]">
        <img className='h-full w-full object-[100%]' src={snacks} alt="" />
      </div>
      <div className="chop h-full w-[calc(100%-500px)]">
        <img className='h-full w-full object-[100%]' src={popular} alt="" />
      </div>
    </div>
  )
}
