import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import frunti from '../assets/furniture_bg-cover.png';

import ProductCard from './ProductCard';
import men1 from '../assets/men1.jpg'
import men2 from '../assets/men2.jpg'
import men3 from '../assets/men3.jpg'
import cake1 from '../assets/cake1.jpg'
import cake2 from '../assets/cake2.jpg'
import cake3 from '../assets/cake3.jpg'
import children1 from '../assets/children1.jpg'
import children2 from '../assets/children2.jpg'
import children3 from '../assets/children3.jpg'
import women1 from '../assets/women1.jpg'
import women2 from '../assets/women2.jpg'
import women3 from '../assets/women3.jpg'
import student1 from '../assets/student1.avif'
import student2 from '../assets/student2.avif'
import student3 from '../assets/students3.avif'

const productArr = {
  Men: [
    { id: 2, productName: 'Men’s Shoes', description: 'Fashion', prices: { promoPrice: '$75.00', actualPrice: '$150.00' }, image: men2 },
    { id: 1, productName: 'Men’s Jacket', description: 'Fashion', prices: { promoPrice: '$50.00', actualPrice: '$100.00' }, image: men1 },
    { id: 3, productName: 'Men’s Watch', description: 'Accessories', prices: { promoPrice: '$120.00', actualPrice: '$200.00' }, image: men3 },
    { id: 1, productName: 'Men’s Jacket', description: 'Fashion', prices: { promoPrice: '$50.00', actualPrice: '$100.00' }, image: men1 },
    { id: 3, productName: 'Men’s Watch', description: 'Accessories', prices: { promoPrice: '$120.00', actualPrice: '$200.00' }, image: men3 },
    { id: 2, productName: 'Men’s Shoes', description: 'Fashion', prices: { promoPrice: '$75.00', actualPrice: '$150.00' }, image: men2 },
  ],
  Women: [
    { id: 2, productName: 'Women’s Handbag', description: 'Accessories', prices: { promoPrice: '$85.00', actualPrice: '$170.00' }, image: women2 },
    { id: 1, productName: 'Women’s Dress', description: 'Fashion', prices: { promoPrice: '$65.00', actualPrice: '$130.00' }, image: women1 },
    { id: 3, productName: 'Women’s Shoes', description: 'Fashion', prices: { promoPrice: '$90.00', actualPrice: '$180.00' }, image: women3 },
    { id: 1, productName: 'Women’s Dress', description: 'Fashion', prices: { promoPrice: '$65.00', actualPrice: '$130.00' }, image: women1 },
    { id: 3, productName: 'Women’s Shoes', description: 'Fashion', prices: { promoPrice: '$90.00', actualPrice: '$180.00' }, image: women3 },
    // { id: 2, productName: 'Women’s Handbag', description: 'Accessories', prices: { promoPrice: '$85.00', actualPrice: '$170.00' }, image: women2 },
  ],
  Children: [
    { id: 2, productName: 'Children’s Clothes', description: 'Fashion', prices: { promoPrice: '$30.00', actualPrice: '$60.00' }, image: children2 },
    { id: 1, productName: 'Children’s Toy', description: 'Toys', prices: { promoPrice: '$20.00', actualPrice: '$40.00' }, image: children1 },
    { id: 3, productName: 'Children’s Book', description: 'Books', prices: { promoPrice: '$15.00', actualPrice: '$30.00' }, image: children3 },
    { id: 1, productName: 'Children’s Toy', description: 'Toys', prices: { promoPrice: '$20.00', actualPrice: '$40.00' }, image: children1 },
    { id: 3, productName: 'Children’s Book', description: 'Books', prices: { promoPrice: '$15.00', actualPrice: '$30.00' }, image: children3 },
    { id: 2, productName: 'Children’s Clothes', description: 'Fashion', prices: { promoPrice: '$30.00', actualPrice: '$60.00' }, image: children2 },
  ],
  Student: [
    { id: 2, productName: 'Children’s Clothes',description: 'Fashion', prices: { promoPrice: '$30.00', actualPrice: '$60.00' }, image: student2 },
    { id: 1, productName: 'Children’s Toy', description: 'Toys', prices: { promoPrice: '$20.00', actualPrice: '$40.00' }, image: student1 },
    { id: 3, productName: 'Children’s Book', description: 'Books', prices: { promoPrice: '$15.00',actualPrice: '$30.00' }, image: student3 },
    { id: 1, productName: 'Children’s Toy', description: 'Toys', prices: { promoPrice: '$20.00', actualPrice: '$40.00' }, image: student1 },
    { id: 3, productName: 'Children’s Book', description: 'Books', prices: { promoPrice: '$15.00',actualPrice: '$30.00' }, image: student3 },
    { id: 2, productName: 'Children’s Clothes',description: 'Fashion', prices: { promoPrice: '$30.00', actualPrice: '$60.00' }, image: student2 },
  ],
  Cake: [
    { id: 2, productName: 'Children’s Clothes', description: 'Fashion', prices: { promoPrice: '$30.00', actualPrice: '$60.00' }, image: cake2 },
    { id: 1, productName: 'Children’s Toy', description: 'Toys', prices: { promoPrice: '$20.00', actualPrice: '$40.00' }, image: cake1 },
    { id: 3, productName: 'Children’s Book', description: 'Books', prices: { promoPrice: '$15.00', actualPrice: '$30.00' }, image: cake3 },
    { id: 1, productName: 'Children’s Toy', description: 'Toys', prices: { promoPrice: '$20.00', actualPrice: '$40.00' }, image: cake1 },
    { id: 3, productName: 'Children’s Book', description: 'Books', prices: { promoPrice: '$15.00', actualPrice: '$30.00' }, image: cake3 },
    // { id: 2, productName: 'Children’s Clothes', description: 'Fashion', prices: { promoPrice: '$30.00', actualPrice: '$60.00' }, image: cake2 },
  ],
}

