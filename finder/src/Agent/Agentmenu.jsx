import React, {  useEffect, useState } from 'react'

import '../components/Menu.css'
import { Button, Col, Container, Dropdown, Form, Modal, Nav, Navbar, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import LoginModal from '../User/LoginModal';
function Agentmenu() {
  const navigate = useNavigate();
  
  const [shows, setShows] = useState(false);
const [first,setfirst]= useState([]);
  
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);
  
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handleemail =(event)=>{
    setemail(event.target.value);
  };
  const handlepassword=(event)=>{
    setpassword(event.target.value);
  };
 

  const handleSubmit = async (event) => {
    const pemail=email;
    event.preventDefault();
    try {
      const display = await axios.post('http://localhost:4008/login', { email, password });
      console.log(display.data);
      const userData = display.data;
      localStorage.setItem('user', JSON.stringify(userData));
      
      handleCloses ();
      navigate(`/open/${pemail}`)
    } catch (error) {
      console.error('Axios Error:', error);
    }
  };
 
  useEffect(() => {
    const handleItems = async () => {
      try {
        const response = await axios.get('http://localhost:4008/getpro');
        setfirst(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    handleItems();
  }, []);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{display:'flex'}}>
        <Container  style={{marginLeft:'10%'}}>
        {/* <Link to="/" style={{textDecoration:'none'}}><img src={logo} width={'150px'} height={'100px'}></img></Link> */}
        <Link to="/" style={{textDecoration:'none'}}><p className='logo'>D<span style={{fontSize:'20px'}}>ream</span>H<span style={{fontSize:'20px'}}>ome</span></p></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'10%'}}>
         
            <Nav.Link href={`/buy/Buy`} className='meenu'>Buy</Nav.Link>
            <Nav.Link href={`/rent/Rent`}  className='meenu'>Rent</Nav.Link>
            <Nav.Link href={`/commercial/commercial`}  className='meenu'>Commercial</Nav.Link>
            {/* <Nav.Link href="#pricing"  className='meenu'>New projects</Nav.Link> */}
            <Nav.Link href={`/findagent`}  className='meenu'>Find agent</Nav.Link>
       
            <Nav.Link href={`/`}  style={{color:'#EF5E4E'}}>Logout</Nav.Link>
    {/* <Link to='/' style={{textDecoration:'none'}}><button style={{color:'white',backgroundColor:'#EF5E4E',border:'none'}} >Logout</button></Link> */}
   
 

{/* <Nav.Link href={`/findagent`}  className='meenu'>Become an Agent</Nav.Link> */}
{/* <div class="dropdown" style={{textAlign:'center'}}>
  <button class="dropbtn"  onClick={handleShows}>Become an Agent</button>
  <div class="dropdown-content" style={{backgroundColor:'transparent',border:'1px solid black'}}>
  
    <button style={{color:'black',backgroundColor:'transparent',border:'none'}} onClick={handleShows}>Login</button>
    <Link to='/sign' style={{textDecoration:'none'}} className='meenu'>Create new account</Link>
  </div>
</div> */}
            </Nav>
           
          
        </Navbar.Collapse>
        </Container>
       
      </Navbar>
 {/* * */}

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Property Finder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
<Col>
<img src={imgs}/>
        <p className='view' style={{color:'black'}}>View saved properties 
Keep search history across devices
See which properties you have contacted</p>
        </Col>
        <Col>

        
<Form onSubmit={handleSubmits} style={{paddingTop:'10%'}}>

    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Email</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your email"
      value={email}
      onChange={handleemails}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Password</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter password"
      value={password}
      onChange={handlepasswords}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>
   

    <Button 
    type="submit" style={{backgroundColor:'#ef5e4e',border:'none'}}  >
    Login
    </Button>
  </Form>
     

        </Col>
      </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor:'#ef5e4e',border:'none'}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} style={{textDecoration:'none',color:'white',backgroundColor:'#ef5e4e',border:'none'}}>
           <Link to='/2' style={{textDecoration:'none',color:'white'}}> Signup</Link>
          </Button>
        </Modal.Footer>
       
      </Modal> */}
     
{/*  */}
{/* agent login modal */}

<Modal show={shows} onHide={handleCloses}>
        <Modal.Header closeButton>
          <Modal.Title>Become an Agent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Form onSubmit={handleSubmit} >
    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Email</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your email"
      value={email}
      onChange={handleemail}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Password</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter password"
      value={password}
      onChange={handlepassword}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>
    <Button 
    type="submit" style={{backgroundColor:'#ef5e4e',border:'none'}}  >
    Login
    </Button>
    <Button variant="secondary" onClick={handleCloses} style={{backgroundColor:'#ef5e4e',border:'none',float:'right'}}>
            Close
          </Button>
  </Form>
        </Modal.Body>
      </Modal>
</div>
  )
}

export default Agentmenu