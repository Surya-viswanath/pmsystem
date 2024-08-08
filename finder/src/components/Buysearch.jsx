
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Lottie from "lottie-react";
import { FaSearch } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
// import loadingAnimation from "../../assets/animation/animation.json";
// import Eventcard from './Eventcard';
import { CiLocationOn } from "react-icons/ci";
import './Rent.css';
// import './Event.css';
// import Eventbanner from './Eventbanner';
import { Card, Col,    Container,    Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { BsDiagram3, BsTwitterX } from "react-icons/bs";
import './Menu.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Buysearch() {
    
    const [first, setFirst] = useState([]);
// search
const [searchTerm, setSearchTerm] = useState("");
    const [allEvents, setAllEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

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
  
    
  
    // const sells = Buy;
//   console.log(sells);
    
  const filteredData = first.filter((item) => item.sell === 'Buy');
  

  
    
    

    // const formatDate = (dateString) => {
    //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
    //     return new Date(dateString).toLocaleDateString(undefined, options);
    // };

    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:4000/events");
    //             setAllEvents(response.data);
    //             setFilteredEvents(response.data);
    //             setIsLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchEvents();
    // }, []);

    const Apartments =filteredData.filter(item => item.type === 'Apartments');
    const Villas = filteredData.filter(item => item.type === 'Villas');
    const Townhouses= filteredData.filter(item => item.type === 'Townhouses');
    const Land= filteredData.filter(item => item.type === 'Land');
    const Bungalows = filteredData.filter(item => item.type === 'Bungalows');
    const HotelApartments = filteredData.filter(item => item.type === 'Hotel Apartments');
    const Compounds = filteredData.filter(item => item.type === 'Compounds');
    const FullFloors = filteredData.filter(item => item.type === 'Full Floors');
    const HalfFloors = filteredData.filter(item => item.type === 'Half Floors');

    // onClick={() => setFilteredEvents(technology)}

    const handleSearch = (e) => {
        e.preventDefault();
        const searchResult = allEvents.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEvents(searchResult);
    };

  

   
    return (
        <div style={{margin:'0%'}}>
            {/* <Eventbanner /> */}
        
 {/* <Container  style={{ backgroundColor:'black' ,padding:'5% 0%',backgroundSize:'cover'}}>
      <Row>
      <Col>
        <h2 className="text-5xl text-white font-bold">Events</h2>
        <Link to='/' style={{color:'#9C0C0D'}}>Home</Link>
      
        </Col>
      </Row>
    </Container> */}

            <Container >
            <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mt-10 uppercase">
                All Events
            </h2>
            {/* <div style={{display:'flex'}}>
                <div>
                <form
                            onSubmit={handleSearch}
                            className="flex bg-gray-50 p-5 shadow-md rounded-md"
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="Search by name"
                                className="w-full px-4 py-3 border rounded-3xl outline-none border-none bg-gray-200 "
                                style={{color:'gray'}}
                                onInput={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="submit"
                                className=" text-white py-3 px-8 rounded-3xl rounded-tl-none -ml-8 text-2xl font-bold"
                                style={{backgroundColor:'#9C0C0D'}}
                            >
                                <FaSearch />
                            </button>
                        </form>
                        </div>
                    <div className="bg-gray-50 shadow-md rounded-md " style={{alignItems:'left'}}>
                        <div className=""  >
                            <span className="inline-flex   text-white text-xl font-bold p-3 rounded-r-xl"  style={{backgroundColor:'#9C0C0D',marginLeft:'-57%'}}>
                                <TbCategory2 /> Category
                            </span>
                        </div>
                        <div className="mt-3">
                            <button
                                className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
                                onClick={() => setFilteredEvents(allEvents)}
                            >
                                All
                            </button>
                            <button
                                className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
                                onClick={() => setFilteredEvents(technology)}
                            >
                                Technology
                            </button>
                            <button
                                className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
                                onClick={() => setFilteredEvents(health)}
                            >
                                Health
                            </button>
                            <button
                                className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
                                onClick={() => setFilteredEvents(business)}
                            >
                                Business
                            </button>
                            <button
                                className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl"
                                onClick={() => setFilteredEvents(others)}
                            >
                                Others
                            </button>
                        </div>
                    </div>
                    <div>
                        <button style={{backgroundColor:'#393d73',color:'white',border:'none',borderRadius:'5px',height:'40px'}}>Type</button>
                        <button>Beds</button>
                        <button>Baths</button>
                        <button>Price</button>
                    </div>

</div> */}
           
           <Navbar collapseOnSelect expand="lg" >
      <Container >
      <form onSubmit={handleSearch} className="flex bg-gray-50 shadow-md rounded-md">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search by place"
                                className="w-full px-1 py-2 border rounded-3xl outline-none border-none bg-gray-200 "
                                style={{color:'gray',borderRadius:'5px 0px 0px 5px'}}
                                onInput={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="submit"
                                className=" text-white  rounded-3xl rounded-tl-none -ml-8 text-2xl font-bold"
                                style={{backgroundColor:'#393d73',borderRadius:'0px 5px 5px 0px'}}
                            >
                                <FaSearch />
                            </button>
                        </form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'2%'}}>
     <NavDropdown title="Type" id="collapsible-nav-dropdown" style={{border:'1px solid #393d73',borderRadius:'5px'}}>
              <NavDropdown.Item href="#action/3.1" className='meenu1'>Apartments</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className='meenu1'>villas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='meenu1'>Townhouses </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='meenu1'>Land</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.4" className='meenu1'>Bungalows </NavDropdown.Item>
             <NavDropdown.Item href="#action/3.1" className='meenu1'>Hotel Apartments</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.1" className='meenu1'>Compounds</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.1" className='meenu1'>Full Floors</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.1" className='meenu1'>Half Floors</NavDropdown.Item>
            </NavDropdown>
     <NavDropdown title="Beds" id="collapsible-nav-dropdown" className='meenu'  style={{border:'1px solid #393d73',borderRadius:'5px',marginLeft:'4%'}}>
              <NavDropdown.Item href="#action/3.1" className='meenu1'>1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='meenu1'>2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='meenu1'>3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className='meenu1'>4</NavDropdown.Item>
            </NavDropdown>
     <NavDropdown title="Price" id="collapsible-nav-dropdown" className='meenu'  style={{border:'1px solid #393d73',borderRadius:'5px',marginLeft:'4%'}}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
                           
                    <div className="gallery">
  
     {filteredData.map(data => (
      <div>
       <Link to={`/detail/${data._id}/${data.email}`} style={{textDecoration:'none'}}>
      <div key={data.id} className="image-item">
       
        <img src={data.image} alt={data.title}/>
        <p>{data.title}</p>
        <p  style={{color:'#707070'}}>{data.type} , {data.sell}</p>
<p style={{color:'black'}}>
{data.regularPrice} <br></br>
{data.description}
</p>
<p  style={{color:'#707070'}}><CiLocationOn />{data.address}</p>

      </div>
      </Link>
      </div>
    ))}
   
  </div>
           
           
            </Container>
           
        </div>
    );
}

export default Buysearch;
