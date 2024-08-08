
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Search/search.css';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useAuth } from '../auth/AuthContext';
import toast from 'react-hot-toast';
import './Rent.css';
import { IoSearch } from "react-icons/io5";

function Allproperties() {
  const { user } = useAuth();
  
  const [wishlist, setWishlist] = useState([]);
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

  useEffect(() => {
    axios.get('http://localhost:4008/getpro')
      .then(response => {
        setProperties(response.data);
        setFilteredProperties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const filterProperties = () => {
    let filtered = properties;

    if (filters.search) {
      filtered = filtered.filter(property => 
        property.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        property.address.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.bedrooms) {
      if (filters.bedrooms === 'more') {
        filtered = filtered.filter(property => property.bedrooms > 3);
      } else {
        filtered = filtered.filter(property => property.bedrooms === Number(filters.bedrooms));
      }
    }
    if (filters.type) {
      filtered = filtered.filter(property => property.type.toLowerCase() === filters.type.toLowerCase());
    }
    if (filters.furnished) {
      filtered = filtered.filter(property => property.furnished.toLowerCase() === filters.furnished.toLowerCase());
    }
    if (filters.parking) {
      filtered = filtered.filter(property => property.parking.toLowerCase() === filters.parking.toLowerCase());
    }
    if (filters.offer) {
      filtered = filtered.filter(property => property.offer.toLowerCase() === filters.offer.toLowerCase());
    }

    setFilteredProperties(filtered);
  };

  useEffect(() => {
    filterProperties();
  }, [filters, properties]);
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
      <div className="filtersall">
      {/* <div style={{marginRight:'-20px'}}> <IoSearch/></div> */}
        <input
          type="text"
          placeholder=" Search by address or description"
          name="search"
          onChange={handleFilterChange}
          className='search'
        />
        {/* <IoSearch/> */}
      
        <select name="type" onChange={handleFilterChange} className='small'>
          <option value="">Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
        </select>
        {/* <select name="bathrooms" onChange={handleFilterChange} className='small'>
          <option value="">Bathrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="more">More than 3</option>
        </select> */}
        <select name="bedrooms" onChange={handleFilterChange} className='small'>
          <option value="">Bedrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="more">More than 3</option>
        </select>
        
        <select name="furnished" onChange={handleFilterChange} className='small'>
          <option value="">Furnished</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {/* <select name="parking" onChange={handleFilterChange}>
          <option value="">Parking</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select> */}
        <select name="offer" onChange={handleFilterChange} className='small'>
          <option value="">Offer</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <Row style={{margin:'1%'}}>
      {/* <Row> */}
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
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
};

export default Allproperties;





