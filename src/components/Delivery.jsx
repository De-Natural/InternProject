import React from 'react'
import okada from '../assets/Most-popular-okada.png'
import board from '../assets/board.png'
import Que1 from '../assets/Que1.png'
import Que2 from '../assets/Que2.png'
import Que3 from '../assets/Que3.png'
import Que4 from '../assets/Que4.png'

export default function Delivery() {
  return (
    <div className='md :h-full w-full flex items-center justify-center'>
      <div className="containing h-[680px] w-[80%]">
        <main className='main h-[550px] w-full flex'>
          <div className="bike h-full w-[780px]">
            <img className='h-full w-full object-center' src={okada} alt="" />
          </div>
          <div className="board h-full w-[calc(100%-780px)] ">
            <img className='h-full w-full object-center' src={board} alt="" />
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
