import React from 'react'
import { Link } from 'react-router-dom'
import productList from './data'
const Navbar = ({setData}) => {

  const filterByType =(type)=>{
    if(type==='All'){
      setData(productList)
    }else{
      const ele =  productList.filter((cat)=>cat.type===type);
      // console.log(ele)
      setData(ele)
    }
  }

  return (
    <>
    <div className='style'>
        <Link to='/' className="home">Home</Link>
        <div className="about">About</div>
        <div className="contact">
        <select onChange={(e) => filterByType(e.target.value)}>
            <option value="All">All Products</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Jeans">Jeans</option>
            <option value="Shoes">Shoes</option>
            <option value="Tshirts">Tshirts</option>
            <option value="Hoody">Hoody</option>
          </select>
        </div>
        <div className="search">
            <input type="text" placeholder='Search item here' />
        </div>
        <Link to={'/cart'} className="cart">Cart</Link>
    </div>
      
    </>
  )
}

export default Navbar
