




import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import axios from "axios";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Propertylist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://pmsystem-4.onrender.com/getpro');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://pmsystem-4.onrender.com/deleteList/${id}`);
      // Update the state after successful deletion
      setUsers(users.filter(user => user._id !== id));
      toast.success('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error deleting user');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4" style={{color:'#393d73'}}>
        Properties
      </h2>
      <div className="overflow-x-auto" style={{marginLeft:'-4%'}}> 
        <table className="table-auto w-full">
          <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold">
            <tr>
              <th className="px-4 py-2">No:</th>
              <th className="px-4 py-2">Image</th>
              {/* <th className="px-4 py-2">Phone</th> */}
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter(user => user.role !== 'admin') // Filter out admin users
              .map((item, index) => (
                <tr key={item._id} className="border-b text-center">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td><img src= {item.image} alt="" width={'100px'} height={'100px'}  style={{marginBottom:'10px',maxHeight:'150px'}}/></td>
                  {/* <td className="px-4 py-2">{item.phone}</td> */}
                  <td className="px-4 py-2">{item.email}</td>
                  <td className="px-4 py-2">{item.type}</td>
                  <td className="px-4 py-2">{item.address}</td>
                  <td className="px-4 py-2">
                    <MdOutlineDeleteOutline 
                      onClick={() => handleDelete(item._id)} 
                      style={{ color: 'red', cursor: 'pointer' }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Propertylist;