export default function FurnitureProduct( {containerClassName,first,second,setSelectedImage} ) {
 
    const [currentCategory, setCurrentCategory] = useState('Men');
    const [displayedCards, setDisplayedCards] = useState(productArr[currentCategory]);

    React.useEffect(() => {
      setDisplayedCards(productArr[currentCategory]);
    }, [currentCategory]);
    
  
    const listRef = useRef(null);

    const navigate = useNavigate();
  
    const handleCategoryChange = (category) => {
      setCurrentCategory(category);
      const uniqueProducts = [...new Map(productArr[category].map(item => [item.id, item])).values()];
      setDisplayedCards(uniqueProducts); 
    };    
  
    const scrollLeft = () => {
      if (listRef.current) {
        listRef.current.scrollBy({ top: 0, left: -100, behavior: 'smooth' });
      }
    };
  
    const scrollRight = () => {
      if (listRef.current) {
        listRef.current.scrollBy({ top: 0, left: 100, behavior: 'smooth' });
      }
    };
    
    const handleClick = (price) => {
      setSelectedPrice(price);
    };

    return (
      <div className='h-full w-full'>
        <div className={`container h-fit sm:h-[700px] sm:w-[80%] flex flex-col sm:flex-row mx-auto mt-6 ${containerClassName}`}>
          <div className={`aside h-screen sm:h-full w-full sm:w-80 relative ${first}`}>
            <div className='relative z-30 px-5'>
              <p>Furniture</p>
              <span>{displayedCards.length} Items</span>
            </div>
            <img src={frunti} alt="" className='absolute top-0 w-full h-full object-cover object-center z-10' />
          </div>
  
          <div className={`preview h-full sm:w-[calc(100%-320px)] ${second}`}>
            <header className='h-fit sm:h-16 w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-10 justify-center sm:justify-around border-b-[1px]'>
              <h2 className='text-[30px] font-serif'>BestSeller</h2>
              <div ref={listRef} className="listed h-10 w-[70%] sm:w-64 flex items-center justify-around sm:gap-10 overflow-x-hidden">
                {Object.keys(productArr).map((category) => (
                  <p
                    key={category}
                    href="#"
                    onClick={() => handleCategoryChange(category)}
                    className={category === currentCategory ? 'font-bold underline' : 'cursor-pointer'}
                  >
                    {category}
                  </p>
                ))}
              </div>
              <div className="buttons h-10 w-20 flex items-center justify-around">
                <button className='h-[30px] w-[30px] border border-grey-700 grid place-items-center rounded-[50%]' onClick={scrollLeft}>
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                <button className='h-[30px] w-[30px] border border-grey-700 grid place-items-center rounded-[50%]' onClick={scrollRight}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
              </div>
            </header>
  
            <div className="components sm:h-[calc(100%-64px)] w-full sm:w-full grid grid-cols-1 sm:grid-cols-3 items-center justify-center pt-4 gap-1">
            {displayedCards.map((data, index) => (
              <ProductCard
                key={`${currentCategory}-${index}`}
                {...data}
                onClick={() => {
                  setSelectedImage(data);
                  navigate('/shop', { state: { selectedImage: data } });
                  // scrollT
                }}               
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    );
}
