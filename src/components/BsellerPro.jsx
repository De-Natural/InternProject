import React from 'react'
import light1 from '../assets/light1.png'
import light2 from '../assets/light2.png'
import light3 from '../assets/light3.png'
import light4 from '../assets/light4.png'
import Icon1 from '../assets/Icon-1.png'
import Icon2 from '../assets/Icon-2.png'
import Icon3 from '../assets/Icon-3.png'
import Icon4 from '../assets/Icon-4.png'
import Icon5 from '../assets/Icon-5.png'
import Icon6 from '../assets/Icon-6.png'

export default function BsellerPro() {
  return (
    <div className='iu h-screen w-full flex flex-col items-center justify-around'>
        <h2 className='h2 text-3xl font-medium translate-x-[-450px]'>Best Seller Product</h2>
        <div className=" bottle h-[400px] w-[80%] flex items-center justify-around">
            <div className="card h-[360px] w-[210px] border border-gray-200"><img src={light1} alt="" /></div>
            <div className="card h-[360px] w-[210px] border border-gray-200"><img src={light2} alt="" /></div>
            <div className="card h-[360px] w-[210px] border border-gray-200"><img src={light3} alt="" /></div>
            <div className="card h-[360px] w-[210px] border border-gray-200"><img src={light4} alt="" /></div>
        </div>
        <div className="svg h-[120px] w-[80%] flex items-center justify-around">
            <div className="icon h-[100px] w-[200px]"><img src={Icon1} alt="" /></div>
            <div className="icon h-[100px] w-[200px]"><img src={Icon2} alt="" /></div>
            <div className="icon h-[100px] w-[200px]"><img src={Icon3} alt="" /></div>
            <div className="icon h-[100px] w-[200px]"><img src={Icon4} alt="" /></div>
            <div className="icon h-[100px] w-[200px]"><img src={Icon5} alt="" /></div>
            <div className="icon h-[100px] w-[200px]"><img src={Icon6} alt="" /></div>
        </div>
    </div>
  )
}
