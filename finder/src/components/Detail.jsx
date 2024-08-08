import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { BiBuildings } from "react-icons/bi";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { PiBathtub } from "react-icons/pi";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { PiCoatHangerLight } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";
import { BiDumbbell } from "react-icons/bi";
import { MdChair } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { FaRegBuilding } from "react-icons/fa";
  import { TbBrandCashapp } from "react-icons/tb";
import image from "./detaiwavw.jpg";
import { TbBed } from "react-icons/tb";
import { MdOutlineBathtub } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { PiArmchairLight } from "react-icons/pi";
import { MdOutlineDescription } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { GiCalendarHalfYear } from "react-icons/gi";
import { LuHeart } from "react-icons/lu";

function Detail({ properties}) {

  const {_id,ids,email}=useParams();
  const [first, setfirst] = useState([])
  const [second, setsecond] = useState([])
  const [agents, setagents] = useState([])
 const userid=ids;
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


  useEffect(()=>{
    const agent =async()=>{
     try{
       const responses = await axios.get('http://localhost:4008/getcustomer')     
     setsecond(responses.data)
    
     }
     catch{ 
     }
   }
   agent();
  },[]);

  useEffect(()=>{
    const agents =async()=>{
     try{
       const responses = await axios.get('http://localhost:4008/request-organizer')     
     setagents(responses.data)
    
     }
     catch{ 
     }
   }
   agents();
  },[]);

  
  const getid=_id;
//  const property = first.filter((item)=>item._id===getid)
const property = first.filter((item) => item._id === getid); 
const propert = first.filter((item) => item._id === getid)[0]; 
const getmail = propert?.email;
  
const mailid = second.filter((item)=>item.email===getmail)
const organizer= agents.filter((item)=>item.email===getmail)
  // console.log("agent",mailid);

 const handleWhatsAppButtonClick = () => {
  const phoneNumber = mailid[0].phone; 
  console.log("number",phoneNumber)
  const message = 'Hello! I am interested in your prperty.'; // Optional: Replace with a predefined message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
};

const addToWishlist = async (propertyId, userId) => {
  try {
    const response = await axios.post('http://localhost:4008/addToWishlist', { propertyId, userId });
    console.log(response.data); // Assuming the response contains some confirmation message
    // You can also show a toast or notification to inform the user that the property has been added to the wishlist
  } catch (error) {
    console.error('Error adding property to wishlist:', error);
    // Handle error (show error message to user, etc.)
  }
};
  return (
    <div>
      {property.map((demo)=>
<div style={{margin:'0% 5%'}}>
<div style={{backgroundImage: `url(${demo.image})`,backgroundSize:'cover', height: '85vh',width: '100%',borderRadius:'20px'}}>
  <div style={{backgroundColor:' rgba(0, 0, 0, 0.6)',backgroundSize:'cover', height: '85vh',width: '100%',color:'white',borderRadius:'20px'}}>
 
    <div style={{justifyContent:'center',paddingLeft:'2%',display:'flex',paddingTop:'25%'}}>
      <h3 >{demo.address}</h3>
      <button style={{width:'120px',height:'50px',border:'none',borderRadius:'10px',backgroundColor:'white',color:'#393d73',marginLeft:'10%'}}>{demo.sell}</button>
    </div>
    <div style={{marginLeft:'15%',marginTop:'2%'}}>
     <FaRegBuilding style={{fontSize:'24px'}}/> {demo.type}
  <TbBrandCashapp style={{fontSize:'24px',marginLeft:'4%'}}/>{demo.regularPrice}
   
      </div>
      </div>
  </div>
  <Container style={{marginTop:'3%'}}>
  <Row>
        <Col sm={8}>
        <img src={demo.image} style={{width:'95%',borderRadius:'15px'}}/>
        </Col>
        <Col sm={4} style={{color:'#8ccbe6'}}>
        <div style={{backgroundImage: `url(${image})`,height:'30%',width:'100%',borderRadius:'12px',marginTop:'4%'}}>
          <TbBed style={{float:'Right',fontSize:'68px',marginRight:'9%'}}/>
          <h3 style={{marginLeft:'22%',paddingTop:'10%'}}>{demo.bedrooms}</h3>
          <p style={{marginLeft:'20%',paddingTop:'1%'}}>Bedrooms</p>
          </div>
        <div style={{backgroundImage: `url(${image})`,height:'30%',width:'100%',borderRadius:'12px',marginTop:'4%'}}>
          <MdOutlineBathtub style={{float:'Right',fontSize:'68px',marginRight:'9%'}}/>
          <h3 style={{marginLeft:'22%',paddingTop:'10%'}}>{demo.bathrooms}</h3>
          <p style={{marginLeft:'20%',paddingTop:'1%'}}>Bathrooms</p>
          </div>
        <div style={{backgroundImage: `url(${image})`,height:'30%',width:'100%',borderRadius:'12px',marginTop:'4%'}}>
          <FaCarSide style={{float:'Right',fontSize:'68px',marginRight:'9%'}}/>
          <h3 style={{marginLeft:'22%',paddingTop:'10%'}}>{demo.parking}</h3>
          <p style={{marginLeft:'20%',paddingTop:'1%'}}>Parking</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container style={{marginTop:'3%'}}>
      <Row style={{display:'flex'}}>
       <Col sm={8} style={{border:'1px solid black',borderRadius:'10px',padding:'3%',width:'61%'}}>
       <h6>Details</h6>
       <Row style={{marginTop:'4%'}}>
        <Col sm={4} >
        <p style={{display:'flex'}}>
        <FaRegBuilding style={{fontSize:'18px',color:'#4888a3'}}/>
        <span style={{marginRight:'5%',marginLeft:'10%',fontSize:'14px'}}>Type:</span><span style={{fontSize:'14px',fontWeight:'500'}}>{demo.type}</span>
        </p>
        <p style={{display:'flex'}}>
        <TbBed style={{fontSize:'18px',color:'#4888a3'}}/>
        <span style={{marginRight:'5%',marginLeft:'10%',fontSize:'14px'}}>Bedrooms:</span><span style={{fontSize:'14px',fontWeight:'500'}}>{demo.bedrooms}</span>
        </p>
        <p style={{display:'flex'}}>
        <MdOutlineBathtub style={{fontSize:'18px',color:'#4888a3'}}/>
        <span style={{marginRight:'5%',marginLeft:'15%',fontSize:'14px'}}>Bathrooms:</span><span style={{fontSize:'14px',fontWeight:'500'}}>{demo.bathrooms}</span>
        </p>
        </Col>
        <Col sm={4}>
        <p style={{display:'flex'}}>
        <TbRulerMeasure  style={{fontSize:'18px',color:'#4888a3'}}/>
        <span style={{marginRight:'5%',marginLeft:'10%',fontSize:'14px'}}>Property size:</span><span style={{fontSize:'14px',fontWeight:'500'}}>{demo.propertysize}</span>
        </p>
        <p style={{display:'flex'}}>
        <FaCarSide  style={{fontSize:'18px',color:'#4888a3'}}/>
        <span style={{marginRight:'5%',marginLeft:'10%',fontSize:'14px'}}>Parking facility:</span><span style={{fontSize:'14px',fontWeight:'500'}}>{demo.parking}</span>
        </p>
        <p style={{display:'flex'}}>
        <PiArmchairLight  style={{fontSize:'18px',color:'#4888a3'}}/>
        <span style={{marginRight:'5%',marginLeft:'10%',fontSize:'14px'}}>Furnished :</span><span style={{fontSize:'14px',fontWeight:'500'}}>{demo.furnished}</span>
        </p>
        </Col>
        <Col sm={4}>
        <p style={{display:'flex'}}>
        <TbBrandCashapp  style={{fontSize:'18px',color:'#4888a3'}}/>
        <span style={{marginRight:'5%',marginLeft:'10%',fontSize:'14px'}}>Price :</span><span style={{fontSize:'14px',fontWeight:'500'}}>{demo.regularPrice}</span>
        </p>
        <p style={{display:'flex'}}>
        <BiSolidOffer  style={{fontSize:'18px',color:'#4888a3'}}/>
        <span style={{marginRight:'5%',marginLeft:'10%',fontSize:'14px'}}>Offer :</span><span style={{fontSize:'14px',fontWeight:'500'}}>{demo.offer}</span>
        </p>
       

        {demo.offer === 'yes' && (
          <p style={{display:'flex'}}>
          <TbBrandCashapp  style={{fontSize:'18px',color:'#4888a3'}}/>
          <span style={{marginRight:'5%',marginLeft:'10%',fontSize:'14px'}}>Offer price :</span><span style={{fontSize:'14px',fontWeight:'500'}}>{demo.discountPrice}</span>
          </p>
          )}

        </Col>
       </Row>

       <p style={{display:'flex'}}>
        <MdOutlineDescription style={{fontSize:'18px',color:'#4888a3'}}/>
        <span style={{marginRight:'2%',marginLeft:'3%',fontSize:'14px'}}>Description:</span><span style={{fontSize:'14px',fontWeight:'500'}}>{demo.description}</span>
        </p>
        <p style={{display:'flex'}}>
        <MdPlace style={{fontSize:'18px',color:'#4888a3'}}/>
        <span style={{marginRight:'2%',marginLeft:'3%',fontSize:'14px'}}>Address:</span><span style={{fontSize:'14px',fontWeight:'500'}}>{demo.address}</span>
        </p>

        <p style={{float:'right',marginTop:'-5%'}}>
        <LuHeart style={{fontSize:'22px',color:'red'}}/>
        
        </p>
        
       </Col>
       <Col sm={4} style={{border:'1px solid black',borderRadius:'10px',marginLeft:'5.5%',width:'31%',paddingTop:'3%'}}>
       {mailid.map((helo)=>(
          
 <div style={{marginLeft:'5%'}}>
{organizer.map((org)=>(

  <div>
  <h6 style={{marginBottom:'5%'}}>Agent Details</h6>
  <p><GiCalendarHalfYear style={{fontSize:'16px',color:'#4888a3'}}/> 
  <span style={{marginRight:'2%',marginLeft:'3%',fontSize:'14px'}}>Experience:</span><span style={{fontSize:'14px',fontWeight:'500'}}> {org.experience} Years</span>
  </p>
  <p><FaPhoneAlt style={{fontSize:'16px',color:'#4888a3'}}/> 
  <span style={{marginRight:'2%',marginLeft:'3%',fontSize:'14px'}}>Phone:</span><span style={{fontSize:'14px',fontWeight:'500'}}>+91 { demo.phone}</span>
  </p>
 <p><IoMdMail style={{fontSize:'16px',color:'#4888a3'}}/>
 <span style={{marginRight:'2%',marginLeft:'3%',fontSize:'14px'}}>Email:</span><span style={{fontSize:'14px',fontWeight:'500'}}>{ demo.email}</span>
 </p>
 <p onClick={handleWhatsAppButtonClick} style={{fontSize:'14px',color:'#4888a3'}}><IoLogoWhatsapp style={{fontSize:'14px',color:'#4888a3'}}/> Whatsapp me</p>
 <div style={{display:'flex'}}>
 <Link to={`/agent/${demo.email}`}><img src={helo.image} style={{width:'25px',height:'25px',borderRadius:'50%'}}></img></Link>
 <p style={{marginTop:'0%',fontSize:'14px',marginLeft:'15px'}}> {helo.name} usually responds within 5 minutes</p>
 </div>
 </div>
   ))}
  </div>

 ))}

  {/* <div style={{display:'flex'}}>
 <Button style={{backgroundColor:'#393d73',color:'white',border:'none',marginRight:'7px',height:'60px'}}><FaPhoneAlt /> +91{demo.phone}</Button>
 <Button style={{backgroundColor:'#393d73',color:'white',border:'none',marginRight:'7px',height:'60px'}} ><IoMdMail /> Email</Button>
 <Button style={{backgroundColor:'#25D366',color:'white',border:'none',marginRight:'7px',height:'60px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button>
 </div> */}
       </Col>
      </Row>
    </Container>
  </div>
  
    )}
    </div>
  )
}

export default Detail
