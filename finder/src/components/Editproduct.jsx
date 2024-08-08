import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Editproduct() {
    const [product, setProduct] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });
  useEffect(() => {
    axios.get(`http://localhost:4008/getpro`)
      .then(res => {
        setProduct(res.data);
        setFormData({
          name: res.data.name,
          price: res.data.price,
          description: res.data.description
        });
      })
      .catch(err => console.log(err));
  }, []);
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:4008/getpro`, formData)
      .then(res => console.log('Product updated successfully'))
      .catch(err => console.log(err));
  };
  return (
    <div>
      
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <input type="text" name="price" value={formData.price} onChange={handleChange} />
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        <button type="submit">Update Product</button>
      </form>
      
    </div>
  )
}

export default Editproduct
