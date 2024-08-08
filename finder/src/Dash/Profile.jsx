

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
// import { RiShieldUserLine } from "react-icons/ri";
// import { BsFileLock } from "react-icons/bs";
// import { useAuth } from "../auth/AuthContext";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Col, Container, Row } from "react-bootstrap";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoMail } from "react-icons/io5";
// import { FaUser } from "react-icons/fa";

// import { RiPencilLine } from "react-icons/ri";

// const Profile = () => {
//   const { user } = useAuth();
//   const [userImage, setUserImage] = useState(user?.image);
//   const [userCover, setUserCover] = useState(user?.cover);
//   const [agents, setagents] = useState();
//   console.log(user);
//   useEffect(()=>{
//     const agents =async()=>{
//      try{
//        const responses = await axios.get('http://localhost:4008/request-organizer')     
//      setagents(responses.data)
    
//      }
//      catch{ 
//      }
//    }
//    agents();
//   },[]);
//  const mail= user.email;
//   // const organizer = agents.filter((item)=>item.email === mail);
//   const {
//     register,
//     handleSubmit,
//   } = useForm();

//   const onSubmit = async (data) => {
//     const loadingToast = toast.loading("User Updating ... ");
//     try {
//       await axios.put(`/edit-user/${user?._id}`, data);
//       toast.dismiss(loadingToast);
//       toast.success("Successfully Changed!");
//     } catch (error) {
//       toast.dismiss(loadingToast);
//       toast.error("Error updating user!");
//       console.error(error);
//     }
//   };

//   const passwordSubmit = async (e) => {
//     e.preventDefault();
//     const password = e.target.password.value;
//     const confirmPassword = e.target.confirm_password.value;

//     if (password === confirmPassword) {
//       const loadingToast = toast.loading("Password Updating ... ");
//       try {
//         await axios.put(`/update-pass/${user?._id}`, { password });
//         toast.dismiss(loadingToast);
//         toast.success("Successfully Changed!");
//       } catch (error) {
//         toast.dismiss(loadingToast);
//         toast.error("Error updating password!");
//         console.error(error);
//       }
//     } else {
//       toast.error("Password and Confirm Password must be the same!");
//     }
//   };

//   useEffect(() => {
//     // Fetch user details if necessary
//     // Example: if you need to update user data after the component mounts
//   }, []);



  
//   return (
//     <div>
     
      
//       <Container style={{marginTop:'2%'}}>
//         <Row>
//           <Col>
//           <img src={user.image}/>
//           </Col>
//           <Col>
//           <h5>{user.name}</h5>
//           {user.email}
//           </Col>
//         </Row>
      
//       </Container>
// <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
//           <div className="relative mb-6 flex flex-col rounded border bg-white shadow">
//             <div className="border py-3 px-4 font-medium">
//               <h5 className="text-base font-semibold text-gray-700 leading-none flex">
//                 <BsFileLock className="mr-2" />
//                 Security Settings
//               </h5>
//             </div>
//             <form className="p-6 pt-0" onSubmit={passwordSubmit}>
//               <div>
//                 <div className="my-5">
//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-500 mb-0" style={{float:'left'}}>
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       className="my-auto block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
//                       placeholder="Password"
//                     />
//                   </div>
//                 </div>
//                 <div className="my-5">
//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium text-gray-500 mb-0" style={{float:'left'}}>
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       name="confirm_password"
//                       className="my-auto block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
//                       placeholder="Confirm Password"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="relative flex items-center justify-end gap-2 mb-3 text-left px-3">
//                 <button
//                   type="submit"
//                   className="text-white bg-gradient-to-r from-rose-600 via-rose-700 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 "
//                 >
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
        


