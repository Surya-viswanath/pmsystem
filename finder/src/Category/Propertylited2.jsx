import React from 'react'
import { Link } from 'react-router-dom'
import { CiLocationOn, CiHeart } from "react-icons/ci";

import '../components/Rent.css'
function Propertylited2({ properties }) {
  return (
    <div className="gallery">
    {properties.map(data => (
      <div>
        <Link to='/2' style={{ textDecoration: 'none' }}>
          <div key={data.id} className="image-item">
            <img src={data.image} alt={data.title} />
            <p>{data.title}</p>
            <p style={{ color: '#707070' }}>{data.type} , {data.sell}</p>
            <p style={{ color: 'black' }}>
              {data.regularPrice} <br></br>
              {data.description}
            </p>
            <div style={{ display: 'flex' }}>
              <p style={{ color: '#707070' }}><CiLocationOn />{data.address}</p>
              <p style={{ color: 'red', marginLeft: '20%', fontSize: '18px' }}><CiHeart /></p>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
  )
}

export default Propertylited2
