// import React, {  useEffect, useRef, useState } from 'react'
// import './Menus.css'
// import { Button, Col, Container, Dropdown, Form, Modal, Nav, Navbar, Row } from 'react-bootstrap'
// import axios from 'axios'
// import { Link, useNavigate } from 'react-router-dom';
// import toast from "react-hot-toast";
// import { FiAlignJustify, FiLogOut, FiUser } from "react-icons/fi";
// // import logo from './logodream.avif';
// import imgs from './signin.svg';
// import { FaRegHeart } from "react-icons/fa";
// import LoginModal from '../User/LoginModal';
// import { LuCommand } from "react-icons/lu";
// import { useAuth } from '../auth/AuthContext';


// function Menus() {
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();
//   const [shows, setShows] = useState(false);
// const [first,setfirst]= useState([]);
// const [dropdownOpen, setDropDown] = useState(false);
  
//   const handleCloses = () => setShows(false);
//   const handleShows = () => setShows(true);
  
//   // const { basename = '' } = useContext(SomeContext) || {};
//   const [name, setname] = useState('');
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//   const handleemail =(event)=>{
//     setemail(event.target.value);
//   };
//   const handlepassword=(event)=>{
//     setpassword(event.target.value);
//   };
 

//   const handleSubmit = async (event) => {
//     const pemail=email;
//     event.preventDefault();
//     try {
//       const display = await axios.post('http://localhost:4008/login', { email, password });
//       console.log(display.data);
//       const userData = display.data;
//       localStorage.setItem('user', JSON.stringify(userData));
      
//       handleCloses ();
//       navigate(`/open/${pemail}`)
//     } catch (error) {
//       console.error('Axios Error:', error);
//     }
//   };
//   useEffect(() => {
//     const handleItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:4008/getpro');
//         setfirst(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     handleItems();
//   }, []);


//   const imgRef = useRef();
//   const dropdownRef = useRef();
//   window.addEventListener("click", (e) => {
//     if (e.target !== dropdownRef.current && e.target !== imgRef.current) {
//       setDropDown(false);
//     }
//   });
//   const handleDropDown = () => {
//     setDropDown(!dropdownOpen);
//   };
//   const logOutHandler = () => {
//     logout();
//     navigate('/')
//     toast.success('Successfully Logout')
//   };
//   return (
// //     <div>
// //       <Navbar collapseOnSelect expand="lg" style={{display:'flex'}}>
// //         <Container>
// //         <Link to="/adminlogin" style={{textDecoration:'none'}}><p className='logo'>D<span style={{fontSize:'20px'}}>ream</span>H<span style={{fontSize:'20px'}}>ome</span></p></Link>
// //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //         <Navbar.Collapse id="responsive-navbar-nav">
// //           <Nav  style={{marginLeft:'15%'}}>
         
// //             <Nav.Link href={`/buy/Buy`} className='meenus'>Buy</Nav.Link>
// //             <Nav.Link href={`/rent/Rent`}  className='meenus'>Rent</Nav.Link>
// //             <Nav.Link href={`/commercial/commercial`}  className='meenus'>Commercial</Nav.Link>
// //             {/* <Nav.Link href="#pricing"  className='meenu'>New projects</Nav.Link> */}
// //             <Nav.Link href={`/findagent`}  className='meenus'>Find agent</Nav.Link>
// //             <div class="dropdown" style={{textAlign:'center'}}>
// //   <button class="dropbtn"  >Login</button>
// //   <div class="dropdown-content">
// //     <p style={{textAlign:'center',paddingTop:'10%'}}>Sign in or register to sync your favorite properties across devices</p>
// //     <Link to='/Login' style={{textDecoration:'none'}}><button className="sign" style={{color:'white'}} >Sign in</button></Link>
// //     <Link to='/2' style={{textDecoration:'none'}} className='meenus'>Create new account</Link>
// //     <a href="#"  className='meenus'>Saved properties</a>
// //   </div>
// // </div>
// // {/* <Nav.Link href={`/findagent`}  className='meenu'>Become an Agent</Nav.Link> */}
// // <div class="dropdown" style={{textAlign:'center'}}>
// //   <button class="dropbtn"  onClick={handleShows}>Become an Agent</button>
// //   <div class="dropdown-content" style={{backgroundColor:'transparent',border:'1px solid black'}}>
// //   {/* <Link to='/sign' style={{textDecoration:'none'}} className='meenu' onClick={handleShows}>Login</Link> */}
// //     <button style={{color:'black',backgroundColor:'transparent',border:'none'}} onClick={handleShows}>Login</button>
// //     <Link to='/sign' style={{textDecoration:'none'}} className='meenus'>Create new account</Link>
// //   </div>
// // </div>

    
// //             </Nav>
           
          
// //         </Navbar.Collapse>
// //         </Container>
       
