import React from 'react'
import okada from '../assets/Most-popular-okada.png'
import meat from '../assets/Most-popular-dish.png'

export default function Delivery() {
  return (
    <div className='h-fit w-full flex items-center justify-center'>
      <div className="containing h-fit gap-4 md:h-[680px] w-[80%] flex flex-col items-center justify-center">
        <main className='main h-fit gap-4 md:h-[550px] w-3/4 flex flex-col items-center justify-center md:flex-row'>
          <div className="bike h-full w-full md:w-[780px]">
            <img className='h-full w-full object-center' src={okada} alt="" />
          </div>
          <div className="board h-full w-2/5 bg-[#FAFAFA] flex flex-col gap-2">
            {/* <img className='h-full w-full object-center' src={board} alt="" /> */}
            <div className="div h-40 w-full flex flex-col text-center gap-4">
              <h2 className='text-2xl font-medium'>Most popular</h2>
              <p className='text-sm'>We focus on ergonomics and meeting 
                  you where you work. It's only a 
                  keystroke away.
                </p>
            </div>
            <div className="div h-52 w-full flex flex-col"><img className='h-full w-full object-contain' src={meat} alt="" /></div>
            <div className="div h-40 w-full flex flex-col items-center justify-center">
              <p className='text-sm font-medium'>English Department</p>
              <p className='text-[10px] flex gap-1'><span className='text-blue-400'>$59.8</span><span>$5.89</span></p>
            </div>
          </div>
        </main>
        <figure className='figure h-fit sm:h-[calc(100%-550px)] w-fit sm:w-full flex-wrap m-auto items-center justify-center sm:flex'>
          <div className="num h-24 w-48 flex items-center justify-center gap-2">
            <span className="font-bold text-[25px] text-red-600 mt-[-20px]">1.</span>
            <div className="sample h-20 w-40">
              <h2 className="text-base font-medium">Ease to use</h2>
              <p className="text-[12px]">Things on a very small that you have any direct</p>
            </div>
          </div>

          <div className="num h-24 w-48 flex items-center justify-center gap-2">
            <span className="font-bold text-[25px] text-red-600 mt-[-20px]">2.</span>
            <div className="sample h-20 w-40">
              <h2 className="text-base font-medium">Ease to use</h2>
              <p className="text-[12px]">Things on a very small that you have any direct</p>
            </div>
          </div>

          <div className="num h-24 w-48 flex items-center justify-center gap-2">
            <span className="font-bold text-[25px] text-red-600 mt-[-20px]">3.</span>
            <div className="sample h-20 w-40">
              <h2 className="text-base font-medium">Ease to use</h2>
              <p className="text-[12px]">Things on a very small that you have any direct</p>
            </div>
          </div>

          <div className="num h-24 w-48 flex items-center justify-center gap-2">
            <span className="font-bold text-[25px] text-red-600 mt-[-20px]">4.</span>
            <div className="sample h-20 w-40">
              <h2 className="text-base font-medium">Ease to use</h2>
              <p className="text-[12px]">Things on a very small that you have any direct</p>
            </div>
          </div>
        </figure>
      </div>
    </div>
  )
}
// className='h-full w-11/12 mx-auto xl:w-8/12 px-2 py-4 flex'