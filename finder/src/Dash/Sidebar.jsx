







import PropTypes from "prop-types";
import SideBarMenuItem from "./sidebar/SideBarMenuItem";
import SidebarSubMenu from "./sidebar/SidebarSubMenu";
import { Link } from "react-router-dom";
import "./Side.css"; 
import { useAuth } from "../auth/AuthContext";
import { FaHeart } from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const { user, logout } = useAuth();

    return (
        <>
            <div
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`sidebar-backdrop ${sidebarOpen ? "open" : "closed"}`}
            ></div>
            <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
                <div className="sidebar-header">
                    {/* <Link to="/"><img src={logo} alt="" className="w-28" /></Link> */}
                </div>
                <div className="sidebar-content custom-scroll">
                    <nav className="sidebar-nav">
                        <ul>
                            <SideBarMenuItem
                                menu={{
                                    name: "Profile",
                                    icon: "LuUserCircle2",
                                    path: "/dashboard/profile",
                                }}
                            />
                            {user?.role === "user" && (
                              
                                                                <>
                                                                   
                                                                  
                                                                 
                                                                  <SideBarMenuItem
                                                                       menu={{
                                                                             name: "Wishlist",
                                                                            icon: "LuDollarSign",
                                                                          path: "/dashboard/wishlist",
                                                                        }}
                                                                   />
                                                                 </>
                                                            
                            )}
                            {user?.role === "admin" && (
                                 
                                                                     <>
                                                                     
                                                                        <SideBarMenuItem
                                                                           menu={{
                                                                                 name: "Properties",
                                                                                 icon: "LuCalendarPlus",
                                                                                path: "/dashboard/properties",
                                                                            }}
                                                                       /> 
                                                                         <SideBarMenuItem
                                                                            menu={{
                                                                                 name: "Property Add",
                                                                                icon: "LuUserCheck",
                                                                              path: "/dashboard/adding",
                                                                             }}
                                                                         /> 
                                                                       <SideBarMenuItem
                                                                             menu={{
                                                                                 name: "Agent Request",
                                                                              icon: "LuUserCheck",
                                                                                 path: "/dashboard/organizer-request",
                                                                             }}
                                                                        />
                                                                        <SideBarMenuItem
                                                                       menu={{
                                                                             name: "Wishlist",
                                                                            icon: "LuDollarSign",
                                                                          path: "/dashboard/wishlist",
                                                                        }}
                                                                   />
                                                                       
                                                                    </>
                                    
                            )}
                            {user?.role === "organizer" && (
                            
                                                                 <>
                                                                   {/* <SideBarMenuItem
                                                                        menu={{
                                                                            name: "User Dashboard",
                                                                        icon: "LuCommand",
                                                                             path: "/dashboard/user",
                                                                      }}
                                                                     /> */}
                                                                    
                                                                    <SideBarMenuItem
                                                                        menu={{
                                                                            name: "Properties",
                                                                         icon: "LuUserCog",
                                                                            path: "/dashboard/pro",
                                                                        }}
                                                               />
                                                                  <SideBarMenuItem
                                                                       menu={{
                                                                             name: "Property Add",
                                                                            icon: "LuDollarSign",
                                                                          path: "/dashboard/adding",
                                                                        }}
                                                                   />
                                                                    <SideBarMenuItem
                                                                       menu={{
                                                                             name: "Wishlist",
                                                                            icon: "LuDollarSign",
                                                                          path: "/dashboard/wishlist",
                                                                        }}
                                                                   />
                                                              </>
                               
                            )}
                            {user?.role === "admin" && (
                                  <>
                                                                      <SideBarMenuItem
                                                                         menu={{
                                                                             name: "Users",
                                                                         icon: "LuUser",
                                                                             path: "/dashboard/user",
                                                                         }}
                                                                     />
                                                                      
                                                                  </>
                            )}
                            <SideBarMenuItem
                                menu={{
                                    name: "Back to Home",
                                    icon: "LuHome",
                                    path: "/",
                                }}
                            />
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

Sidebar.propTypes = {
    sidebarOpen: PropTypes.bool,
    setSidebarOpen: PropTypes.func,
};

export default Sidebar;




