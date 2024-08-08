import React, { useState } from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import './Signup.css'
import { useNavigate } from 'react-router-dom';

function Signupp() {
 const navigate = useNavigate();
const [name, setname] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [nationality, setnationality] = useState('');
const [languages, setlanguages] = useState('');
const [experience, setexperience] = useState('');
const [details, setdetails] = useState('');
const [phone, setphone] = useState('');
const [profile, setprofile] = useState([]);

const handlename =(event)=>{
    setname(event.target.value);
  };
  const handleemail =(event)=>{
    setemail(event.target.value);
  };
  const handlepassword=(event)=>{
    setpassword(event.target.value);
  };
  const ispasswordValid = (event)=>{
    return password.length >=6;
  };
  const handlenationality=(event)=>{
    setnationality(event.target.value);
  };
  const handlelanguages=(event)=>{
    setlanguages(event.target.value);
  };
  const handleexperience=(event)=>{
    setexperience(event.target.value);
  };
  const handledetails=(event)=>{
    setdetails(event.target.value);
  };
  const handlephone=(event)=>{
    setphone(event.target.value);
  };
  const handleprofile=(event)=>{
    setprofile(event.target.value);
  };

  const nationalities = [
    'American',
    'Australian',
    'Belgian',
    'British',
    'Canadian',
    'Chinese',
    '	Egyptian',
    'English',
    'French',
    'German',
    'Indian',
    '	Indonesian',
    'Iranian',
    '	Italian',
    '	Japanese',
    'Malaysian',
    'Malaysian',
    'Mexican',
    '	Moroccan',
    'Nepalese',
    'Nigerian',
    'North korean',
    'Omani',
    'Pakistani',
    'Qatari',
    '	Russian',
    'Saudi Arabian',
    '	Sri Lankan',
    
  ];
 
const handleSubmit =async(event)=>{
  const pname=name;
  const pemail=email;
    event.preventDefault()
    try{
    const display =await axios.post('http://localhost:4008/createagent',{name,email, password,nationality,languages,experience,details,phone,profile})
    console.log(display.data)}
    catch{ 
    }
    navigate(`/open/${pname}/${pemail}`);
  }

 
return (
    <div className='signup'>
<h2>Create your account</h2>
<Form onSubmit={handleSubmit}>
      
<table>
        
        <tr>
            {/* <td rowspan="2">D</td> */}
            <td>
            <Form.Group className="mb-3" controlId="formBasicemail" style={{display:'flex'}}>
      <Form.Label style={{marginTop:'5px'}}>Name:</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={handlename}
      required
      style={{fontSize: '14px',color:'#707070b5',marginLeft:'10px'}}
      />
    </Form.Group>
            </td>
            <td >
            <Form.Group className="mb-3" controlId="formBasicemail" style={{display:'flex'}}>
      <Form.Label style={{marginTop:'5px'}}>Email:</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your email"
      value={email}
      onChange={handleemail}
      required
      style={{fontSize: '14px',color:'#707070b5',marginLeft:'10px'}}
      />
    </Form.Group>
            </td>
            <td >
            <Form.Group className="mb-3" controlId="formBasicemail" style={{display:'flex'}}>
      <Form.Label style={{marginTop:'5px'}}>Phone:</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your phone number"
      value={phone}
      onChange={handlephone}
      required
      style={{fontSize: '14px',color:'#707070b5',marginLeft:'10px'}}
      />
    </Form.Group>
            </td>
           
        </tr>
        <tr>
        <td>
            <Form.Group className="mb-3" controlId="formBasicemail" style={{display:'flex'}}>
      <Form.Label style={{marginTop:'5px'}}>Password:</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your password"
      value={password}
      onChange={handlepassword}
      required
      style={{fontSize: '14px',color:'#707070b5',marginLeft:'10px'}}
      />
    </Form.Group>
            </td>
            <td rowspan="2" colspan="2">
            <Form.Group className="mb-3" controlId="formBasicemail" style={{display:'flex'}}>
      <Form.Label style={{marginTop:'5px'}}>Details:</Form.Label>
      <Form.Control
      type="text"
      placeholder="few about yourself"
      value={details}
      onChange={handledetails}
      required
      style={{fontSize: '14px',color:'#707070b5',marginLeft:'10px'}}
      />
    </Form.Group>
            </td>
           
           
        </tr>

        <tr>

            <td>
            <Form.Group className="mb-3" controlId="formBasicemail" style={{display:'flex'}}>
      <Form.Label style={{marginTop:'5px'}}>Name:</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={handlename}
      required
      style={{fontSize: '14px',color:'#707070b5',marginLeft:'10px'}}
      />
    </Form.Group>
            </td>
            <td >
            <Form.Group className="mb-3" controlId="formBasicemail" style={{display:'flex'}}>
      <Form.Label style={{marginTop:'5px'}}>Email:</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your email"
      value={email}
      onChange={handleemail}
      required
      style={{fontSize: '14px',color:'#707070b5',marginLeft:'10px'}}
      />
    </Form.Group>
            </td>
            <td >
            <Form.Group className="mb-3" controlId="formBasicemail" style={{display:'flex'}}>
      <Form.Label style={{marginTop:'5px'}}>Phone:</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your phone number"
      value={phone}
      onChange={handlephone}
      required
      style={{fontSize: '14px',color:'#707070b5',marginLeft:'10px'}}
      />
    </Form.Group>
            </td>
           
        </tr>
        </table>

  </Form>
  
    </div>
  )
}

export default Signupp
