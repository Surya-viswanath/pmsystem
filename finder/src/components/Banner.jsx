// import React, { useEffect, useState } from 'react'
// import './Banner.css'
// import { Col, Container, Row } from 'react-bootstrap'
// import banner from './Bannerhome.jpg'
// import axios from 'axios';
// import { IoIosSearch } from "react-icons/io";
// import Searchinput from '../Search/Searchinput';
// import Propertilist from '../Search/Propertilist';
// import Category from './Category';
// function Banner() {

//   const [properties, setProperties] = useState([]);
//   const [filteredProperties, setFilteredProperties] = useState([]);
//   const [placeFilter, setPlaceFilter] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4008/getpro');
//       setProperties(response.data); // Assuming the API returns an array of properties
//       setFilteredProperties(response.data); // Initialize filtered properties with all properties
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handlePlaceFilterChange = (e) => {
//     setPlaceFilter(e.target.value);
//   };

//   const filterPropertiesByPlace = () => {
//     if (!placeFilter) {
//       setFilteredProperties(properties); // If no filter, show all properties
//     } else {
//       const filtered = properties.filter(property =>
//         property.sell.toLowerCase().includes(placeFilter.toLowerCase())
//       );
//       setFilteredProperties(filtered);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     filterPropertiesByPlace();
//   };

//   return (
//    <div>
//     <div className='banner'>
//       <Row >
//         <h1 className='find'>Find your Dream Home here</h1>
//         <Searchinput value={placeFilter} onChange={handlePlaceFilterChange} onSubmit={handleSubmit} />
//         {/* <Category/> */}
//       </Row>
//     </div>
//      <Propertilist properties={filteredProperties} />
//      </div>
//   )
// }

// export default Banner



import React, { useEffect, useState } from 'react'
import './Banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import banner from './Bannerhome.jpg'
import axios from 'axios';

import Propertylited2 from '../Category/Propertylited2';
import Searched2 from '../Category/Searched2';
function Banner() {

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({ address: '', price: '', type: '' });

  useEffect(() => {
    // Fetch properties using Axios
    axios.get('http://localhost:4008/getpro')
        .then(response => {
            setProperties(response.data); // Assuming the response contains an array of properties
            setFilteredProperties(response.data); // Initially set filtered properties to all properties
        })
        .catch(error => {
            console.error('Error fetching properties:', error);
        });
}, []); // Empty dependency array ensures useEffect runs only once after initial render

const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
};

useEffect(() => {
    // Filter properties whenever filters change
    const filtered = properties.filter(property => {
        const addressMatch = property.address.toLowerCase().includes(filters.address.toLowerCase());
        const typeMatch = property.type.toLowerCase() === filters.type.toLowerCase() || filters.type === '';
        return addressMatch && typeMatch;
    });
    setFilteredProperties(filtered);
}, [filters, properties]);

  return (
   <div>
    <div className='banner'>
      <Row style={{textAlign:'center'}}>
        <h1 className='find'>Find your Dream Home here</h1>
        <Searched2 filters={filters} onFilterChange={handleFilterChange} />
          
      </Row>
    </div>
    
    <Propertylited2 properties={filteredProperties}/>

     </div>
  )
}

export default Banner