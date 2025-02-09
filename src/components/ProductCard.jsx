import React from 'react'

const ProductCard = ({image,productName,description,prices, onImageClick,onClick }) => {
  return (
    <div 
      className='w-full  flex flex-col items-center justify-between'
      onClick={onClick}
    >
      <div className="img h-[180px] w-full overflow-y-hidden" onClick={onImageClick}>
        <img src={image} alt={productName} style={{objectFit: 'cover', objectPosition: 'top', height: '100%', width:'100%', cursor:'pointer'}} />
      </div>
      <div className="text h-[80px] w-full text-center">
        <h2 className='font-medium'>{productName}</h2>
        <p>{description}</p>
        <p className='font-medium text-sm'><span className='text-gray-400'>{prices.actualPrice}</span> {""}<span className='text-green-400'>{prices.promoPrice}</span></p>
      </div>
     
    </div>
  )
}

export default ProductCard