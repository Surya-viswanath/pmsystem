import React, {  useEffect, useState } from 'react'

import '../components/Menu.css'
import { Button, Col, Container, Dropdown, Form, Modal, Nav, Navbar, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import LoginModal from '../User/LoginModal';
function Adminmenu() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{display:'flex'}}>
        <Container  style={{marginLeft:'10%'}}> 
        <Link to="" style={{textDecoration:'none'}}><p className='logo'>D<span style={{fontSize:'20px'}}>ream</span>H<span style={{fontSize:'20px'}}>ome</span></p></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'10%'}}>
         
            <Nav.Link href={`/agentlist`} className='meenu'>Agents</Nav.Link>
            <Nav.Link href={`/userlist`}  className='meenu'>Users</Nav.Link>
            <Nav.Link href={`/propertylist`}  className='meenu'>Properties</Nav.Link>
           
       
            <Nav.Link href={`/`}  style={{color:'#EF5E4E'}}>Logout</Nav.Link>
    

            </Nav>
           
          
        </Navbar.Collapse>
        </Container>
       
      </Navbar>
 
</div>
  )
}

export default Adminmenu