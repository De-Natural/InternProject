import React, {useState} from 'react'
import Nav from '../../components/Nav'
import FirstShop from '../../components/FirstShop'
import Description from '../../components/Description';
import SpoonDen from '../../components/SpoonDen';
import FooterSlhop from '../../components/FooterSlhop';

function Shop({ selectedImage, selectedPrice }) {
  const [iconCounts, setIconCounts] = useState({
      search: 0,
      cart: 0,
      heart: 0,
    });
  
    const incrementIconCount = (iconName) => {
      setIconCounts((prevCounts) => ({
        ...prevCounts,
        [iconName]: prevCounts[iconName] + 1,
      }));
    };

  return (
    <div className='parent h-screen w-full'>
        <Nav iconCounts={iconCounts} />
        <FirstShop incrementIconCount={incrementIconCount} selectedImage={selectedImage} selectedPrice={selectedPrice} />
        <Description />
        <SpoonDen />
        <FooterSlhop />
    </div>
  )
}

export default Shop