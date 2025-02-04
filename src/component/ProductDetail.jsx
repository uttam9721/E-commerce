import React, { useEffect, useState } from 'react'
import productList from './data'
import { useParams } from 'react-router-dom'
import Home from './Home'
const ProductDetail = () => {
  const {id} = useParams();
  const [product,setProduct]=useState({})
  const [related,setRelated]=useState([])

  useEffect(()=>{
    const filteredProduct = productList.filter((product)=>product.id==id);
    // console.log(filteredProduct)
    setProduct(filteredProduct[0])

    const related = productList.filter((e)=>e.type===product.type)
    setRelated(related)
    // console.log(related);
  },[id,product.type])
  return (
    <div>
      <div className="product-list">
        {/* {productList.map((product) => ( */}
          <div className="product-card">
            {/* <Link to={`/product/${product.id}`}> */}

            <img src={product.img} alt={product.model} className="product-image" />
            <div className="product-info">
              <p className="product-brand">{product.brand}</p>
              <h2 className="product-model">{product.model}</h2>
              <h3 className="product-price">₹ {product.price}</h3>
              <p className="product-space">{product.space}</p>
              <button className="add-to-cart">AddToCart</button>
            </div>
            {/* </Link> */}
          </div>
        <Home productList={related}/>
      </div>
    </div>
  )
}

export default ProductDetail
