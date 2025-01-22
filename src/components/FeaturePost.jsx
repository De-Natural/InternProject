import React from 'react'
import content1 from '../assets/ContentCard (1).png'
import content2 from '../assets/ContentCard (2).png'
import content3 from '../assets/ContentCard (3).png'

export default function FeaturePost() {
  return (
    <div className='fe h-screen w-full flex flex-col items-center gap-5 justify-around'>
        <p className='text-blue-700'>practice Advice</p>
        <h2 className='text-3xl font-semibold'>Featured Post</h2>
        <main className='acc h-[560px] w-[80%] flex items-center justify-around'>
            <div className="postCard h-[520px] w-[350px]">
                <img className='object-[100%] h-full w-full' src={content1} alt="" />
            </div>
            <div className="postCard h-[520px] w-[350px]">
                <img className='object-[100%] h-full w-full' src={content2} alt="" />
            </div>
            <div className="postCard h-[520px] w-[350px]">
                <img className='object-[100%] h-full w-full' src={content3} alt="" />
            </div>
        </main>
    </div>
  )
}
