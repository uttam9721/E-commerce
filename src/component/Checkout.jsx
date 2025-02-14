import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    pincode: '',
    mobile: '',
    landmark: '',
    location: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    navigate('/');
  };

  // const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">First Name</label>
          <input type="text" name="firstName" className="form-control" onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Last Name</label>
          <input type="text" name="lastName" className="form-control" onChange={handleChange} required />
        </div>
        <div className="col-12">
          <label className="form-label">Address</label>
          <input type="text" name="address" className="form-control" onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Pincode</label>
          <input type="text" name="pincode" className="form-control" onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Mobile</label>
          <input type="text" name="mobile" className="form-control" onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label">Landmark</label>
          <input type="text" name="landmark" className="form-control" onChange={handleChange} />
        </div>
        <div className="col-12">
          <label className="form-label">Your Location</label>
          <input type="text" name="location" className="form-control" onChange={handleChange} />
        </div>
        <div className="col-12 mt-3">
          {/* <h4>Total Price: ₹ {totalPrice}</h4> */}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
