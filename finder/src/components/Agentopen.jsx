import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { BiBuildings } from "react-icons/bi";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { PiBathtub } from "react-icons/pi";
import axios from 'axios';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { PiCoatHangerLight } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";
import { BiDumbbell } from "react-icons/bi";
import { MdChair } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineBed } from "react-icons/md";
import { MdStars } from "react-icons/md";

import { GiResize } from "react-icons/gi";

function Agentopen() {

    const navigate= useNavigate();
  const {pemail}=useParams();
  const [first, setfirst] = useState([])
  const [second, setsecond] = useState([])
  const [show, setShow] = useState(false);
  const [about, setAbout] = useState(false);
  const [phone, setPhone] = useState(false);
  const [mail, setMail] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCabout = () => setAbout(false);
    const handleAbout= () => setAbout(true);

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
       const responses = await axios.get('http://localhost:4008/getagent')     
     setsecond(responses.data)
    //  console.log(second);
     }
     catch{ 
     }
   }
   agent();
  },[]);

  const getmail=pemail;
 const property = first.filter((item)=>item.email===getmail)
//  console.log(property);


const mailid = second.filter((item)=>item.email===getmail)

  // console.log(mailid);

 const handleWhatsAppButtonClick = () => {
  const phoneNumber = mailid[0].phone; 
  // console.log(phoneNumber)
  const message = 'Hello! I am interested in your product.'; // Optional: Replace with a predefined message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
};


  return (
    <div >
        <div>
        <Container style={{backgroundColor:'#F6F7FB',alignItems:'center'}}>
{mailid.map((helo)=>(
      // 
      <Row className="justify-content-md-center" style={{paddingTop:'10%',paddingBottom:'10%'}}>
        {/* <Col style={{width:'50%'}}> */}
        <Col xs lg="2">
          <img src={helo.profile} style={{borderRadius:'50%',height:'100%'}}></img>
          </Col>
        {/* <Col style={{width:'50%'}}> */}
        <Col md="auto" style={{marginLeft:'6%',paddingTop:'2%'}}>
        <h2>{helo.name}</h2>
        <h6>A bit about me</h6>
        <p style={{fontSize:'14px',color:'#707070'}}>Nationality :  <span style={{color:'black'}}>  {helo.nationality}</span><br></br>
        Languages : <span style={{color:'black'}}>   {helo.languages}</span> <br></br>
        Experience Since : <span style={{color:'black'}}>  {helo.experience}</span><br></br>
        </p>
       <Link to={`/getone/${helo.email}`}> <button style={{backgroundColor:'white',color:'#EF5E4E',border:'1px solid #EF5E4E',borderRadius:'50%',marginRight:'7px',marginTop:'5px',height:'40px',width:'110px'}}>Properties</button></Link>
        <button style={{backgroundColor:'white',color:'#EF5E4E',border:'1px solid #EF5E4E',borderRadius:'50%',marginRight:'7px',marginTop:'5px',height:'40px',width:'80px'}} onClick={handleShow}>Contact</button>
       <button style={{backgroundColor:'white',color:'#EF5E4E',border:'1px solid #EF5E4E',borderRadius:'50%',marginRight:'7px',marginTop:'5px',height:'40px',width:'110px'}}  onClick={handleAbout}>About me </button>
        <Link to="/adding" style={{textDecoration:'none'}}><button style={{backgroundColor:'white',color:'#EF5E4E',border:'1px solid #EF5E4E',borderRadius:'50%',marginRight:'7px',marginTop:'5px',height:'40px',width:'155px'}}>Add new Property</button></Link>
        </Col>
      </Row>
      
      ))}
      </Container>
{/* * */}

{mailid.map((helo)=>(
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
<Button style={{backgroundColor:'#EF5E4E',color:'white',border:'none',marginBottom:'7px',height:'60px'}} onClick={()=>setPhone(!phone)}>   {phone ? <p>+91{helo.phone}</p> : <p><FaPhoneAlt /> </p>}</Button>

<Button style={{backgroundColor:'#EF5E4E',color:'white',border:'none',marginBottom:'7px',height:'60px'}} onClick={()=>setMail(!mail)}>  {mail ? <p>{helo.email}</p> : <p> <IoMdMail /></p>}</Button>
<Button style={{backgroundColor:'#25D366',color:'white',border:'none',marginBottom:'7px',height:'60px'}} onClick={handleWhatsAppButtonClick}><IoLogoWhatsapp /> Whatsapp</Button>
        
      </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor:'#ef5e4e',border:'none'}}>
            Close
          </Button>
         
          
        </Modal.Footer>
       
      </Modal>
      ))}

{/* ----- */}
{mailid.map((helo)=>(
<Modal show={about} onHide={handleCabout}>
        <Modal.Header closeButton>
          <Modal.Title>About me</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'#F6F7FB'}}>
        <Row>
<p>{helo.details}</p>
      </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCabout} style={{backgroundColor:'#ef5e4e',border:'none'}}>
            Close
          </Button>
         
          
        </Modal.Footer>
       
      </Modal>
      ))}
</div>
    </div>
  )
}

export default Agentopen
