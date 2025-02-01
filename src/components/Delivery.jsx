import React from 'react'
import okada from '../assets/Most-popular-okada.png'
import board from '../assets/board.png'
import Que1 from '../assets/Que1.png'
import Que2 from '../assets/Que2.png'
import Que3 from '../assets/Que3.png'
import Que4 from '../assets/Que4.png'
import meat from '../assets/Most-popular-dish.png'

export default function Delivery() {
  return (
    <div className='h-fit w-full flex items-center justify-center'>
      <div className="containing h-[680px] w-[80%]">
        <main className='main h-[550px] w-full flex'>
          <div className="bike h-full w-[780px]">
            <img className='h-full w-full object-center' src={okada} alt="" />
          </div>
          <div className="board h-full w-[calc(100%-780px)] bg-[#FAFAFA] flex flex-col gap-2">
            {/* <img className='h-full w-full object-center' src={board} alt="" /> */}
            <div className="div h-40 w-full flex flex-col text-center gap-4">
              <h2 className='text-2xl font-medium'>Most popular</h2>
              <p className='text-sm'>We focus on ergonomics and meeting 
                  you where you work. It's only a 
                  keystroke away.
                </p>
            </div>
            <div className="div h-52 w-full flex flex-col"><img className='h-full w-full' src={meat} alt="" /></div>
            <div className="div h-40 w-full flex flex-col items-center justify-center">
              <p className='text-sm font-medium'>English Department</p>
              <p className='text-[10px] flex gap-1'><span className='text-blue-400'>$59.8</span><span>$5.89</span></p>
            </div>
          </div>
        </main>
        <figure className='figure h-[calc(100%-550px)] w-ful flex items-center justify-around'>
          <div className="num h-24 w-48">
            <img className='h-full w-full object-contain object-center' src={Que1} alt="" />
          </div>
          <div className="num h-24 w-48">
            <img className='h-full w-full object-contain object-center' src={Que2} alt="" />
          </div>
          <div className="num h-24 w-48">
            <img className='h-full w-full object-contain object-center' src={Que3} alt="" />
          </div>
          <div className="num h-24 w-48">
            <img className='h-full w-full object-contain object-center' src={Que4} alt="" />
          </div>
        </figure>
      </div>
    </div>
  )
}
