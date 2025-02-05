import React from 'react'
import item1 from '../assets/shop_card-item.png';
import item2 from '../assets/shop_card-item (1).png';
import item3 from '../assets/shop_card-item (2).png';

export default function DeThree() {

  
  return (
    <div className="below h-fit mb-4 sm:h-[250px] w-full bg-[antiquewhite]">
      <div className="h-fit gap-4 sm:h-[220px] w-[80%] mx-auto flex-wrap sm:flex items-center justify-around mt-4">
        <div className="item sm:h-[180px] w-full sm:w-[250px]"><img src={item1} alt="" style={{objectFit: 'contain'}} /></div>
        <div className="item sm:h-[180px] w-full sm:w-[250px]"><img src={item2} alt="" style={{objectFit: 'contain'}} /></div>
        <div className="item sm:h-[180px] w-full sm:w-[250px]"><img src={item3} alt="" style={{objectFit: 'contain'}} /></div>
      </div>
      {/* style={{backgroundImage: `url(${frunti})}`, backgroundPosition: 'center', backgroundSize: 'contain'}} */}
   </div>
  )
}
