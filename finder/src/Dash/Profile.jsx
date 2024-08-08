


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
        const response = await axios.get('https://pmsystem-4.onrender.com/request-organizer');
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
