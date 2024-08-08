import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineBed } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { GiResize } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { CiLocationOn, CiHeart } from "react-icons/ci";
import toast from 'react-hot-toast';
import './Rent.css';
import '../Search/search.css';
import { IoSearch } from "react-icons/io5";
import { useAuth } from '../auth/AuthContext';

function Buy() {
  const { user } = useAuth();
  const { sell } = useParams();
  const [first, setFirst] = useState([]);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [filters, setFilters] = useState({
    search: '',
    bathrooms: '',
    bedrooms: '',
    type: '',
    furnished: '',
    parking: '',
    offer: '',
  });
  const sells = sell;
  useEffect(() => {
    const handleItems = async () => {
      try {
        const response = await axios.get('http://localhost:4008/getpro');
        setFirst(response.data);
       
       
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    handleItems();
  }, []);

// console.log(sells);
  
const filteredData = first.filter((item) => item.sell === sells);

// search



// wishlist
const handleAddToWishlist = async (propertyid) => {
  try {
    if (!user) {
      toast.error("You need to be logged in to add to wishlist");
      return;
    }

    await axios.post('http://localhost:4008/wishlist', {
      userId: user._id,
      propertyid,
    });

    toast.success("Added to wishlist");
  } catch (error) {
    toast.error("Error adding to wishlist");
    console.error(error);
  }
};

  return (
    <div>
    {/* // <div style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}>  */}
    <h2>Explore properties</h2>
    
    {/* buy */}

   <Row style={{margin:'1%'}}>
      {/* <Row> */}
        {filteredData.length > 0 ? (
          filteredData.map(property => (
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
                        <p onClick={() => handleAddToWishlist(property)} style={{ marginLeft: '20%' }} ><CiHeart  style={{fontSize:'24px',color:'red'}}/></p>
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
}
 
export default Buy;