// //       </Navbar>
 


// // <Modal show={shows} onHide={handleCloses}>
// //         <Modal.Header closeButton>
// //           <Modal.Title>Become an Agent</Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// // <Form onSubmit={handleSubmit} >
// //     <Form.Group className="mb-3" controlId="formBasicemail">
// //       <Form.Label>Email</Form.Label>
// //       <Form.Control
// //       type="text"
// //       placeholder="Enter your email"
// //       value={email}
// //       onChange={handleemail}
// //       required
// //       style={{fontSize: '14px',color:'#707070b5'}}
// //       />
// //     </Form.Group>
// //     <Form.Group className="mb-3" controlId="formBasicname">
// //       <Form.Label>Password</Form.Label>
// //       <Form.Control
// //       type="text"
// //       placeholder="Enter password"
// //       value={password}
// //       onChange={handlepassword}
// //       required
// //       style={{fontSize: '14px',color:'#707070b5'}}
// //       />
// //     </Form.Group>
// //     <Button 
// //     type="submit" style={{backgroundColor:'#ef5e4e',border:'none'}}  >
// //     Login
// //     </Button>
// //     <Button variant="secondary" onClick={handleCloses} style={{backgroundColor:'#ef5e4e',border:'none',float:'right'}}>
// //             Close
// //           </Button>
// //   </Form>
// //         </Modal.Body>
// //       </Modal>
// // </div>
// //   )
// // }



// )
// }


// export default Menus


import React, {  useEffect, useRef, useState } from 'react'
import './Menus.css'
import { Button, Col, Container, Dropdown, Form, Modal, Nav, Navbar, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { FiAlignJustify, FiLogOut, FiUser } from "react-icons/fi";
// import logo from './logodream.avif';
import imgs from './signin.svg';
import { FaRegHeart } from "react-icons/fa";
import LoginModal from '../User/LoginModal';
import { LuCommand } from "react-icons/lu";
import { useAuth } from '../auth/AuthContext';


function Menus() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [shows, setShows] = useState(false);
const [first,setfirst]= useState([]);
const [dropdownOpen, setDropDown] = useState(false);
  
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);
  
  // const { basename = '' } = useContext(SomeContext) || {};
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
      <Navbar collapseOnSelect expand="lg" >
        <Container  style={{marginLeft:'10%'}}>
        {/* <Link to="/" style={{textDecoration:'none'}}><img src={logo} width={'150px'} height={'100px'}></img></Link> */}
        <Link to="/adminlogin" style={{textDecoration:'none'}}><p className='logo'>D<span style={{fontSize:'20px'}}>ream</span>H<span style={{fontSize:'20px'}}>ome</span></p></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'5%'}}>
         
            <Nav.Link href={`/buy/Buy`} className='meenu'>Buy</Nav.Link>
            <Nav.Link href={`/rent/Rent`}  className='meenu'>Rent</Nav.Link>
            <Nav.Link href={`/commercial/commercial`}  className='meenu'>Commercial</Nav.Link>
            {/* <Nav.Link href="#pricing"  className='meenu'>New projects</Nav.Link> */}
            <Nav.Link href={`/findagent`}  className='meenu'>Find agent</Nav.Link>
            <div class="dropdown" style={{textAlign:'center',marginLeft:'250px'}}>
  <button class="dropbtn"  >Login</button>
  <div class="dropdown-content">
    <p style={{textAlign:'center',paddingTop:'10%'}}>Sign in or register to sync your favorite properties across devices</p>
    <Link to='/Login' style={{textDecoration:'none'}}><button className="sign" style={{color:'white'}} >Sign in</button></Link>
    <Link to='/2' style={{textDecoration:'none'}} className='meenu'>Create new account</Link>
    <a href="#"  className='meenu'>Saved properties</a>
  </div>
