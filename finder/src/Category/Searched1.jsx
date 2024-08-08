import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Searched1() {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [price, setPrice] = useState('');
    
    useEffect(() => {
      fetchProperties();
    }, []);
  
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:4008/getpro');
        setProperties(response.data);
        setFilteredProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties', error);
      }
    };
  
    const handleSearch = (e) => {
      const query = e.target.value;
      setSearchQuery(query);
      filterProperties(query, bedrooms, price);
    };
  
    const handleBedrooms = (e) => {
      const beds = e.target.value;
      setBedrooms(beds);
      filterProperties(searchQuery, beds, price);
    };
  
    const handlePrice = (e) => {
      const prc = e.target.value;
      setPrice(prc);
      filterProperties(searchQuery, bedrooms, prc);
    };
  
    // const filterProperties = (query, beds, prc) => {
    //   const filtered = properties.filter(property => {
    //     const matchesQuery = property.name?.toLowerCase().includes(query.toLowerCase());
    //     const matchesBedrooms = beds ? property.bedrooms === parseInt(beds) : true;
    //     const matchesPrice = prc ? property.price <= parseFloat(prc) : true;
        
    //     return matchesQuery && matchesBedrooms && matchesPrice;
    //   });
    //   setFilteredProperties(filtered);
    // };
    const filterProperties = (query, beds, prc) => {
      const filtered = properties.filter(property => {
        const matchesQuery = property.name?.toLowerCase().includes(query.toLowerCase());
        const matchesBedrooms = beds ? property.bedrooms === parseInt(beds) : true;
        const matchesPrice = prc ? property.price <= parseFloat(prc) : true;
        
        return matchesQuery && matchesBedrooms && matchesPrice;
      });
      setFilteredProperties(filtered);
    };
  
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search by address..." 
        value={searchQuery} 
        onChange={handleSearch} 
      />
      <input 
        type="number" 
        placeholder="Number of bedrooms" 
        value={bedrooms} 
        onChange={handleBedrooms} 
      />
      <input 
        type="number" 
        placeholder="Max price" 
        value={price} 
        onChange={handlePrice} 
      />
      <ul>
        {filteredProperties.map(property => (
          <li key={property.id}>{property.address} <br></br>
           {property.bedrooms} BR <br></br>
            {property.regularPrice}</li>
        ))}
      </ul>
    </div>
  )
}

export default Searched1
