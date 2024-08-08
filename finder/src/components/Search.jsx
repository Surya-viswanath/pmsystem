import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Card/Home.css'
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
function Search() {
const [properties, setProperties] = useState([]);
const [filteredProperties, setFilteredProperties] = useState([]);
const [placeFilter, setPlaceFilter] = useState('');

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:4008/getpro');
    setProperties(response.data); // Assuming the API returns an array of properties
    setFilteredProperties(response.data); // Initialize filtered properties with all properties
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const handlePlaceFilterChange = (e) => {
  setPlaceFilter(e.target.value);
};

const filterPropertiesByPlace = () => {
  if (!placeFilter) {
    setFilteredProperties(properties); // If no filter, show all properties
  } else {
    const filtered = properties.filter(property =>
     
      property.sell.toLowerCase().includes(placeFilter.toLowerCase())
    );
    setFilteredProperties(filtered);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  filterPropertiesByPlace();
};

  return (
    <div>
<form onSubmit={handleSubmit} style={{alignItems:'center',padding:'2% 30% 2% 40%'}}>
        <input
          type="text"
          placeholder="Search"
          value={placeFilter}
          onChange={handlePlaceFilterChange}
          style={{height:'50px',borderRadius:'10px 0px 0px 10px'}}
        />
        <button type="submit"  style={{height:'50px',borderRadius:'0px 10px 10px 0px',backgroundColor:'white'}}><IoSearch /></button>
      </form>
 
        <div className="gallery">
    
    {filteredProperties.map(data => (
     <div>
      {/* <Link to={`/detail/${data._id}/${data.email}`} style={{textDecoration:'none'}}> */}
      <Link to='/2' style={{textDecoration:'none'}}>
     <div key={data.id} className="image-item">
      
       <img src={data.image} alt={data.title} />
       <p>{data.title}</p>
       <p  style={{color:'#707070'}}>{data.type} , {data.sell}</p>
<p style={{color:'black'}}>
{data.regularPrice} <br></br>
{data.description}
</p>
<div style={{display:'flex'}}>
<p  style={{color:'#707070'}}><CiLocationOn />{data.address}</p>
<p style={{color:'red',marginLeft:'20%',fontSize:'18px'}}><CiHeart /></p></div>

     </div>
     </Link>
     </div>
   ))}
  
 </div>
    </div>
  )
}

export default Search
