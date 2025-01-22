import React, { useState } from 'react'
import beque1 from '../assets/b1.png'
import beque2 from '../assets/b2.png'
import beque3 from '../assets/b3.png'
import beque4 from '../assets/b4.png'
import beque5 from '../assets/b5.png'
import beque6 from '../assets/b6.png'
import beque7 from '../assets/b7.png'
import beque8 from '../assets/b8.png'
import Icon1 from '../assets/Icon-1.png'
import Icon2 from '../assets/Icon-2.png'
import Icon3 from '../assets/Icon-3.png'
import Icon4 from '../assets/Icon-4.png'
import Icon5 from '../assets/Icon-5.png'
import Icon6 from '../assets/Icon-6.png'
import ProductCard from './ProductCard'

const productArr = {
     
      Children: [
        { id: 2, productName: 'Children’s Clothes', description: 'Fashion', prices: { promoPrice: '$30.00', actualPrice: '$60.00' }, image: beque1 },
        { id: 1, productName: 'Children’s Toy', description: 'Toys', prices: { promoPrice: '$20.00', actualPrice: '$40.00' }, image: beque2 },
        { id: 3, productName: 'Children’s Book', description: 'Books', prices: { promoPrice: '$15.00', actualPrice: '$30.00' }, image: beque3 },
        { id: 1, productName: 'Children’s Toy', description: 'Toys', prices: { promoPrice: '$20.00', actualPrice: '$40.00' }, image: beque4 },
        { id: 3, productName: 'Children’s Book', description: 'Books', prices: { promoPrice: '$15.00', actualPrice: '$30.00' }, image: beque5 },
        { id: 2, productName: 'Children’s Clothes', description: 'Fashion', prices: { promoPrice: '$30.00', actualPrice: '$60.00' }, image: beque6 },
        { id: 2, productName: 'Children’s Clothes', description: 'Fashion', prices: { promoPrice: '$30.00', actualPrice: '$60.00' }, image: beque7 },
        { id: 2, productName: 'Children’s Clothes', description: 'Fashion', prices: { promoPrice: '$30.00', actualPrice: '$60.00' }, image: beque8 },
      ],
}

export default function SpoonDen() {
    // const [currentCategory, setCurrentCategory] = useState('Children');
    const [displayedCards, setDisplayedCards] = useState(productArr['Children']);

    // React.useEffect(() => {
    //   setDisplayedCards(productArr[currentCategory]);
    // }, [currentCategory]);
    
  
    // const listRef = useRef(null);

    // const navigate = useNavigate();
  
    // const handleCategoryChange = (category) => {
    //   setCurrentCategory(category);
    //   const uniqueProducts = [...new Map(productArr[category].map(item => [item.id, item])).values()];
    //   setDisplayedCards(uniqueProducts); 
    // }

  return (
    <div className='h-full w-full flex flex-col items-center justify-center gap-4'>
      <p className='text-xl font-semibold translate-x-[-400px] uppercase'>bestseller product</p>
      <div className="plane h-[600px] w-4/5 grid grid-cols-4 gap-3 p-2">
       
        {displayedCards?.map((data, index) => (
            <ProductCard
            key={`${index}`}
            {...data}
                            
            />
        ))}
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
