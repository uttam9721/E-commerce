import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const handleIncrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <>
    <div className="container justify-content-center my-5" style={{ width: "54%", gap: "10px" }}>
      {cart.length === 0 ? ( // Fix conditional check
        <div className="text-center">
          <h1>Cart Is Empty</h1>
          <Link to={"/"} className="btn btn-warning">
            Continue Shopping...
          </Link>
        </div>
      ) : (
        cart.map((product) => (
          <div
            className="card"
            style={{
              width: "600px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            }}
            key={product.id}
          >
            <img
              src={product.img}
              alt={product.model}
              style={{ width: "150px", height: "auto", borderRadius: "5px" }}
            />
            <div className="card-body text-center" style={{ marginLeft: "15px" }}>
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {product.model}
              </h5>
              <p className="text-muted" style={{ marginBottom: "5px" }}>
                {product.model}
              </p>
              <div className="d-flex align-items-center">
                <span
                  className="badge bg-primary"
                  style={{ fontSize: "18px", padding: "10px", borderRadius: "5px" }}
                >
                  ₹ {product.price * (product.quantity || 1)}
                </span>
                <button className="btn btn-warning ms-3" style={{ fontWeight: "bold" }}>
                  Buy Now
                </button>
              </div>
              <div className="mt-2">
                <button className="btn btn-secondary" onClick={() => handleDecrement(product.id)}>
                  -
                </button>
                <span className="mx-2">{product.quantity || 1}</span>
                <button className="btn btn-secondary" onClick={() => handleIncrement(product.id)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
    {cart.length!=0 && (
       <div className="container text-center my-5" style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
       <Link to={'/checkout'}  className="btn btn-warning mx-5">
         Checkout
       </Link>
       <button onClick={()=>setCart("")} className="btn btn-danger">
         ClearCart
       </button>
     </div>
    ) }
   
    </>
  );
};

export default Cart;
