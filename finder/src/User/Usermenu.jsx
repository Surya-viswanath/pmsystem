import React, {  useEffect, useRef, useState } from 'react'
import '../components/Menu.css'
import { Button, Col, Container, Dropdown, Form, Modal, Nav, Navbar, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { LuCommand } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import LoginModal from '../User/LoginModal';
import { useAuth } from '../auth/AuthContext';
import toast from "react-hot-toast";
import { FiAlignJustify, FiLogOut, FiUser } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

function Usermenu() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [shows, setShows] = useState(false);
const [first,setfirst]= useState([]);
const [dropdownOpen, setDropDown] = useState(false);
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
      navigate(`/open/${pemail}`)
      handleCloses ();
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

  
  const imgRef = useRef();
  const dropdownRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== dropdownRef.current && e.target !== imgRef.current) {
      setDropDown(false);
    }
  });
  const handleDropDown = () => {
    setDropDown(!dropdownOpen);
  };
  const logOutHandler = () => {
    logout();
    navigate('/')
    toast.success('Successfully Logout')
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{display:'flex'}}>
        <Container  style={{marginLeft:'10%'}}>
     
        <Link to="/" style={{textDecoration:'none'}}><p className='logo'>D<span style={{fontSize:'20px'}}>ream</span>H<span style={{fontSize:'20px'}}>ome</span></p></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'20%'}}>
         
            <Nav.Link href={`/buy/Buy`} className='meenu'>Buy</Nav.Link>
            <Nav.Link href={`/rent/Rent`}  className='meenu'>Rent</Nav.Link>
            <Nav.Link href={`/commercial/commercial`}  className='meenu'>Commercial</Nav.Link>
            <Nav.Link href={`/all`}  className='meenu'>Properties</Nav.Link>
            <Nav.Link href={`/findagent`}  className='meenu'>Find agent</Nav.Link>
            {/* <div class="dropdown" style={{textAlign:'center'}}>
  <button class="dropbtn"  >Account</button>
  <div class="dropdown-content"> */}
  {/* <Link to='/Login' style={{textDecoration:'none'}}><p style={{textAlign:'center',paddingTop:'10%'}}>MY Account</p></Link>
    <Link to='/2' style={{textDecoration:'none'}} className='meenu'>Wishlist</Link> */}
    {/* <Link to='/' style={{textDecoration:'none'}}><button className="sign" style={{color:'white'}} >Logout</button></Link>
    

  </div>
</div> */}



{user ? (
    <div className="relative flex items-center" style={{marginLeft:'30px'}}>
      <div className="relative" >
        <img
          ref={imgRef}
          onClick={handleDropDown}
          src={user?.image}
          className="rounded-full w-10 h-10 cursor-pointer"
        />
        <ul
          ref={dropdownRef}
          className={`absolute py-2 px-1 z-1000 m-0 min-w-max overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg w-40 ${
            dropdownOpen ? 'block left-auto right-0' : 'hidden'
          }`}
        >
          {user?.role === 'admin' && (
            <li>
              <Link
                to="/dashboard/profile"
                className="Linko rounded w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent flex items-center gap-2"
              >
                <FiUser className="inline-block" size={15} />
                Profile
              </Link>
            </li>
          )}
          {user?.role === 'user' && (
            <li>
              <Link
                to="/dashboard/profile"
                className="Linko rounded w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent flex items-center gap-2"
              >
                <FiUser className="inline-block" size={15} style={{color:'red'}}/>
               Profile
              </Link>
            </li>
          )}
          {user?.role === 'organizer' && (
            <li>
              <Link
                to="/dashboard/profile"
                className="Linko rounded w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent flex items-center gap-2"
              >
                <FiUser className="inline-block" size={15} />
                Profile
              </Link>
            </li>
          )}
          {/* {user && (
            <li>
              <Link
                to="/profile"
                className="Linko rounded w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent flex items-center gap-2"
              >
                <FiUser className="inline-block" size={15} />
                Profile
              </Link>
            </li>
          )} */}
          <li>
            <button
              onClick={logOutHandler}
              style={{marginLeft: '25px',backgroundColor:'#393d73',color:'white',border:'none',borderRadius: '5px',padding:'5px',fontSize:'14px'}}
            >
              <FiLogOut />
              LogOut
            </button>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <Link
        to="/login"
        type="button"
        className="Linko inline-block rounded bg-primary/10 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary/90 transition duration-150 ease-in-out hover:bg-primary/20 focus:bg-primary/30 focus:outline-none focus:ring-0 active:bg-primary/20"
      >
        Login
      </Link>
      <Link
        to="/register"
        type="button"
        className="Linko inline-block rounded bg-primary/10 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary/90 transition duration-150 ease-in-out hover:bg-primary/20 focus:bg-primary/30 focus:outline-none focus:ring-0 active:bg-primary/20 w-100"
      >
        Sign Up
      </Link>
    </div>
)}

            </Nav>
           
          
        </Navbar.Collapse>
        </Container>
       
      </Navbar>


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

export default Usermenu
