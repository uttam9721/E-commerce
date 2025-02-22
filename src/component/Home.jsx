import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import CarouselComponent from './Carousel';
const Home = ({ productList, cart, setCart }) => {
  const addToCart = (id, price, model, description, img) => {
    const obj = { id, price, model, description, img };

    setCart([...cart, obj]); // Add item to cart
    // Show Toast Notification
    toast.success(`${model} added to cart!`, {
      position: "top-right",
      autoClose: 1000, // Closes after 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      // theme: "light",
    });

    console.log("Cart:", cart);
  };

  return (
    <>
      <ToastContainer /> {/* Add this to display toasts */}
      <div>
        {/* <CarouselComponent /> */}
      </div>
      <br />
      {/* <h1 className="home-title">Products</h1> */}
      
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.img} alt={product.model} className="product-image" />
            </Link>
            <div className="product-info">
              <p className="product-brand">{product.brand}</p>
              <h2 className="product-model">{product.model}</h2>
              <h3 className="product-price">₹ {product.price}</h3>
              <p className="product-space">{product.space}</p>
              {/* <p className="product-space">{product.description}</p> */}
              <button
                onClick={() =>
                  addToCart(product.id, product.price, product.model, product.description, product.img)
                }
                className="add-to-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
