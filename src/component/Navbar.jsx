import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import productList from './data'
import { useNavigate } from 'react-router-dom'
const Navbar = ({setData}) => {
  const navigate = useNavigate();
  const [searchTerm,setSearchTerm] = useState("");

  const filterByType =(type)=>{
    if(type==='All'){
      setData(productList)
    }else{
      const ele =  productList.filter((cat)=>cat.type===type);
      // console.log(ele)
      setData(ele)
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm(" ");
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
            <option value="bluetooth , airdopes">bluetooth , airdopes</option>
            <option value="Jeans">Jeans</option>
            <option value="Shoes">Shoes</option>
            <option value="Tshirts">Tshirts</option>
            <option value="Hoody">Hoody</option>
          </select>
        </div>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input type="search"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder='Search item here' />
            </form>
        </div>
        <Link to={'/cart'} className="cart">Cart</Link>
    </div>
      
    </>
  )
}

export default Navbar
