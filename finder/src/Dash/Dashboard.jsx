
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    return (
        <div className="dashboard-container">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="content-area">
                <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="main-content">
                    <div className="inner-container">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;



// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState();

//   return (
//     <div className="d-flex vh-100">
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       <div className="flex-grow-1 d-flex flex-column overflow-hidden">
//         <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//         <main className="flex-grow-1 overflow-auto">
//           <Container fluid>
//             <Row className="justify-content-center">
//               <Col xs={12} md={12} lg={10} xl={9} className="py-2">
//                 <Outlet />
//               </Col>
//             </Row>
//           </Container>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;