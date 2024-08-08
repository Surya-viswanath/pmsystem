import React, { useState, useEffect } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBed } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { GiResize } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import './Rent.css'

function GetoneAgentpro() {
  const { email } = useParams();
  const [first, setFirst] = useState([]);
  const [updatedData, setUpdatedData] = useState({});

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
 

  const getemail = email;
// console.log(sells);
  
const filteredData = first.filter((item) => item.email === getemail);

// const handleUpdate = async (id, updates) => {
//   try {
//     const response = await axios.put(`http://localhost:4008/updateList/${id}`, updates);
//     // Update the state after successful update
//     setFirst(first.map(list => list._id === id ? response.data : list));
//   } catch (error) {
//     console.error('Error updating list:', error);
//   }
// };
const handleUpdate = async (id) => {
  try {
    await axios.put(`http://localhost:4008/updateList/${id}`, updatedData);
    // Optionally, you can fetch updated data from the server and update the state
    // Or you can update the state based on the updatedData directly
  } catch (error) {
    console.error('Error updating list:', error);
  }
};
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setUpdatedData({ ...updatedData, [name]: value });
};
const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:4008/deleteList/${id}`);
    // Update the state after successful deletion
    setFirst(first.filter(list => list._id !== id));
  } catch (error) {
    console.error('Error deleting list:', error);
  }
};
  return (
    <div style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}> 
    <h2>Explore my properties</h2>
  <div className="gallery">
  
     {filteredData.map(data => (
      <div>
      
      <div key={data.id} className="image-item">
      <Link to={`/detail/${data._id}/${data.email}`} style={{textDecoration:'none'}}>
        <img src={data.image} alt={data.title} />
        <p>{data.title}</p>
        <p  style={{color:'#707070'}}>{data.type} , {data.sell}</p>
<p style={{color:'black'}}>
{data.regularPrice} <br></br>
{data.description}
</p>
<p  style={{color:'#707070'}}><CiLocationOn />{data.address}</p>
</Link>
<button onClick={() => handleDelete(data._id)} style={{color:'rgb(239, 94, 78)',backgroundColor:'white',border:'1px solid rgb(239, 94, 78)',borderRadius:'5px'}}>Delete</button>
{/* <button onClick={() => handleUpdate(data._id, { })}>Update</button> */}
{/* <button onClick={() => handleUpdate(data._id)}>Update</button> */}

      </div>
      
      
      </div>
    ))}
   
  </div>
  </div>      
  );
}
 
export default GetoneAgentpro;