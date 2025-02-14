import React, { useEffect, useState } from "react";
import productList from "./data";
import { useParams } from "react-router-dom";
import Home from "./Home";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const filteredProduct = productList.find((product) => product.id == id);
    setProduct(filteredProduct);

    if (filteredProduct) {
      const relatedProducts = productList.filter(
        (e) => e.type === filteredProduct.type && e.id !== filteredProduct.id
      );
      setRelated(relatedProducts);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center my-5">
      <h1 className="mb-4 text-center">Product Details</h1>
      
      <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: "700px" }}>
        <div className="row g-0">
          <div className="col-md-5 d-flex align-items-center justify-content-center p-3">
            <img 
              src={product.img} 
              className="img-fluid rounded" 
              alt={product.model} 
              style={{ maxHeight: "250px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title">{product.model}</h3>
              <p className="card-text"><strong>Brand:</strong> {product.brand}</p>
              <p className="card-text"><strong>Price:</strong> ₹ {product.price}</p>
              <p className="card-text"><strong>Storage:</strong> {product.space}</p>
              <p className="card-text"><strong>Color:</strong> {product.color}</p>
              <p className="card-text"><strong>Type:</strong> {product.type}</p>
              <p className="card-text">{product.description}</p>
              <button className="btn btn-primary w-100 mt-3" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center my-4">Related Products</h2>
      <Home productList={related}  cart={cart} setCart={setCart} />
    </div>
  );
};

export default ProductDetail;
