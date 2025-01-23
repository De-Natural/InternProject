import React, { useState } from 'react';
import cake1 from '../assets/cake1.jpg';

export default function Description() {
 
  const [activeTab, setActiveTab] = useState('Description');

  const [reviewCount, setReviewCount] = useState(0);

  
  const content = {
    Description: {
      description: "This is a delicious cake made with the finest ingredients, perfect for celebrations and you are very much sure of getting your taste.",
      writing: "Enjoy every bite of this mouthwatering treat, handcrafted with care and precision and you will never regrets your choice."
    },
    "Additional Information": {
      description: "Weight: 2kg, Dimensions: 10x10 inches, Ingredients: Flour, sugar, eggs, butter, vanilla and more other flavour and yeast",
      writing: "This product is delivered fresh and can be stored and ganish perfectly in a refrigerator for up to 3 days."
    },
    Reviews: {
      description: "No reviews available yet. Be the first to review this product!",
      writing: "Customer reviews will appear here once added. Share your thoughts about this amazing cake."
    }
  };

  // Function to handle tab switching
  const handleTabClick = (tab) => {
    if (tab === 'Reviews') {
      setReviewCount((prevCount) => prevCount + 1);
    }
    setActiveTab(tab);
  };

  return (
    <div className=" h-full w-full flex flex-col items-center justify-center gap-5">
      {/* Navigation */}
      <div className="head h-16 w-2/5 flex items-center justify-evenly border-b border-gray-300">
        <p
          className={`cursor-pointer ${activeTab === 'Description' ? 'font-semibold underline' : ''}`}
          onClick={() => handleTabClick('Description')}
        >
          Description
        </p>
        <p
          className={`cursor-pointer ${activeTab === 'Additional Information' ? 'font-semibold underline' : ''}`}
          onClick={() => handleTabClick('Additional Information')}
        >
          Additional Information
        </p>
        <p
          className={`cursor-pointer ${activeTab === 'Reviews' ? 'font-semibold underline' : ''}`}
          onClick={() => handleTabClick('Reviews')}
        >
          Reviews ({reviewCount})
        </p>
      </div>

      
      <div className="pull h-4/5 w-4/5 flex items-center justify-around">
      
        <div className="pullPic h-4/5 w-96">
          <img className="h-full w-full object-[contain, 100%]" src={cake1} alt="Cake" />
        </div>

       
        <div className="description h-4/5 w-96 p-4">
          <p className='text-xl'>{content[activeTab].description}</p>
        </div>

        
        <div className="writing h-4/5 w-96 p-4">
          <p className='text-xl'>{content[activeTab].writing}</p>
        </div>
      </div>
    </div>
  );
}
