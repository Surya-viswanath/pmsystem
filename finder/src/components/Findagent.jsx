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
import './Rent.css';

function Findagent() {
  const [first, setfirst] = useState([])
  
  const [second, setsecond] = useState([]);
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

  useEffect(()=>{
    const handleitems =async()=>{
     try{
       const response = await axios.get('http://localhost:4008/getpro')     
     setfirst(response.data)
    //  console.log(first);
     }
     catch{ 
     }
   }
   handleitems();
  },[]);

  
// Accessing specific properties of the first element
// const handleWhatsAppButtonClick = () => {
//   const phoneNumber = filteredData[0].phone; // Replace with the phone number you want to chat with
//   const message = 'Hello! I am interested in your product.'; // Optional: Replace with a predefined message

//   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//   window.open(whatsappURL, '_blank');
// };
  return (
//     <div style={{backgroundColor:'F7F6FB'}}>
//    <div style={{maxWidth:'1100px',margin:'0px auto'}}>
      

    
//   <div style={{Width:'60%',margin:'0px auto',marginBottom:'2%'}}>
    
// <div style={{display:'flex',border:'1px solid #e4e4e4',marginRight:'40%',padding:'0.5%',backgroundColor:'#f8f8f8'}}>
//   <div style={{color:'black'}}>
//   {second.map(hai => (
//     <div style={{marginTop:'0px',display:'flex'}}>
//       <img src={hai.profile} style={{width:'50px',height:'50px',borderRadius:'50%'}}></img>
//       <p style={{marginTop:'10%'}}>{hai.name}</p>
//     </div>
//   ))}
//   </div>
//   {/* <div style={{display:'flex',marginLeft:'32%'}}>
//     <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}}><FaPhoneAlt /> +91{hai.phone}</Button>
//     <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}} ><IoMdMail /> Email</Button>
//     <Button style={{backgroundColor:'white',color:'#5745A0',borderColor:'#5745A0',marginRight:'7px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button>
//   </div> */}
//   </div>



 
//   </div>
 
 
 
//    </div>
//    </div>       



<div style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}> 
      <h2>Find Agents</h2>
    <div className="gallery" >
    
       {second.map(data => (
        <div style={{}}>
         {/* <Link to={`/detail/${data._id}/${data.email}`} style={{textDecoration:'none'}}> */}
        <div key={data.id}  style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',borderRadius:'6%',height:'300px'}}>
         <div>
          <img src={data.profile} alt={data.title} style={{maxWidth:'100%',height:'200px'}}/>

          </div>
          <div style={{marginLeft:'3%'}}>
          <p style={{fontSize:'28px'}}>{data.name}</p>
          <p  style={{color:'#707070',fontSize:'17px'}}>Property Consultant</p>
<p style={{color:'#707070'}}>
Nationality :<span style={{color:'black'}}>{data.nationality} </span> <br></br>
Languages : <span style={{color:'black'}}>{data.languages}</span>
</p>

<Link to={`/getone/${data.email}`}> <button style={{backgroundColor:'white',color:'#EF5E4E',border:'1px solid #EF5E4E',borderRadius:'50%',marginRight:'7px',height:'40px',width:'110px'
  
}}>Properties</button></Link>
</div>
        </div>
        {/* </Link> */}
        </div>
      ))}
     
    </div>
    </div>






  
  );
}
 
export default Findagent;