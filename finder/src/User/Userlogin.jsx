import axios from 'axios';
import React, { useState } from 'react'
import { Form,Row,Col } from 'react-bootstrap'
import './Usersign.css'
import { useNavigate } from 'react-router-dom';

function Userlogin() {
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
      const display =await axios.post('http://localhost:4008/customerlogin',{email, password})
      console.log(display.data);
      // navigate(`/Home/${display.data.id}`);}
      // catch(error){console.log(error); 

      if (display.data.id) {
       //  console.log('User data in useContext:', response.data.user);
       navigate(`/Home/${display.data.id}`);
      } else {
        console.log('Login failed:', display.data);
        // Handle login failure here, such as displaying an error message to the user
      }
      }catch (error) {
        console.log('Login error:', error);
        // Handle network errors or other exceptions here
      }
      
    }
  return (
    <div className='userlog'>
      <Row >
      
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

export default Userlogin

