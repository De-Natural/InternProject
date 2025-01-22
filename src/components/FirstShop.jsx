import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import productColor from '../assets/product-colors.png'
import childMake from '../assets/children1.jpg'
import childlike from '../assets/cake1.jpg'

export default function FirstShop({ incrementIconCount, selectedImage, selectedPrice  }) {

  const location = useLocation();
  const [mainImage, setMainImage] = useState(location.state?.selectedImage || defaultImage);


console.log(location.state?.selectedImage)
  // Function to handle image click
  const handleImageClick = (src) => {
    setMainImage(src);
  }

  React.useEffect(() => {
    if (location.state?.selectedImage) {
      setMainImage(location.state.selectedImage);
    }
  }, [location.state?.selectedImage]);  

  return (
    <div className='h-screen w-full'>
      <nav className='h-10 w-full'>
        <div className="beside h-8 w-32 ml-5 flex items-center justify-evenly text-md">
          <a href="#">Home</a>
          <i className="text-xl fa fa-angle-right" aria-hidden="true"></i>
          <a href='#'>Shop</a>
        </div>
      </nav>
      <div className=" h-[calc(100%-40px)] w-full flex items-center gap-5">
         <div className="picture h-full w-[50%] flex flex-col gap-4">
         <div className="img h-[75%] w-full relative">
            <i
              className="text-4xl top-2/4 left-5 cursor-pointer absolute fa fa-angle-left"
              aria-hidden="true"
            ></i>
            <img src={mainImage?.image || ''} alt="Main Display" className="h-full w-full object-cover object-top" />
            <i
              className="text-4xl top-2/4 right-5 cursor-pointer absolute fa fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
      <div className="small h-36 w-full flex gap-16">
        <div className="items h-full w-36">
          <img
            className="h-full w-full cursor-pointer"
            src={childMake}
            alt="Child Make"
            onClick={() => handleImageClick(childMake)}
          />
        </div>
        <div className="items h-full w-36">
          <img
            className="h-full w-full cursor-pointer"
            src={childlike}
            alt="Child Like"
            onClick={() => handleImageClick(childlike)}
          />
        </div>
      </div>
    </div>
        <div className='details h-full w-2/5 flex flex-col items-left gap-5 p-4'>
          <p>Floating Phone</p>
          <p><span>10 reviews</span></p>
          <mark className='h-28 w-auto flex flex-col gap-3 bg-transparent'>
            <input 
              className="h-10 w-40 border indent-2 outline-none"
              type="text"
              value={mainImage?.prices?.promoPrice || mainImage?.prices?.actualPrice} // Dynamically reflect the price
              readOnly // Make the field read-only if it's not meant to be edited
            />
            <p>Avaliabilty</p>
          </mark>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut corporis sed dolore! Iusto aliquid aut repellendus rerum. Magni beatae nesciunt earum, temporibus dolores obcaecati asperiores sed dignissimos exercitationem, tempore dolorum?</p>
          <div className="circle h-10 w-48">
            <img className='object-contain w-full' src={productColor} alt="" />
          </div>
          <div className="line h-20 w-[50%] flex items-center justify-around">
            <button className='h-10 w-40 cursor-pointer rounded-xl bg-blue-700 text-white'>Select Option</button>
            <div className="icon h-8 w-[30%] sm:w-[100px] flex items-center justify-around">
              <i className="text-xl cursor-pointer fa fa-search" aria-hidden="true" onClick={()=>incrementIconCount('search')}></i>
              <i className="text-xl cursor-pointer fa fa-shopping-cart" aria-hidden="true" onClick={()=>incrementIconCount('cart')}></i>
              <i className="text-xl cursor-pointer fa fa-heart" aria-hidden="true" onClick={()=>incrementIconCount('heart')}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
