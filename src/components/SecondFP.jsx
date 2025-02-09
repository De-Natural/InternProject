import React from 'react';
import FurnitureProduct from './FurnitureProduct';
import coverBg from '../assets/furniture_bg-cover-2.png';

export default function SecondFP() {
  console.log("Image Path:", coverBg);
  return (
    <div className="h-fit lg:h-full w-full">
      <FurnitureProduct 
        first="order-2" 
        second="order-1"
        ImageSrc={coverBg}
        
      />
    </div>
  );
}
