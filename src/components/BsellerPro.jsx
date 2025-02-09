import React from 'react'
import light1 from '../assets/BestSeller-biscuit.png';
import light2 from '../assets/BestSeller-bottle.png';
import light3 from '../assets/BestSeller-jug.png';
import light4 from '../assets/BestSeller-pan.png';
import Icon1 from '../assets/Icon-1.png';
import Icon2 from '../assets/Icon-2.png';
import Icon3 from '../assets/Icon-3.png';
import Icon4 from '../assets/Icon-4.png';
import Icon5 from '../assets/Icon-5.png';
import Icon6 from '../assets/Icon-6.png';

export default function BsellerPro() {
  return (
    <div className='iu h-screen w-full flex flex-col items-center justify-around bg-[#FAFAFA]'>
        <h2 className='h2 text-3xl font-medium ml-4 lg:translate-x-[-350px]'>Best Seller Product</h2>
        <div className="h-fit mb-4 lg:h-[400px] w-3/4 flex-col flex lg:flex-row items-center justify-around">
          <div className="h-[360px] w-[210px] flex flex-col items-center justify-around gap-2">
            <div className="h-52 w-full flex flex-col text-center gap-4">
            <img className='h-full w-full' src={light1} alt="" />
            </div>
          
            <div className="div h-28 w-full flex flex-col items-center justify-around ">
              <p className='text-base font-semibold capitalize'>graphic designer</p>
              <p className='text-sm '>English Department</p>
              <p className='text-[10px] flex gap-1'><span className='text-blue-400'>$59.8</span><span>$5.89</span></p>
            </div>
          </div>

          <div className="card h-[360px] w-[210px] flex flex-col items-center justify-around gap-2">
            <div className="div h-52 w-full flex flex-col text-center gap-4">
            <img className='h-full w-full' src={light2} alt="" />
            </div>
          
            <div className="div h-28 w-full flex flex-col items-center justify-around ">
              <p className='text-base font-semibold capitalize'>graphic designer</p>
              <p className='text-sm '>English Department</p>
              <p className='text-[10px] flex gap-1'><span className='text-blue-400'>$59.8</span><span>$5.89</span></p>
            </div>
          </div>

          <div className="card h-[360px] w-[210px] flex flex-col items-center justify-around gap-2">
            <div className="div h-52 w-full flex flex-col text-center gap-4">
            <img className='h-full w-full' src={light3} alt="" />
            </div>
          
            <div className="div h-28 w-full flex flex-col items-center justify-around ">
              <p className='text-base font-semibold capitalize'>graphic designer</p>
              <p className='text-sm '>English Department</p>
              <p className='text-[10px] flex gap-1'><span className='text-blue-400'>$59.8</span><span>$5.89</span></p>
            </div>
          </div>

          <div className="card h-[360px] w-[210px] flex flex-col items-center justify-around gap-2">
            <div className="div h-52 w-full flex flex-col text-center gap-4">
            <img className='h-full w-full' src={light4} alt="" />
            </div>
          
            <div className="div h-28 w-full flex flex-col items-center justify-around ">
              <p className='text-base font-semibold capitalize'>graphic designer</p>
              <p className='text-sm '>English Department</p>
              <p className='text-[10px] flex gap-1'><span className='text-blue-400'>$59.8</span><span>$5.89</span></p>
            </div>
          </div>
        </div>
        <div className="h-fit lg:h-[120px] w-[80%] flex flex-col lg:flex-row items-center justify-around gap-5">
            <div className="h-[100px] w-[200px]"><img className='object-contain h-full w-full' src={Icon1} alt="" /></div>
            <div className="h-[100px] w-[200px]"><img className='object-contain h-full w-full' src={Icon2} alt="" /></div>
            <div className="h-[100px] w-[200px]"><img className='object-contain h-full w-full' src={Icon3} alt="" /></div>
            <div className="h-[100px] w-[200px]"><img className='object-contain h-full w-full' src={Icon4} alt="" /></div>
            <div className="h-[100px] w-[200px]"><img className='object-contain h-full w-full' src={Icon5} alt="" /></div>
            <div className="h-[100px] w-[200px]"><img className='object-contain h-full w-full' src={Icon6} alt="" /></div>
        </div>
    </div>
  )
}
