import React, { useEffect, useState } from 'react'
import './Banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import banner from './Bannerhome.jpg'
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';

import Mainsearch from '../Search/Mainsearch';

function Bannerop() {
const navigate = useNavigate();
const {id}=useParams();
  return (
  
    <div className='banner'>
      <Row >
        <h1 className='find'>Find your Dream Home here</h1>
      </Row>
    </div>
    /* <div style={{marginTop:'-20%',}}>
    <Mainsearch/>
    </div> */
   
   
  )
}

export default Bannerop