import React, { useState, useEffect } from 'react';
import { Button, Card} from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBed } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { GiResize } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";


function Homecard() {
  
  const [first, setFirst] = useState([]);
  const [second, setsecond] = useState([]);
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

  useEffect(()=>{
    const agent =async()=>{
     try{
       const responses = await axios.get('http://localhost:4008/getagent')     
     setsecond(responses.data)
     console.log(second);
     }
     catch{ 
     }
   }
   agent();
  },[]);

  const filteredData = first.filter

  
// Accessing specific properties of the first element
const handleWhatsAppButtonClick = () => {
  const phoneNumber = filteredData[0].phone; // Replace with the phone number you want to chat with
  const message = 'Hello! I am interested in your product.'; // Optional: Replace with a predefined message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
};
  return (
    <div style={{backgroundColor:'F7F6FB'}}>
   <div style={{maxWidth:'1100px',margin:'0px auto'}}>
      
{first.map((display) =>(
    
  <div style={{Width:'60%',margin:'0px auto',marginBottom:'2%'}}>
    <Link to={`/detail/${display._id}/${display.email}`} style={{textDecoration:'none'}}>
 <div style={{display:'flex',width:'60%',border:'1px solid #e4e4e4',margin:'0%'}}>
 
  <div>
<img src={display.image} alt={display._id} style={{width:'320px',height:'280px',color:'black'}}
/>
  </div>
  <div style={{marginLeft:'2%',marginTop:'3%'}} className='cardd'>
<p  style={{color:'#707070'}}>{display.type}</p>
<p style={{color:'black'}}>{display.sell}</p>
<h5 style={{color:'black'}}>{display.regularPrice}</h5>
<p  style={{color:'black'}}>{display.description}</p>
<p  style={{color:'#707070'}}><CiLocationOn />{display.address}</p>
<div style={{display:'flex',color:'black'}}>
<p style={{marginRight:'5%'}}><MdOutlineBed />  {display.bedrooms}</p>
<p style={{marginRight:'5%'}}><PiBathtub />  {display.bathrooms}</p>
<p style={{marginRight:'5%'}}><GiResize />  {display.propertysize} </p>
</div>
  </div>
  
 </div>
 </Link>
<div style={{display:'flex',border:'1px solid #e4e4e4',marginRight:'40%',padding:'0.5%',backgroundColor:'#f8f8f8'}}>
  <div style={{color:'black'}}>
  {second.filter(helo => helo.email === display.email)
  .map(hai => (
    <div style={{marginTop:'0px',display:'flex'}}>
      <Link to={`/agent/${display.email}`}><img src={hai.profile} style={{width:'50px',height:'50px',borderRadius:'50%'}}></img></Link>
      <p style={{marginTop:'10%'}}>{hai.name}</p>
    </div>
  ))}
  </div>
  <div style={{display:'flex',marginLeft:'32%'}}>
    <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}}><FaPhoneAlt /> +91{display.phone}</Button>
    <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}} ><IoMdMail /> Email</Button>
    <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button>
  </div>
  </div>



 
  </div>
 
 
 ) )}
   </div>
   </div>       










  
  );
}
 
export default Homecard;