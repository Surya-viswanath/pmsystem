import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row} from 'react-bootstrap';
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
import { useAuth } from '../auth/AuthContext';

function Findagent() {
  const { user } = useAuth();
  const [first, setFirst] = useState([])
  
  const [second, setsecond] = useState([]);
  useEffect(()=>{
    const agent =async()=>{
     try{
       const responses = await axios.get('http://localhost:4008/getcustomer')     
     setsecond(responses.data)
     console.log(second);
     }
     catch{ 
     }
   }
   agent();
  },[]);

  const email = user.email;
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

// console.log(sells);
  
const filteredData = first.filter((item) => item.email === email);
  return (
//  <div style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}> 
//       <h2>Find Agents</h2>
//     <div className="gallery" >
    
//        {second .filter(data => data.role === 'organizer')
//        .map(data => (
     
//         <div style={{}}>
        
//         <div key={data.id}  style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',borderRadius:'6%',height:'300px'}}>
//          <div>
//           <img src={data.image} alt={data.title} style={{maxWidth:'100px',height:'100px'}}/>

//           </div>
//           <div style={{marginLeft:'3%'}}>
//           <p style={{fontSize:'28px'}}>{data.name}</p>
//           <p  style={{color:'#707070',fontSize:'17px'}}>Property Consultant</p>
// <p style={{color:'#707070'}}>
// Nationality :<span style={{color:'black'}}>{data.nationality} </span> <br></br>
// Languages : <span style={{color:'black'}}>{data.languages}</span>
// </p>

// <Link to={`/getone/${data.email}`}> <button style={{backgroundColor:'white',color:'#EF5E4E',border:'1px solid #EF5E4E',borderRadius:'50%',marginRight:'7px',height:'40px',width:'110px'
  
// }}>Properties</button></Link>
// </div>
//         </div>
      
//         </div>
//       ))}
     
//     </div>
//     </div>


<div>
{/* // <div style={{marginTop:'2%',marginLeft:'2%',marginRight:'2%'}}>  */}
<h2>Explore properties</h2>

{/* buy */}

<Row style={{margin:'1%'}}>
  {/* <Row> */}
    {second.length > 0 ? (
        second .filter(data => data.role === 'organizer')
    .map(data => (
        <Col xs={12} sm={6} md={4} lg={3} key={data._id}>
          {/* <Card className="image-item"> */}
          <Card style={{width:'18rem',height:'350px',marginBottom:'4%',borderRadius:'10px'}}>
          
          <img src={data.image} alt={data.title} style={{maxWidth:'100px',height:'100px',textAlign:'center',marginTop:'5%',marginLeft:'2%'}}/>
              <Card.Body>
                <Card.Text className='textp'>
                <p  style={{color:'#707070',fontSize:'17px'}}>Property Consultant</p>
                  <p>{data.name}</p>
                  <p style={{ color: '#707070' }}>{data.phone}</p>
                  <p style={{ color: 'black' }}>
                   {data.email}
                  </p>
                  

<Link to={`/prop`}> <button style={{backgroundColor:'white',color:'#EF5E4E',border:'1px solid #EF5E4E',borderRadius:'50%',marginRight:'7px',height:'40px',width:'110px'
  
 }}>Properties</button></Link>
                </Card.Text>
              </Card.Body>
           
          </Card>
        </Col>
      ))
    ) : (
      <p>No properties found</p>
    )}
  </Row>
</div>



  
  );
}
 
export default Findagent;