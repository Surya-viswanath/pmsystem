import React, { useEffect, useState } from 'react'
import './Bannersea.css'
import { IoLocationOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';

function Bannersearch() {
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
      // Assuming each property object has a 'location' property
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
    <div className='header max-width'>
    <div className='header-right'>
       <div className='header-location-search-container shadow-lg p-3 mb-5 bg-white rounded'>
             <div className='location-wrapper'>
                <div className='location-icon-name'>
                <IoLocationOutline className='absolute-center location-icon'/>
                <div>malappuram
                  {/* <input type="text" placeholder='kochi,thrissur,plakad' value={searchQuery} onChange={handleinputchange}/> */}
                </div>
               
                {/* <select>
                  <option value="palakad">Palakad</option>
                  <option value="">thrissur</option>
                </select> */}
                </div>
                <FaCaretDown className='absolute-center'/>
             </div>
             <div className='location-search-seperator'></div>
             <div className='header-searchbar'>
             
             {/* <input placeholder='Search for restaurant or a dish' className='search-input' /> */}
             <input
          type="text"
          placeholder="Enter place to filter by"
          value={placeFilter}
          onChange={handlePlaceFilterChange}
          style={{border:'none'}}
        />
        <button type="submit" style={{border:'none',backgroundColor:'transparent'}}> <IoIosSearch/></button>
        {/* <IoIosSearch className='absolute-center search-icon' type="submit"/> */}
             </div>
         </div>
         
    </div>
    <ul>
         {filteredProperties.map(property => (
          <li key={property.id}>{property.
            bedrooms
            }</li>
          // Replace property.name with whatever property information you want to display
        ))}
      </ul>
    </div>
  )
}

export default Bannersearch
