import React, { useState } from 'react'
import Navbar from './component/Navbar';
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
import ProductDetail from './component/ProductDetail';
import Search from './component/Search';
import Cart from './component/Cart';
import Home from './component/Home';
// import productList from './data';
import productList from './component/data';
import Checkout from './component/Checkout';
const App = () => {
  const [data,setData]=useState(...[productList])
  const [cart,setCart] = useState([])

  return (
    <div>
      <Router>
        <Navbar cart={cart} setData={setData}/>
        <Routes>
          
          <Route path='/' element={<Home productList={data} cart={cart} setCart={setCart}/>} />
          <Route path='/product/:id' element={<ProductDetail  cart={cart} setCart={setCart}/>} />
          <Route path='/search/:term' element={<Search  cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
          <Route path='/checkout' element={<Checkout />} />

          
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
