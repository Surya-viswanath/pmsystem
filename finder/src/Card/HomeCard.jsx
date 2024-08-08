import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Home.css'
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
function HomeCard() {
const [first, setFirst] = useState([])

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
  return (
    <div style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}> 
      <h2>Explore properties</h2>
    <div className="gallery">
    
       {first.map(data => (
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

export default HomeCard
