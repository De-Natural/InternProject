import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import './App.css'
import Shop from './pages/ShopPage/Shop'

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" 
        element={<HomePage  
          setSelectedImage={setSelectedImage} 
          setSelectedPrice={setSelectedPrice}
          setSelectedProduct={setSelectedProduct} />} />
        <Route path="/shop" 
        element={<Shop 
          selectedImage={selectedImage} 
          selectedPrice={selectedPrice} />} />
      </Routes>
    </Router>
  )
}

export default App
