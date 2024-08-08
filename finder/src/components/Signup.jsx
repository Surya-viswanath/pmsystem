
import React, { useState } from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import './Signup.css'
import { useNavigate } from 'react-router-dom';



function Signup() {

  const navigate = useNavigate();

const [name, setname] = useState('');
const [email, setemail] = useState('');
const [password, setpassword] = useState('');
const [nationality, setnationality] = useState('');
const [languages, setlanguages] = useState('');
const [experience, setexperience] = useState('');
const [details, setdetails] = useState('');
const [phone, setphone] = useState('');
const [profile, setprofile] = useState([]);
// const [nationalities, setNationalities] = useState([]);
const [loading, setLoading] = useState(true);

const handlename =(event)=>{
    setname(event.target.value);
  };
  const handleemail =(event)=>{
    setemail(event.target.value);
  };
  const handlepassword=(event)=>{
    setpassword(event.target.value);
  };
  const ispasswordValid = (event)=>{
    return password.length >=6;
  };
  const handlenationality=(event)=>{
    setnationality(event.target.value);
  };
  const handlelanguages=(event)=>{
    setlanguages(event.target.value);
  };
  const handleexperience=(event)=>{
    setexperience(event.target.value);
  };
  const handledetails=(event)=>{
    setdetails(event.target.value);
  };
  const handlephone=(event)=>{
    setphone(event.target.value);
  };
  const handleprofile=(event)=>{
    setprofile(event.target.value);
  };

  
  const nationalities = [
    'American',
    'Australian',
    'Belgian',
    'British',
    'Canadian',
    'Chinese',
    '	Egyptian',
    'English',
    'French',
    'German',
    'Indian',
    '	Indonesian',
    'Iranian',
    '	Italian',
    '	Japanese',
    'Malaysian',
    'Malaysian',
    'Mexican',
    '	Moroccan',
    'Nepalese',
    'Nigerian',
    'North korean',
    'Omani',
    'Pakistani',
    'Qatari',
    '	Russian',
    'Saudi Arabian',
    '	Sri Lankan',
    // Add more nationalities as needed
  ];
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const display = await axios.post('http://localhost:4008/createagent', { name,email, password,nationality,languages,experience,details,phone,profile});
  //     console.log(display.data);
  //   } catch (error) {
  //     console.error('Axios Error:', error);
  //   }
  // };
const handleSubmit =async(event)=>{
  const pname=name;
  const pemail=email;
    event.preventDefault()
    try{
    const display =await axios.post('http://localhost:4008/createagent',{name,email, password,nationality,languages,experience,details,phone,profile})
    console.log(display.data)
    }
    catch{
      
    }
    navigate(`/open/${pemail}`);
  
  }

 

   
  return (
    
<div className='signup'>
<h2>Create your account</h2>

      <Form onSubmit={handleSubmit}>
      <div style={{display:'flex'}}>
        <div style={{width:'50%'}}>
        <div style={{display:'flex'}}>
<Form.Group className="mb-3" controlId="formBasicemail" style={{width:'50%'}}>
      <Form.Label>Name</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={handlename}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail" style={{width:'50%',marginLeft:'2%'}}>
      <Form.Label>Email</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your email"
      value={email}
      onChange={handleemail}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>
   </div>
   <div style={{display:'flex'}}>
    <Form.Group className="mb-3" controlId="formBasicname" style={{width:'50%'}}>
      <Form.Label>password</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter password"
      value={password}
      onChange={handlepassword}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>

  

<Form.Group className="mb-3" controlId="formBasicname" style={{width:'50%',marginLeft:'2%'}}>
      <Form.Label>Languages</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter known languages"
      value={languages}
      onChange={handlelanguages}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>
</div>
<Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Details</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your details"
      value={details}
      onChange={handledetails}
      required
      style={{fontSize: '14px',color:'#707070b5',paddingBottom: '70px'}}
      />
    </Form.Group>

    </div>
    <div style={{width:'50%',marginLeft:'2%'}}>
 {/* <div className="mb-3 w-96" >
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
         Add profile photo
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="text"
            value={profile}
           id="formFile"
           onChange={handleprofile}
          
          />
      </div> */}
    
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Add profile photo</Form.Label>
      <Form.Control
      type="text"
      placeholder="Add image"
      value={profile}
      onChange={handleprofile}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>
    <div style={{display:'flex'}}>
    <Form.Group className="mb-3" controlId="formBasicname" style={{width:'50%'}}>
      <Form.Label>Experience since</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your experience"
      value={experience}
      onChange={handleexperience}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname" style={{width:'50%',marginLeft:'2%'}}>
      <Form.Label>Phone</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your phone number"
      value={phone}
      onChange={handlephone}
      required
      style={{fontSize: '14px',color:'#707070b5'}}
      />
    </Form.Group>
    </div>
    <Form.Group className="mb-3" controlId="formBasicname">
<label  style={{marginRight:'10px'}}>Select Nationality:</label><br></br>
      {/* <select  value={nationality} onChange={handlenationality}>
        <option value="" style={{padding:'10px'}}><span style={{color:'grey'}}>---select---</span></option>
        {nationalities.map((nationality, index) => (
          <option key={index} value={nationality}>
            {nationality}
          </option>
        ))}
      </select> */}

<select
            value={nationality}
            onChange={(e) => setnationality(e.target.value)}
            required
            style={{padding:'7px',marginTop:'8px',borderRadius:'5px',fontSize: '14px',color:'#707070b5'}}  >
            <option value="" >Select Nationality</option>
            {nationalities.map((n,index) => (
              <option key={index} value={n}>
                {n}
              </option>
            ))}
            
          </select>
    </Form.Group>
    
    <button 
    type="submit"
   
className='signbut'
    >
    Create
    </button>
    
 </div>
 </div>
  </Form>
  </div>
    
  )
}

export default Signup
