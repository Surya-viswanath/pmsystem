import { Axios } from 'axios';
import React, { useState } from 'react'
import {Modal,Row,Col,Form,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function LoginModal() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [show, setShow] = useState(false);
    const handleemails =(event)=>{
      setemail(event.target.value);
    };
    const handlepasswords=(event)=>{
      setpassword(event.target.value);
    };

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const handleSubmits = async (event) => {
        const Email=email;
        event.preventDefault();
        try {
          const displays = await Axios.post('http://localhost:4008/customerlogin', { email, password });
          console.log(displays.data);
          const userDatas = displays.data;
          // localStorage.setItem('user', JSON.stringify(userData));
        //   navigate(`/${Email}`)
          handleClose ();
        } catch (error) {
          console.error('Axios Error:', error);
        }
      };
  return (
    <div>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Property Finder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
<Col>
{/* <img src={imgs}/> */}
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
     
{/*  */}
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
       
      </Modal>
    </div>
  )
}

export default LoginModal
