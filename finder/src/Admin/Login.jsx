import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [name, setname] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [phone, setphone] = useState('');

const handlename =(event)=>{
  setname(event.target.value);
};
const handleemail =(event)=>{
  setemail(event.target.value);
};
const handlepassword=(event)=>{
  setpassword(event.target.value);
};
const handlephone=(event)=>{
  setphone(event.target.value);
};
const handleSubmit =async(event)=>{
  const mail=email;
 
    event.preventDefault()
    try{
    const display =await axios.post('http://localhost:4008/adminlogin',{email, password});
  
    // navigate(`/admin/${display.data.id}`); 
    navigate(`/agentlist`);}
    
    catch(error){ 
        console.log(error);
    }
    
  }
  return (
    <div>
            <Row>
      
      <Col  style={{marginLeft:'5%',paddingLeft:'25%',paddingRight:'25%'}}>
      <p className='view' style={{color:'black',fontSize:'28px'}}>Login</p>
      <p className='view' style={{color:'black'}}>Get access to your account</p>
<Form onSubmit={handleSubmit} >
<div>

<Form.Group className="mb-3" controlId="formBasicemail" >
<Form.Label>Email</Form.Label>
<Form.Control
type="text"
placeholder="Enter your email"
value={email}
onChange={handleemail}
required
style={{fontSize: '14px',color:'black',backgroundColor:'transparent'}}
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicname" >
<Form.Label>password</Form.Label>
<Form.Control
type="text"
placeholder="Enter password"
value={password}
onChange={handlepassword}
required
style={{fontSize: '14px',color:'black',backgroundColor:'transparent'}}
/>
</Form.Group>

<button 
type="submit"
className='signbut'
>
Login
</button>
</div>
</Form>
</Col>

</Row>
    </div>
  )
}

export default Login
