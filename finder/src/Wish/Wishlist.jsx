import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa"; 
import './Wishlist.css'
import { useAuth } from '../auth/AuthContext';
const WishList = () => {
  const { user } = useAuth();
 
  // console.log(id);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
 
  const navigate = useNavigate();


//   const cartitems= localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) :[]

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get(`http://localhost:4008/getwishlist/${user._id}`);
// console.log("data",response);

const uniqueWishlistItems = removeDuplicates(response.data.properties, '_id');
setWishlistItems(uniqueWishlistItems);
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
        setError('Error fetching wishlist items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

 
  if (user && user.email) { // Check if user and user.email are not null before calling fetchCartItems
    fetchWishlistItems();
  }
}, [user]);

const removeDuplicates = (items, key) => {
  return items.filter((item, index, self) =>
    index === self.findIndex((t) => (
      t[key] === item[key]
    ))
  );
};


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4008/deletewishlist/${user._id}/${id}`);
      // After successful deletion on the server, update the cart items displayed in the UI
      const updatedWishlistedItems = wishlistItems.filter(item => item._id !== id);
      setWishlistItems(updatedWishlistedItems);
      
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
 
 
 
  
  return (

<div>
<h2 style={{padding:'25px',color:'#393d73'}}>Wish List</h2>

<Row style={{margin:'1%'}}>
      {/* <Row> */}
        {wishlistItems.length > 0 ? (
          wishlistItems.map(property => (
            <Col xs={12} sm={6} md={4} lg={3} key={property._id}>
              {/* <Card className="image-item"> */}
              <Card style={{width:'18rem',height:'350px',marginBottom:'4%'}}>
              
                  {user ? (
  <Link to={`/detail/${property._id}`} style={{ textDecoration: 'none' }}>
                  <Card.Img variant="top" src={property.image} />
                  </Link>
) : (
<Link to={'/login'} style={{ textDecoration: 'none' }}>
                  <Card.Img variant="top" src={property.image} />
                  </Link>
)}
                  <Card.Body>
                    <Card.Text className='textp'>
                      <p>{property.title}</p>
                      <p style={{ color: '#707070' }}>{property.type} , {property.sell}</p>
                      <p style={{ color: 'black' }}>
                        {property.regularPrice} <br />
                        {property.description}
                      </p>
                      <div style={{ display: 'flex' }}>
                        <p style={{ color: '#707070' }}><CiLocationOn />{property.address}</p>
                        <p  style={{ marginLeft: '20%' }}  onClick={()=>handleDelete(property._id)}><FaHeart  style={{fontSize:'24px',color:'red'}}/></p>
                      </div>
                    </Card.Text>
                  </Card.Body>
               
              </Card>
            </Col>
          ))
        ) : (
          <p>No properties found</p>
        )}
      </Row>

</div>



  );
};


export default WishList;
