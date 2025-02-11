import React from 'react';
// import productList from './data';
import { Link } from 'react-router-dom';
const Home = ({productList}) => {
  return (
    <>
      <h1 className="home-title">Products</h1>
      {/* <h1 className="home-title">Products</h1> */}
      
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>

            <img src={product.img} alt={product.model} className="product-image" />
            <div className="product-info">
              <p className="product-brand">{product.brand}</p>
              <h2 className="product-model">{product.model}</h2>
              <h3 className="product-price">₹ {product.price}</h3>
              <p className="product-space">{product.space}</p>
              <button className="add-to-cart">AddToCart</button>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
