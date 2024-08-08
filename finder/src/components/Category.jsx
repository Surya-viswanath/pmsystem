// import React, { useEffect, useState } from 'react'
// import { Row } from 'react-bootstrap'
// import Searchinput from '../Search/Searchinput'
// import axios from 'axios';
// import { CiLocationOn } from 'react-icons/ci';
// import { Link } from 'react-router-dom';

// function Category({ value, onChange, onSubmit }) {
//     const [properties, setProperties] = useState([]);
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
//         property.address.toLowerCase().includes(placeFilter.toLowerCase())
//       );
//       setFilteredProperties(filtered);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     filterPropertiesByPlace();
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit} style={{ alignItems: 'center',textAlign:'center'}}>
//       <input
//         type="text"
//         placeholder="City"
//         value={value}
//         onChange={onChange}
//         style={{ height: '50px', borderRadius: '10px 0px 0px 10px' ,width:'500px',backgroundColor:'transparent',borderColor:'black'}}
//       />
//       <button type="submit" style={{ height: '50px', borderRadius: '0px 10px 10px 0px',width:'80px', backgroundColor: 'transparent' ,borderColor:'black',color:'black'}}>search</button>
//     </form>
//     <div className="gallery">
//       {filteredProperties.map(data => (
//         <div>
//             <div key={data.id} className="image-item">
//             {/* <Link to={`/detail/${data._id}/${userid}/${data.email}`} style={{textDecoration:'none'}}> */}
//               <img src={data.image} alt={data.title} />
//               {/* </Link> */}
//               <p>{data.title}</p>
//               <p style={{ color: '#707070' }}>{data.type} , {data.sell}</p>
//               <p style={{ color: 'black' }}>
//                 {data.regularPrice} <br></br>
//                 {data.description}
//               </p>
//               <div style={{ display: 'flex' }}>
//                 <p style={{ color: '#707070' }}><CiLocationOn/>{data.address}</p>
//                 {/* <Link to={`/Wishlist/${userid}/${data._id}`} style={{textDecoration:'none'}}><p style={{ color: 'red', marginLeft: '20%', fontSize: '18px' }}><CiHeart /></p></Link> */}
//               </div>
//             </div>
         
//         </div>
//       ))}
//     </div>
//     </div>
//   )
// }

// export default Category
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// function Category() {
//     const [properties, setProperties] = useState([]);
//     const [filteredProperties, setFilteredProperties] = useState([]);
//     const [filters, setFilters] = useState({ address: '', price: '', type: '', moreParam: '' });
  
//     useEffect(() => {
//       // Fetch properties using Axios
//       axios.get('http://localhost:4008/getpro')
//         .then(response => {
//           setProperties(response.data); // Assuming the response contains an array of properties
//           setFilteredProperties(response.data); // Initially set filtered properties to all properties
//         })
//         .catch(error => {
//           console.error('Error fetching properties:', error);
//         });
//     }, []); // Empty dependency array ensures useEffect runs only once after initial render
  
//     const handleFilterChange = (e) => {
//       const { name, value } = e.target;
//       setFilters({ ...filters, [name]: value });
//     };
  
//     useEffect(() => {
//       // Filter properties whenever filters change
//       const filtered = properties.filter(property => {
//         const addressMatch = property.address.toLowerCase().includes(filters.address.toLowerCase());
//         const priceMatch = property.regularPrice >= parseInt(filters.regularPrice);
//         const typeMatch = property.type.toLowerCase() === filters.type.toLowerCase() || filters.type === '';
//         // const moreParamMatch = property.moreParam === filters.moreParam || filters.moreParam === '';
//         return addressMatch && priceMatch && typeMatch ;
//       });
//       setFilteredProperties(filtered);
//     }, [filters, properties]);
//   return (

//     <div>
//         <div>
//         <input type="text" name="address" placeholder="Filter by address" value={filters.address} onChange={handleFilterChange} />
//         <input type="number" name="price" placeholder="Filter by price" value={filters.regularPrice} onChange={handleFilterChange} />
//         <input type="text" name="type" placeholder="Filter by type" value={filters.type} onChange={handleFilterChange} />
//         {/* <input type="text" name="moreParam" placeholder="Filter by moreParam" value={filters.moreParam} onChange={handleFilterChange} /> */}
//       </div>
//       <ul>
//         {filteredProperties.map(property => (
//           <li key={property.id}>
//             <div>Address: {property.address}</div>
//             <div>Price: {property.regularPrice}</div>
//             <div>Type: {property.type}</div>
//             {/* <div>More Param: {property.moreParam}</div> */}
//             {/* Add more property details as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Category
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Category() {
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
        // const priceMatch = property.regularPrice >= parseInt(filters.price) || filters.price === '';
        const typeMatch = property.type.toLowerCase() === filters.type.toLowerCase() || filters.type === '';
        // const bedroomMatch = property.bedrooms.toString().toLowerCase()() === filters.bedrooms.toString().toLowerCase() || filters.bedrooms === '';
        return addressMatch && typeMatch ;
      });
      setFilteredProperties(filtered);
    }, [filters, properties]);
  return (

    <div>
        <div>
        <input type="text" name="address" placeholder="Filter by address" value={filters.address} onChange={handleFilterChange} />
        {/* <input type="number" name="price" placeholder="Filter by price" value={filters.price} onChange={handleFilterChange} /> */}
        <input type="text" name="type" placeholder="Filter by type" value={filters.type} onChange={handleFilterChange} />
        {/* <input type="text" name="bedrooms" placeholder="Filter by no : of bedrooms" value={filters.bedrooms} onChange={handleFilterChange} /> */}
      </div>
      <ul>
        {filteredProperties.map(property => (
          <li key={property.id}>
            <div>Address: {property.address}</div>
            <div>Price: {property.regularPrice}</div>
            <div>Type: {property.type}</div>
            <div>Type: {property.bedrooms}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category