//         <div style={{ gridColumn: 'span 12 / span 12', xl: { gridColumn: 'span 8 / span 8' } }}>
//           <form
//             style={{ position: 'relative', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', borderRadius: '0.375rem', border: '1px solid', backgroundColor: 'white', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', borderRadius: '0.375rem', backgroundColor: 'white', boxShadow: 'none' }}>
//               <div style={{ border: '1px solid', padding: '0.75rem 1rem', fontWeight: '500' }}>
//                 <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#4B5563', lineHeight: '1', display: 'flex' }}>
//                   <RiShieldUserLine style={{ marginRight: '0.5rem' }} />
//                   Profile Settings
//                 </h5>
//               </div>
//               <div style={{ padding: '1.5rem' }}>
//                 <div>
//                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', lg: { gridTemplateColumns: 'repeat(2, 1fr)' }, gap: '1.5rem' }}>
//                     <div style={{ spaceY: '0.5rem' }}>
//                       <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#6B7280', marginBottom: '0', float: 'left' }}>
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         {...register("name", { required: true })}
//                         style={{ display: 'block', width: '100%', borderRadius: '0.375rem', border: '1px solid', padding: '0.75rem 1rem', fontSize: '0.875rem', outline: 'none', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
//                         defaultValue={user?.name}
//                         placeholder="Full Name"
//                         required
//                       />
//                     </div>
//                     <div style={{ spaceY: '0.5rem' }}>
//                       <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#6B7280', marginBottom: '0', float: 'left' }}>
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         {...register("email", { required: true })}
//                         style={{ display: 'block', width: '100%', borderRadius: '0.375rem', border: '1px solid', padding: '0.75rem 1rem', fontSize: '0.875rem', outline: 'none', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
//                         defaultValue={user?.email}
//                         placeholder="Email Address"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div style={{ marginTop: '1.25rem' }}>
//                     <div style={{ spaceY: '0.5rem' }}>
//                       <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#6B7280', marginBottom: '0', float: 'left' }}>
//                         Country
//                       </label>
//                       <input
//                         type="text"
//                         {...register("country", { required: true })}
//                         style={{ display: 'block', width: '100%', borderRadius: '0.375rem', border: '1px solid', padding: '0.75rem 1rem', fontSize: '0.875rem', outline: 'none', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
//                         defaultValue={user?.country}
//                         placeholder="Country"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div style={{ marginTop: '1.25rem' }}>
//                     <div style={{ spaceY: '0.5rem' }}>
//                       <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#6B7280', marginBottom: '0', float: 'left' }}>
//                         Bio
//                       </label>
//                       <textarea
//                         {...register("bio", { required: true })}
//                         style={{ display: 'block', width: '100%', borderRadius: '0.375rem', border: '1px solid', padding: '0.75rem 1rem', fontSize: '0.875rem', outline: 'none', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}
//                         rows={3}
//                         placeholder="Add Your Bio"
//                         defaultValue={user?.bio}
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '1.5rem', textAlign: 'left', padding: '0 0.75rem' }}>
//               <button
//                 type="submit"
//                 style={{
//                   color: 'white',
//                   backgroundColor: '#f87171',
//                   borderRadius: '0.375rem',
//                   fontSize: '0.875rem',
//                   padding: '0.625rem 1.25rem',
//                   fontWeight: '500',
//                   boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//                 }}
//               >
//                 Update
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* <Container style={{margin:'2% 12%'}}>
//         <h3 style={{color:'#393d73'}}>Hey! Customer </h3>
//         <Row style={{marginTop:'5%'}}>
//           <Col>
//           <div style={{display:'flex'}}>
//          <img src={user.image} width={'70px'} height={'70px'}/>
//          <h5 style={{marginTop:'4%', marginLeft:'5%'}}>{user.name}</h5>
//          </div>
//           </Col>
//           <Col>
//           <button style={{backgroundColor:'#393d73',color:'white',border:'none',borderRadius:'10px',height:'50px',marginTop:'4%',width:'200px'}}><Link to='/Agentrqst' style={{textDecoration:'none',color:'white'}}>Want to an Agent</Link></button>
//           </Col>
//         </Row>
//         <Row style={{marginTop:'5%'}}>
//           <h5 style={{color:'#393d73'}}>
//             Personal details
//           </h5>
//           <p> <FaPhoneAlt style={{color:'#393d73',marginRight:'15px'}}/> Phone:{user.phone}</p>
//           <p><IoMail style={{color:'#393d73',marginRight:'15px'}}/> Email:{user.email}</p>
//           <p> <FaUser  style={{color:'#393d73',marginRight:'15px'}}/> Role:{user.role}</p>
//           </Row>
//       </Container> */}
    
//     </div>
//   );
// };

// export default Profile;


import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { RiShieldUserLine, RiPencilLine } from "react-icons/ri";
import { BsFileLock } from "react-icons/bs";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "./profile.css"; // Import the CSS file

const Profile = () => {
  const { user } = useAuth();
  const [userImage, setUserImage] = useState(user?.image);
  const [userCover, setUserCover] = useState(user?.cover);
  const [agents, setAgents] = useState();
 console.log(user);
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get('http://localhost:4008/request-organizer');
        setAgents(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAgents();
  }, []);

  const mail = user.email;
  // const organizer = agents.filter((item) => item.email === mail);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("User Updating ... ");
    try {
      await axios.put(`/edit-user/${user?._id}`, data);
      toast.dismiss(loadingToast);
      toast.success("Successfully Changed!");
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Error updating user!");
      console.error(error);
    }
  };

  const passwordSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirm_password.value;

    if (password === confirmPassword) {
      const loadingToast = toast.loading("Password Updating ... ");
      try {
        await axios.put(`/update-pass/${user?._id}`, { password });
        toast.dismiss(loadingToast);
        toast.success("Successfully Changed!");
      } catch (error) {
        toast.dismiss(loadingToast);
        toast.error("Error updating password!");
        console.error(error);
      }
    } else {
      toast.error("Password and Confirm Password must be the same!");
    }
  };

  return (
    <div>
      <Container className="profile-container">
        <Row className="profile-row">
          <Col>
            <img src={user.image} alt="User" className="profile-image" />
          </Col>
          <Col>
            <p className="profile-details">{user.email}<br></br>
            {user.role}
            </p>
           
          </Col>
        </Row>
      </Container>
      
      <div className="profile-grid">
        <div className="security-settings">
          <div className="security-settings-header">
            <BsFileLock className="mr-2" />
            Security Settings
          </div>
          <form className="security-settings-content" onSubmit={passwordSubmit}>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>

        <div className="profile-settings">
          <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="profile-form-header">
              <RiShieldUserLine className="mr-2" />
              Profile Settings
            </div>
            <div className="profile-form-content">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  defaultValue={user?.name}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  defaultValue={user?.email}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  {...register("country", { required: true })}
                  defaultValue={user?.country}
                  placeholder="Country"
                  required
                />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  {...register("bio", { required: true })}
                  rows={3}
                  placeholder="Add Your Bio"
                  defaultValue={user?.bio}
                  required
                />
              </div>
            </div>
            <div className="form-actions">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