</div>
{/* <Nav.Link href={`/findagent`}  className='meenu'>Become an Agent</Nav.Link> */}
<div class="dropdown" style={{textAlign:'center'}}>
  <button class="dropbtn"  onClick={handleShows}>Become an Agent</button>
  <div class="dropdown-content" style={{backgroundColor:'transparent',border:'1px solid black'}}>
  {/* <Link to='/sign' style={{textDecoration:'none'}} className='meenu' onClick={handleShows}>Login</Link> */}
    <button style={{color:'black',backgroundColor:'transparent',border:'none'}} onClick={handleShows}>Login</button>
    <Link to='/sign' style={{textDecoration:'none'}} className='meenu'>Create new account</Link>
  </div>
</div>


{/* {user ? (
            <div className="relative flex items-center">
              
              <div className="relative">
                <img
                  ref={imgRef}
                  onClick={handleDropDown}
                  src={user?.image}
                  className="rounded-full w-10 h-10 cursor-pointer"
                />
                <ul
                  ref={dropdownRef}
                  className={`absolute py-2 px-1 z-[1000] m-0  min-w-max overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg  w-40 ${dropdownOpen ? "block left-auto right-0" : "hidden"
                    }`}
                >
                  {user?.role === "admin" && (
                    <li>
                      <Link
                        to="/dashboard/admin"
                        className="rounded w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent 
                                            flex items-center gap-2
                                            "
                      >
                        <LuCommand className="inline-block" size={15} />
                        Admin Dashboard
                      </Link>
                    </li>
                  )}

                  {user?.role === "user" && (
                    <li>
                      <Link
                        to="/dashboard/user"
                        className="rounded w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent 
                                            flex items-center gap-2
                                            "
                      >
                        <LuCommand className="inline-block" size={15} />
                        User Dashboard
                      </Link>
                    </li>
                  )}

                  {user?.role === "organizer" && (
                    <li>
                      <Link
                        to="/dashboard"
                        className="rounded w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent 
                                            flex items-center gap-2
                                            "
                      >
                        <LuCommand className="inline-block" size={15} />
                        Organizer Dashboard
                      </Link>
                    </li>
                  )}

                  {user && (
                    <li>
                      <Link
                        to="/dashboard/profile"
                        className="rounded w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent 
                                            flex items-center gap-2
                                            "
                      >
                        <FiUser className="inline-block" size={15} />
                        Profile
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={logOutHandler}
                      className="rounded w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent
                                        flex items-center gap-2
                                        "
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
                className="inline-block rounded bg-primary/10 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary/90 transition duration-150 ease-in-out hover:bg-primary/20 focus:bg-primary/30 focus:outline-none focus:ring-0 active:bg-primary/20"
              >
                Login
              </Link>
              
               <Link
                to="/register"
                type="button"
                className="inline-block rounded bg-primary/10 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary/90 transition duration-150 ease-in-out hover:bg-primary/20 focus:bg-primary/30 focus:outline-none focus:ring-0 active:bg-primary/20"
              style={{width:'100px'}}>
              Sign Up
              </Link>
            </div>
          )} */}
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

export default Menus