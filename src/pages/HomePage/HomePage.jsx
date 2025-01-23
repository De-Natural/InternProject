import React from 'react';
import Nav from '../../components/Nav';
import StartNow from '../../components/StartNow';
import DeThree from '../../components/DeThree';
import FurnitureProduct from '../../components/FurnitureProduct';
import Delivery from '../../components/Delivery';
import SecondFP from '../../components/SecondFP';
import { Eating } from '../../components/Eating';
import BsellerPro from '../../components/BsellerPro';
import FeaturePost from '../../components/FeaturePost';
import Footer from '../../components/Footer';

function HomePage({setSelectedImage, setSelectedPrice, setSelectedProduct }) {
  return (
    <div className='h-screen border w-full'>
      <Nav />
      <StartNow />
      <DeThree />
      <FurnitureProduct 
        setSelectedImage={setSelectedImage} 
        setSelectedProduct={setSelectedProduct}
        setSelectedPrice={setSelectedPrice}
      />
      <Delivery />
      {/* <SecondFP /> */}
      <Eating />
      <BsellerPro />
      <FeaturePost />
      <Footer />
    </div>
  );
}

export default HomePage;
