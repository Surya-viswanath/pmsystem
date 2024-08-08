import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './Usersign.css'
import { Link, useNavigate } from 'react-router-dom';

function Usersignup() {
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
      const display =await axios.post('http://localhost:4008/Customersign',{name,email, password,phone})
      console.log(display.data)}
      catch{ 
      }
      navigate(`/Home/${mail}`);
    } 
  return (
    <div className='userlog'>
      <h2 style={{textAlign:'center'}}>Create your account</h2>
<Form onSubmit={handleSubmit} >
<div style={{margin:'2% 35%',padding:'2% 1%',border:'1px solid white',borderRadius:'5px'}}>
<Form.Group className="mb-3" controlId="formBasicemail" >
<Form.Label>Name</Form.Label>
<Form.Control
type="text"
placeholder="Enter your name"
value={name}
onChange={handlename}
required
style={{fontSize: '14px',color:'#707070b5',backgroundColor:'transparent'}}
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicemail" >
<Form.Label>Email</Form.Label>
<Form.Control
type="text"
placeholder="Enter your email"
value={email}
onChange={handleemail}
required
style={{fontSize: '14px',color:'#707070b5',backgroundColor:'transparent'}}
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
style={{fontSize: '14px',color:'#707070b5',backgroundColor:'transparent'}}
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicname" >
<Form.Label>Phone</Form.Label>
<Form.Control
type="text"
placeholder="Enter your phone number"
value={phone}
onChange={handlephone}
required
style={{fontSize: '14px',color:'#707070b5',backgroundColor:'transparent'}}
/>
</Form.Group>
<button type="submit" className='signbut'>Create</button>
<Link to='/login'>
<button className='signbut' style={{float: 'right'}}>Login</button>
</Link>
</div>
</Form>
    </div>
  )
}

export default Usersignup
