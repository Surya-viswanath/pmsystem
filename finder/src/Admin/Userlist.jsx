import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import './Admin.css'

function Userlist() {
    
 const [Customer, setCustomer] = useState([])
 
    useEffect(() => {
        const handleItems = async () => {
          try {
            const response = await axios.get('http://localhost:4008/getcustomer');
            setCustomer(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        handleItems();
      }, []);

      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:4008/deletecustomer/${id}`);
          // Update the state after successful deletion
          setCustomer(Customer.filter(list => list._id !== id));
        } catch (error) {
          console.error('Error deleting list:', error);
        }
      };
  return (
    <div>
   
         <div className="main-head section-p1">
         <h3 className='head-restaurants'>Agent List</h3>
    <table width="100%" className='table-border ' >
   
<thead style={{padding:'20px'}}>
    <tr className='table'>
       <td className='table-head'>Customer Name</td>
        <td className='table-head'>Email</td>
        <td className='table-head'>Phone</td>
        <td className='table-head'>Customer id</td>
        <td className='table-head'>Remove</td>
        
    </tr>
</thead>
<tbody style={{padding:'20px'}}>
{Customer.map(display =>(
    <tr className='table'>
        <td>{display.name}</td>
        <td>{display.email}</td>
        <td>{display.phone}</td>
        <td>{display._id}</td>
        <td><MdDelete className='delete-icon' onClick={() => handleDelete(display._id)}/> </td>
       
        
    </tr>
    
    ))}
</tbody>
    </table>
    <div className='normal-btn'>
    
    </div>
    </div>
    </div>
  )
}

export default Userlist