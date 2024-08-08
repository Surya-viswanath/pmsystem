// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import toast from "react-hot-toast";
// import axios from "axios";

// const Showrqst = () => {
//     const [request, setRequest] = useState([]);
//     const axiosInstance = axios.create({
//         baseURL: "http://localhost:4008",
//     });

//     useEffect(() => {
//         const fetchRequests = async () => {
//             try {
//                 const res = await axiosInstance.get('/rqst');
//                 setRequest(res.data);
//             } catch (error) {
//                 console.error("Error fetching requests:", error);
//             }
//         };

//         fetchRequests();
//     }, []);

//     const handleApprove = (userId, id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You want to make organizer?",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, Make Organizer",
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axiosInstance.put(`/getcustomer/organizer/${userId}`).then((res) => {
//                     if (res.data.role === 'organizer') {
//                         axiosInstance.put(`/request/accept/${id}`).then((res) => {
//                             if (res.data.status === 'accepted') {
//                                 setRequest((prev) =>
//                                     prev.map((item) =>
//                                         item._id === id ? { ...item, status: 'accepted' } : item
//                                     )
//                                 );
//                                 Swal.fire({
//                                     title: "Organizer!",
//                                     text: 'He is organizer now.',
//                                     icon: "success",
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     };

//     const handleReject = (id) => {
//         axiosInstance.put(`/request/reject/${id}`).then((res) => {
//             if (res.data.status === 'rejected') {
//                 setRequest((prev) =>
//                     prev.map((item) =>
//                         item._id === id ? { ...item, status: 'rejected' } : item
//                     )
//                 );
//                 toast.success('Request rejected');
//             }
//         });
//     };

//     return (
//         <div>
//             <h2 className="text-primary text-2xl font-semibold mb-4">
//                 Organizer Requests
//             </h2>
//             <div className="flex justify-between items-center">
//                 {/* Other JSX */}
//             </div>
//             <div className="overflow-x-auto">
//                 <table className="table-auto w-full">
//                     <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold">
//                         <tr>
//                             <th className="px-4 py-2">No:</th>
//                             <th className="px-4 py-2">Name</th>
//                             <th className="px-4 py-2">Email</th>
//                             <th className="px-4 py-2">Experience</th>
//                             <th className="px-4 py-2">UserId</th>
//                             <th className="px-4 py-2">Status</th>
//                             <th className="px-4 py-2">Action</th>
//                             <th className="px-4 py-2">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Array.isArray(request) &&
//                             request.map((item, index) => (
//                                 <tr key={item._id} className="border-b text-center">
//                                     <td className="px-4 py-2">{index + 1}</td>
//                                     <td className="px-4 py-2">{item?.name}</td>
//                                     <td className="px-4 py-2">{item?.email}</td>
//                                     <td className="px-4 py-2">{item?.experience}</td>
//                                     <td className="px-4 py-2">{item?.userId}</td>
//                                     <td className="px-4 py-2">{item?.status}</td>
//                                     <td className="px-4 py-2">
//                                         <button
//                                             disabled={item?.status === 'accepted' || item?.status === 'rejected'}
//                                             onClick={() => handleApprove(item.userId, item._id)}
//                                             className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-green-200 disabled:via-green-300 disabled:to-green-400"
//                                             style={{backgroundColor:'green'}}
//                                         >
//                                             {item?.status === 'accepted' ? 'Approved' : 'Approve'}
//                                         </button>
//                                     </td>
//                                     <td className="px-4 py-2">
//                                         <button
//                                             disabled={item?.status === 'accepted' || item?.status === 'rejected'}
//                                             onClick={() => handleReject(item._id)}
//                                             className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-red-200 disabled:via-red-300 disabled:to-red-400"
//                                             style={{backgroundColor:'red'}}
//                                         >
//                                             {item?.status === 'rejected' ? 'Rejected' : 'Reject'}
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Showrqst;

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";

const Showrqst = () => {
    const { user } = useAuth();
    const [request, setRequest] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await axios.get('http://localhost:4008/request-organizer');
                setRequest(res.data);
            } catch (error) {
                console.error("Error fetching requests:", error);
            }
        };

        fetchRequests();
    }, []);

    const handleApprove = (userId, id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make organizer?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Organizer",

        }).then((result) => {
           
            if (result.isConfirmed) {
               
                // axios.put(`http://localhost:4008/getcustomer/organizer/${userId}`).then((res) => {
                    
                    // if (res.data.role === 'organizer') {
                        // console.log("accept",id);
                        axios.put(`http://localhost:4008/request-organizer/accept/${id}`).then((res) => {
                            console.log("hey",id);
                            if (res.data.status === 'accepted') {
                                setRequest((prev) =>
                                    prev.map((item) =>
                                        item._id === id ? { ...item, status: 'accepted' } : item
                                    )
                                );
                                     
                                axios.put(`http://localhost:4008/update-user/${userId}`, { role: 'organizer' })
                                .then(response => {
                                  console.log('User role updated:', response.data);
                                  // Update the UI or state accordingly
                                })
                                .catch(error => {
                                  console.error('Error updating user role:', error);
                                });


                                Swal.fire({
                                    title: "Organizer!",
                                    text: 'He is organizer now.',
                                    icon: "success",
                                });
                            }
                        });
                    // }
                // });
            }
        });
    };

    const handleReject = (id) => {
        console.log("hey",id);
        axios.put(`http://localhost:4008/request-organizer/reject/${id}`).then((res) => {
          
            if (res.data.status === 'rejected') {
                setRequest((prev) =>
                   
                    prev.map((item) =>
                       
                        item._id === id ? { ...item, status: 'rejected' } : item
                    )
                );
                toast.success('Request rejected');
            }
        });
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4" style={{color:'#393d73'}}>
                Agent Requests
            </h2>
            <div className="flex justify-between items-center">
                {/* Other JSX */}
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold">
                        <tr>
                            <th className="px-4 py-2">No:</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Experience</th>
                            <th className="px-4 py-2">UserId</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Action</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(request) &&
                            request.map((item, index) => (
                                <tr key={item._id} className="border-b text-center">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{item?.name}</td>
                                    <td className="px-4 py-2">{item?.email}</td>
                                    <td className="px-4 py-2">{item?.experience}</td>
                                    <td className="px-4 py-2">{item?.userId}</td>
                                    <td className="px-4 py-2">{item?.status}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                            onClick={() => handleApprove(item.userId, item._id)}
                                            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-green-200 disabled:via-green-300 disabled:to-green-400"
                                            style={{backgroundColor:'green'}}
                                        >
                                            {item?.status === 'accepted' ? 'Approved' : 'Approve'}
                                        </button>
                                        
                                       
                                        
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            disabled={item?.status === 'accepted' || item?.status === 'rejected'}
                                            onClick={() => handleReject(item._id)}
                                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-red-200 disabled:via-red-300 disabled:to-red-400"
                                            style={{backgroundColor:'red'}}
                                        >
                                            {item?.status === 'rejected' ? 'Rejected' : 'Reject'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Showrqst;