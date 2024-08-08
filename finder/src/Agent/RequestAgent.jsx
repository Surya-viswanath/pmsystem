import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../auth/AuthContext";
import axios from "axios";
import { Container, Form } from "react-bootstrap";


const RequestAgent = () => {

    const { user } = useAuth()
    //console.log(user?.name);
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [hasPendingRequest, setHasPendingRequest] = useState(false);

    useEffect(() => {
        const fetchPendingRequest = async () => {
            try {
                const response = await axios.get(`https://pmsystem-4.onrender.com/check-pending-request?userId=${user?._id}`);
                setHasPendingRequest(response.data.hasPendingRequest);
            } catch (error) {
                console.error("Error checking pending request:", error);
            }
        };

        fetchPendingRequest();
    }, [axios, user?._id]);

    const onSubmit = async (data) => {
        if (!hasPendingRequest && data) {
            setHasPendingRequest(true);
            const request = {
                userId: user._id,
                name: user.name,
                image: user.image,
                experience: data.experience,
                details: data.details,
                email: user.email,
                status: "pending"
            };

            try {
                const requestRes = await axios.post('https://pmsystem-4.onrender.com/request-organizer', request);
                if (requestRes.data._id) {
                    toast.success('Request for organizer, wait for confirmation');
                    reset();
                }
            } catch (error) {
                
                toast.error('Failed to submit request');
            }
        } else {
            toast.error('You already have a pending request. Please wait for admin confirmation.');
        }
    };

    return (
      

        <div className="bg-[#E9F8F3B2] py-4">
            <Container>
                {
                    user?.role === 'admin' || user?.role === 'organizer'
                        ?
                        <div className="h-[60vh] flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-dark_01 text-center">Your are already {user?.role}. Please go to <Link to='/dashboard' className="text-primary">Dashboard</Link></h2>
                        </div>
                        :
                        <div className="p-10 bg-white rounded-md">
                            <div className="text-center">
                                <h2 className="text-3xl text-dark_01 font-medium">Request for Agent</h2>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        {...register('name', { required: true })}
                                        value={user?.name}
                                        placeholder="Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        {...register('email', { required: true })}
                                        value={user?.email}
                                        placeholder="Email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                    />
                                    {errors.email && <span className="text-red-500">Email is required</span>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Experience</label>
                                    <input
                                        type="text"
                                        placeholder="Experience"
                                        {...register('experience', { required: true })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                    />
                                    {errors.experience && <span className="text-red-500">Experience is required</span>}
                                </div>
                                {/* <div>
                                    <label htmlFor="experience" className="block text-gray-700 font-semibold mb-1">Event Organization Experience</label>
                                    <textarea
                                        {...register('experience', { required: true })}
                                        placeholder="Event Organization Experience"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                                    {errors.experience && <span className="text-red-500">Experience is required</span>}
                                </div> */}
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-1">Few about you</label>
                                    <textarea
                                        {...register('details', { required: true })}
                                        placeholder="Text about you"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                                    {errors.details && <span className="text-red-500">Skills is required</span>}
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <button className=" px-4 py-2 rounded-md text-white uppercase" style={{backgroundColor:'#393d73'}}>Submit Request</button>
                                </div>
                            </form>
                        </div>
                }
            </Container>
        </div>
    );
};

export default RequestAgent;
