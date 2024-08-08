// import React from 'react'
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { GoInfo } from "react-icons/go";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// // import GoogleLogin from "../../../components/shared/googleLogin/GoogleLogin";

// function Register() {
//     const [passwordShow, setPasswordShow] = useState(false);
//     const navigation = useNavigate()
//     const { signUp } = useAuth()
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = async (data) => {
//         //console.log(data);
//         const { firstname, lastname, email, password } = data
//         const toastLoading = toast.loading('User Signuping...')
//         try {
//             const response = await signUp(firstname, lastname, email, password)
//             toast.dismiss(toastLoading)
//             toast.success('Sign Up Successfully')
//             navigation('/dashboard')
//             //console.log(response);
//         } catch (error) {
//             //console.log(error);
//             toast.dismiss(toastLoading)
//             toast.error(error?.response?.data)
//         }
//     };
//   return (
//     <div>
      
//       <div className="flex justify-center items-center w-full h-screen">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="bg-white dark:bg-gray-900 px-10 py-5 rounded-xl w-screen shadow-md max-w-sm">
//                         <div className="space-y-4">
//                             <div className="text-center space-y-2">
//                                 <h1 className="text-xl font-semibold">
//                                     Welcome back
//                                 </h1>
//                                 <small className="text-gray-400 dark:text-gray-200">
//                                     Create an account to start 
//                                 </small>
//                             </div>
//                             <div className="flex flex-col md:flex-row gap-2">
//                                 <div>
//                                     <label
//                                         htmlFor="firstname"
//                                         className="block mb-1 text-gray-600 text-sm font-medium" style={{float:'left'}}
//                                     >
//                                         First Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="firstname"
//                                         {...register("firstname", {
//                                             required: "Firstname is Required",
//                                         })}
//                                         className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.name
//                                                 ? "border-red-500 focus:border-red-500"
//                                                 : "focus:border-primary"
//                                             }
//                                         `}
//                                         // placeholder="FirstName"
//                                         placeholder=""
//                                     />
//                                     {errors.firstname && (
//                                         <span className="flex items-center gap-1 py-1 text-red-500">
//                                             <GoInfo className="inline" />
//                                             {errors.firstname.message}
//                                         </span>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <label
//                                         htmlFor="lastname"
//                                         className="block mb-1 text-gray-600 text-sm font-medium" style={{float:'left'}}
//                                     >
//                                         Last Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="lastname"
//                                         {...register("lastname", {
//                                             required: "Lastname is Required",
//                                         })}
//                                         className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.name
//                                                 ? "border-red-500 focus:border-red-500"
//                                                 : "focus:border-primary"
//                                             }
//                                         `}
//                                         // placeholder="LastName"
//                                         placeholder=""
//                                     />
//                                     {errors.lastname && (
//                                         <span className="flex items-center gap-1 py-1 text-red-500">
//                                             <GoInfo className="inline" />
//                                             {errors.lastname.message}
//                                         </span>
//                                     )}
//                                 </div>
//                             </div>
//                             <div>
//                                 <label
//                                     htmlFor="email"
//                                     className="block mb-1 text-gray-600 text-sm font-medium" style={{float:'left'}}
//                                 >
//                                     Email
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="email"
//                                     {...register("email", {
//                                         required: "Email is Required",
//                                     })}
//                                     className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.email
//                                             ? "border-red-500 focus:border-red-500"
//                                             : "focus:border-primary"
//                                         }
//                                     `}
//                                     // placeholder="Enter Email Address"
//                                     placeholder=""
//                                 />
//                                 {errors.email && (
//                                     <span className="flex items-center gap-1 py-1 text-red-500">
//                                         <GoInfo className="inline" />
//                                         {errors.email.message}
//                                     </span>
//                                 )}
//                             </div>
//                             <div className="relative">
//                                 <label
//                                     htmlFor="password"
//                                     className="block mb-1 text-gray-600 text-sm font-medium" style={{float:'left'}}
//                                 >
//                                     Password
//                                 </label>
//                                 <input
//                                     type={passwordShow ? "text" : "password"}
//                                     id="password"
//                                     {...register("password", {
//                                         required: "Password is Required",
//                                     })}
//                                     className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.password
//                                             ? "border-red-500 focus:border-red-500"
//                                             : "focus:border-primary"
//                                         }
//                                     `}
//                                     // placeholder="Enter Password"
//                                        placeholder=""
//                                 />
//                                 <span
//                                     onClick={() =>
//                                         setPasswordShow(!passwordShow)
//                                     }
//                                     className="absolute top-[38px] text-gray-500 right-3 cursor-pointer select-none"
//                                 >
//                                     {passwordShow ? (
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="16"
//                                             height="16"
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         >
//                                             <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
//                                             <line
//                                                 x1="1"
//                                                 y1="1"
//                                                 x2="23"
//                                                 y2="23"
//                                             ></line>
//                                         </svg>
//                                     ) : (
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="16"
//                                             height="16"
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         >
//                                             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                                             <circle
//                                                 cx="12"
//                                                 cy="12"
//                                                 r="3"
//                                             ></circle>
//                                         </svg>
//                                     )}
//                                 </span>
//                                 {errors.password && (
//                                     <span className="flex items-center gap-1 py-1 text-red-500">
//                                         <GoInfo className="inline" />
//                                         {errors.password.message}
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                         <button className="mt-4 w-full  text-white py-2 rounded-md text-md tracking-wide" style={{backgroundColor:'#9C0C0D'}}>
//                             Sign Up
//                         </button>
//                         <div>
//                             <div className="flex items-center my-3">
//                                 <span
//                                     aria-hidden="true"
//                                     className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75"
//                                 />
//                                 <span className="text-xs font-medium text-gray-800 bg-gray-100 rounded-full px-3 py-1 dark:bg-gray-700 dark:text-gray-200">
//                                     or sign up with
//                                 </span>
//                                 <span
//                                     aria-hidden="true"
//                                     className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75"
//                                 />
//                             </div>
//                             {/* <GoogleLogin /> */}
//                             <div className="p-5 text-sm text-center">
//                                 Already have an account?
//                                 <Link
//                                     to="/login"
//                                     className="font-medium  hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" style={{color:'#9C0C0D'}}
//                                 >
//                                     <span className="px-1 font-bold">
//                                         Login
//                                     </span>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//     </div>
//   )
// }

// export default Register



// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { GoInfo } from "react-icons/go";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// function Register() {
//     const [passwordShow, setPasswordShow] = useState(false);
//     const navigate = useNavigate();
//     const { signUp } = useAuth();
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = async (data) => {
//         const { firstname, lastname, email, password } = data;
//         const toastLoading = toast.loading('Signing Up...');
//         try {
//             const response = await signUp(firstname, lastname, email, password);
//             toast.dismiss(toastLoading);
//             toast.success('Sign Up Successful');
//             navigate('/home');
//         } catch (error) {
//             toast.dismiss(toastLoading);
//             toast.error(error?.response?.data || 'Sign Up Failed');
//         }
//     };

//     return (
//         <div className="flex justify-center items-center w-full h-screen">
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="bg-white dark:bg-gray-900 px-10 py-5 rounded-xl w-screen shadow-md max-w-sm">
//                     <div className="space-y-4">
//                         <div className="text-center space-y-2">
//                             <h1 className="text-xl font-semibold">Welcome back</h1>
//                             <small className="text-gray-400 dark:text-gray-200">
//                                 Create an account to start
//                             </small>
//                         </div>
//                         <div className="flex flex-col md:flex-row gap-2">
//                             <div>
//                                 <label
//                                     htmlFor="firstname"
//                                     className="block mb-1 text-gray-600 text-sm font-medium"
//                                     style={{ float: 'left' }}
//                                 >
//                                     First Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="firstname"
//                                     {...register("firstname", {
//                                         required: "Firstname is Required",
//                                     })}
//                                     className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.firstname ? "border-red-500 focus:border-red-500" : "focus:border-primary"}`}
//                                     placeholder=""
//                                     autoComplete="given-name"
//                                 />
//                                 {errors.firstname && (
//                                     <span className="flex items-center gap-1 py-1 text-red-500">
//                                         <GoInfo className="inline" />
//                                         {errors.firstname.message}
//                                     </span>
//                                 )}
//                             </div>
//                             <div>
//                                 <label
//                                     htmlFor="lastname"
//                                     className="block mb-1 text-gray-600 text-sm font-medium"
//                                     style={{ float: 'left' }}
//                                 >
//                                     Last Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="lastname"
//                                     {...register("lastname", {
//                                         required: "Lastname is Required",
//                                     })}
//                                     className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.lastname ? "border-red-500 focus:border-red-500" : "focus:border-primary"}`}
//                                     placeholder=""
//                                     autoComplete="family-name"
//                                 />
//                                 {errors.lastname && (
//                                     <span className="flex items-center gap-1 py-1 text-red-500">
//                                         <GoInfo className="inline" />
//                                         {errors.lastname.message}
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                         <div>
//                             <label
//                                 htmlFor="email"
//                                 className="block mb-1 text-gray-600 text-sm font-medium"
//                                 style={{ float: 'left' }}
//                             >
//                                 Email
//                             </label>
//                             <input
//                                 type="text"
//                                 id="email"
//                                 {...register("email", {
//                                     required: "Email is Required",
//                                 })}
//                                 className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.email ? "border-red-500 focus:border-red-500" : "focus:border-primary"}`}
//                                 placeholder=""
//                                 autoComplete="email"
//                             />
//                             {errors.email && (
//                                 <span className="flex items-center gap-1 py-1 text-red-500">
//                                     <GoInfo className="inline" />
//                                     {errors.email.message}
//                                 </span>
//                             )}
//                         </div>
//                         <div className="relative">
//                             <label
//                                 htmlFor="password"
//                                 className="block mb-1 text-gray-600 text-sm font-medium"
//                                 style={{ float: 'left' }}
//                             >
//                                 Password
//                             </label>
//                             <input
//                                 type={passwordShow ? "text" : "password"}
//                                 id="password"
//                                 {...register("password", {
//                                     required: "Password is Required",
//                                 })}
//                                 className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.password ? "border-red-500 focus:border-red-500" : "focus:border-primary"}`}
//                                 placeholder=""
//                                 autoComplete="new-password"
//                             />
//                             <span
//                                 onClick={() => setPasswordShow(!passwordShow)}
//                                 className="absolute top-[38px] text-gray-500 right-3 cursor-pointer select-none"
//                             >
//                                 {passwordShow ? (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="16"
//                                         height="16"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     >
//                                         <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
//                                         <line x1="1" y1="1" x2="23" y2="23"></line>
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="16"
//                                         height="16"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     >
//                                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                                         <circle cx="12" cy="12" r="3"></circle>
//                                     </svg>
//                                 )}
//                             </span>
//                             {errors.password && (
//                                 <span className="flex items-center gap-1 py-1 text-red-500">
//                                     <GoInfo className="inline" />
//                                     {errors.password.message}
//                                 </span>
//                             )}
//                         </div>
//                     </div>
//                     <button className="mt-4 w-full text-white py-2 rounded-md text-md tracking-wide" style={{ backgroundColor: '#9C0C0D' }}>
//                         Sign Up
//                     </button>
//                     <div>
//                         <div className="flex items-center my-3">
//                             <span
//                                 aria-hidden="true"
//                                 className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75"
//                             />
//                             <span className="text-xs font-medium text-gray-800 bg-gray-100 rounded-full px-3 py-1 dark:bg-gray-700 dark:text-gray-200">
//                                 or sign up with
//                             </span>
//                             <span
//                                 aria-hidden="true"
//                                 className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75"
//                             />
//                         </div>
//                         {/* <GoogleLogin /> */}
//                         <div className="p-5 text-sm text-center">
//                             Already have an account?
//                             <Link
//                                 to="/login"
//                                 className="font-medium hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
//                                 style={{ color: '#9C0C0D' }}
//                             >
//                                 <span className="px-1 font-bold">
//                                     Login
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Register;



// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { GoInfo } from "react-icons/go";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// function Register() {
//     const [passwordShow, setPasswordShow] = useState(false);
//     const navigate = useNavigate();
//     const { signUp } = useAuth();
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = async (data) => {
//         const { firstname, lastname, email, password } = data;
//         console.log("Submitting with data:", data); // Log submitted data
//         const toastLoading = toast.loading('Signing Up...');
//         try {
//             const response = await signUp(firstname, lastname, email, password);
//             toast.dismiss(toastLoading);
//             toast.success('Sign Up Successful');
//             navigate('/home');
//         } catch (error) {
//             toast.dismiss(toastLoading);
//             toast.error(error?.response?.data || 'Sign Up Failed');
//         }
//     };


// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { GoInfo } from "react-icons/go";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from './AuthContext';


// function Register() {
//     const [passwordShow, setPasswordShow] = useState(false);
//     const navigate = useNavigate();
//     const { signUp } = useAuth();
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = async (data) => {
//         const { firstname, lastname, email, password } = data;
//         const toastLoading = toast.loading('Signing Up...');
//         try {
//             const response = await signUp(firstname, lastname, email, password);
//             toast.dismiss(toastLoading);
//             toast.success('Sign Up Successful');
//             navigate('/home');
//         } catch (error) {
//             toast.dismiss(toastLoading);
//             toast.error(error?.response?.data || 'Sign Up Failed');
//         }
//     };
//     return (
//         <div className="flex justify-center items-center w-full h-screen">
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="bg-white dark:bg-gray-900 px-10 py-5 rounded-xl w-screen shadow-md max-w-sm">
//                     <div className="space-y-4">
//                         <div className="text-center space-y-2">
//                             <h1 className="text-xl font-semibold">Welcome back</h1>
//                             <small className="text-gray-400 dark:text-gray-200">
//                                 Create an account to start
//                             </small>
//                         </div>
//                         <div className="flex flex-col md:flex-row gap-2">
//                             <div>
//                                 <label
//                                     htmlFor="firstname"
//                                     className="block mb-1 text-gray-600 text-sm font-medium"
//                                     style={{ float: 'left' }}
//                                 >
//                                     First Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="firstname"
//                                     {...register("firstname", {
//                                         required: "Firstname is Required",
//                                     })}
//                                     className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.firstname ? "border-red-500 focus:border-red-500" : "focus:border-primary"}`}
//                                     placeholder=""
//                                     autoComplete="given-name"
//                                 />
//                                 {errors.firstname && (
//                                     <span className="flex items-center gap-1 py-1 text-red-500">
//                                         <GoInfo className="inline" />
//                                         {errors.firstname.message}
//                                     </span>
//                                 )}
//                             </div>
//                             <div>
//                                 <label
//                                     htmlFor="lastname"
//                                     className="block mb-1 text-gray-600 text-sm font-medium"
//                                     style={{ float: 'left' }}
//                                 >
//                                     Last Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="lastname"
//                                     {...register("lastname", {
//                                         required: "Lastname is Required",
//                                     })}
//                                     className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.lastname ? "border-red-500 focus:border-red-500" : "focus:border-primary"}`}
//                                     placeholder=""
//                                     autoComplete="family-name"
//                                 />
//                                 {errors.lastname && (
//                                     <span className="flex items-center gap-1 py-1 text-red-500">
//                                         <GoInfo className="inline" />
//                                         {errors.lastname.message}
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                         <div>
//                             <label
//                                 htmlFor="email"
//                                 className="block mb-1 text-gray-600 text-sm font-medium"
//                                 style={{ float: 'left' }}
//                             >
//                                 Email
//                             </label>
//                             <input
//                                 type="text"
//                                 id="email"
//                                 {...register("email", {
//                                     required: "Email is Required",
//                                 })}
//                                 className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.email ? "border-red-500 focus:border-red-500" : "focus:border-primary"}`}
//                                 placeholder=""
//                                 autoComplete="email"
//                             />
//                             {errors.email && (
//                                 <span className="flex items-center gap-1 py-1 text-red-500">
//                                     <GoInfo className="inline" />
//                                     {errors.email.message}
//                                 </span>
//                             )}
//                         </div>
//                         <div className="relative">
//                             <label
//                                 htmlFor="password"
//                                 className="block mb-1 text-gray-600 text-sm font-medium"
//                                 style={{ float: 'left' }}
//                             >
//                                 Password
//                             </label>
//                             <input
//                                 type={passwordShow ? "text" : "password"}
//                                 id="password"
//                                 {...register("password", {
//                                     required: "Password is Required",
//                                 })}
//                                 className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${errors.password ? "border-red-500 focus:border-red-500" : "focus:border-primary"}`}
//                                 placeholder=""
//                                 autoComplete="new-password"
//                             />
//                             <span
//                                 onClick={() => setPasswordShow(!passwordShow)}
//                                 className="absolute top-[38px] text-gray-500 right-3 cursor-pointer select-none"
//                             >
//                                 {passwordShow ? (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="16"
//                                         height="16"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     >
//                                         <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c-7 0-11 8-11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
//                                         <line x1="1" y1="1" x2="23" y2="23"></line>
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="16"
//                                         height="16"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     >
//                                         <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                                         <circle cx="12" cy="12" r="3"></circle>
//                                     </svg>
//                                 )}
//                             </span>
//                             {errors.password && (
//                                 <span className="flex items-center gap-1 py-1 text-red-500">
//                                     <GoInfo className="inline" />
//                                     {errors.password.message}
//                                 </span>
//                             )}
//                         </div>
//                     </div>
//                     <button
//                         type="submit"
//                         className="mt-4 w-full text-white py-2 rounded-md text-md tracking-wide"
//                         style={{ backgroundColor: '#9C0C0D' }}
//                     >
//                         Sign Up
//                     </button>
//                     <div>
//                         <div className="flex items-center my-3">
//                             <span
//                                 aria-hidden="true"
//                                 className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75"
//                             />
//                             <span className="text-xs font-medium text-gray-800 bg-gray-100 rounded-full px-3 py-1 dark:bg-gray-700 dark:text-gray-200">
//                                 or sign up with
//                             </span>
//                             <span
//                                 aria-hidden="true"
//                                 className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75"
//                             />
//                         </div>
//                         {/* <GoogleLogin /> */}
//                         <div className="p-5 text-sm text-center">
//                             Already have an account?
//                             <Link
//                                 to="/login"
//                                 className="font-medium hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
//                                 style={{ color: '#9C0C0D' }}
//                             >
//                                 <span className="px-1 font-bold">
//                                     Login
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Register;


import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GoInfo } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';
import { Form } from 'react-bootstrap';
import './Login.css';

function Register() {
    const [passwordShow, setPasswordShow] = useState(false);
    const navigate = useNavigate();
    const { signUp } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { name, email,phone,password } = data;
        const toastLoading = toast.loading('Signing Up...');
        try {
            await signUp(name, email,phone,password);
            toast.dismiss(toastLoading);
            toast.success('Sign Up Successful');
            navigate('/home');
            // navigate('/dashboard');
        } catch (error) {
            toast.dismiss(toastLoading);
            toast.error(error?.response?.data?.message || 'Sign Up Failed');
        }
    };

    return (
        


<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', backgroundColor: '#f0f0f0' }}>
<form onSubmit={handleSubmit(onSubmit)} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
  <div style={{ marginBottom: '20px', textAlign: 'center' }}>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Welcome back</h1>
    <small style={{ color: '#666' }}>Create an account to start</small>
  </div>
  <div style={{ marginBottom: '20px' }}>
    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: '500' }}>Name</label>
    <input
      type="text"
      id="name"
      {...register("name", { required: "Name is Required" })}
      style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', outline: 'none', boxSizing: 'border-box' }}
      placeholder=""
    />
    {errors.name && (
      <span style={{ color: 'red', fontSize: '12px' }}>{errors.name.message}</span>
    )}
  </div>
  <div style={{ marginBottom: '20px' }}>
    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: '500' }}>Email</label>
    <input
      type="text"
      id="email"
      {...register("email", { required: "Email is Required" })}
      style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', outline: 'none', boxSizing: 'border-box' }}
      placeholder=""
    />
    {errors.email && (
      <span style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</span>
    )}
  </div>

  <div style={{ marginBottom: '20px' }}>
    <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: '500' }}>Phone</label>
    <input
      type="text"
      id="phone"
      {...register("phone", { required: "Phone is Required" })}
      style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', outline: 'none', boxSizing: 'border-box' }}
      placeholder=""
    />
    {errors.phone && (
      <span style={{ color: 'red', fontSize: '12px' }}>{errors.phone.message}</span>
    )}
  </div>

  <div style={{ marginBottom: '20px', position: 'relative' }}>
    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: '500' }}>Password</label>
    <input
      type={passwordShow ? "text" : "password"}
      id="password"
      {...register("password", { required: "Password is Required" })}
      style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', outline: 'none', boxSizing: 'border-box' }}
      placeholder=""
    />
    <span
      onClick={() => setPasswordShow(!passwordShow)}
      style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer', color: '#999',marginTop:'3%' }}
    >
      {passwordShow ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      )}
    </span>
    {errors.password && (
      <span style={{ color: 'red', fontSize: '12px' }}>{errors.password.message}</span>
    )}
  </div>
  <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: '#393d73', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
    Sign In
  </button>
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
      <span style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }}></span>
      <span style={{ margin: '0 10px', color: '#999' }}>or sign in with</span>
      <span style={{ flex: 1, height: '1px', backgroundColor: '#ccc' }}></span>
    </div> */}
    {/* <GoogleLogin /> */}
    <div style={{ fontSize: '14px' }}>
     Already have an account
      <Link to="/Login" style={{ color: '#393d73', fontWeight: 'bold', marginLeft: '5px' }}>
        Sign In
      </Link>
    </div>
  </div>
</form>
</div>
    )
}

export default Register;