import React, { useState } from 'react'
import {Switch, BrowserRouter, Route, Routes } from 'react-router-dom'
import Menus from '../components/Menus'
import Banner from '../components/Banner'
import Signup from '../components/Signup'
import Detail from '../components/Detail'
import Propertyadding from '../components/Propertyadding'
import Buy from '../components/Buy'
import Rent from '../components/Rent'
import Commercial from '../components/Commercial'
import Agent from '../components/Agent'
import Agentopen from '../components/Agentopen'
import HomeCard from '../Card/HomeCard'
import Signupp from '../components/Signupp'
import Agentdata from '../Card/Agentdata'
import GetoneAgentpro from '../components/GetoneAgentpro'
import Findagent from '../components/Findagent'
import Editproduct from '../components/Editproduct'
import Search from '../components/Search'
import Bannersearch from '../components/Bannersearch'
import Usersignup from '../User/Usersignup'
import Home2Card from '../Card/Home2Card'
import Userlogin from '../User/Userlogin'
import Searchhome from '../components/Searchhome'
import Usermenu from '../User/Usermenu'
import Agentmenu from '../Agent/Agentmenu'
import Login from '../auth/Login'
import Adminsignup from '../Admin/Adminsignup'
import Adminmenu from '../Admin/Adminmenu'
import Admindash from '../Admin/Admindash'
import Agentlist from '../Admin/Agentlist'
import Userlist from '../Admin/Userlist'
import Propertylist from '../Admin/Propertylist'
import Category from '../components/Category'
import Searched1 from '../Category/Searched1'
import Dashboard from '../Dash/Dashboard'
import Register from '../auth/Register'
import Main from '../Main/Main'
import Buysearch from '../components/Buysearch'
import RequestAgent from '../Agent/RequestAgent'
import Mainsearch from '../Search/Mainsearch'
import Bannerop from '../components/Bannerop'
import PrivateRouter from './PrivateRoute'
import DashboardHome from '../Dashbboard/DashboardHome'
import DashboardAdminHome from '../Dashbboard/DashboardAdminHome'
import Showrqst from '../Agent/Showrqst'
import UsersList from '../Admin/UsersList'
import Wishlist from '../Wish/Wishlist'
import Allproperties from '../components/Allproperties'
import Profile from '../Dash/Profile'
import Propertybyone from '../Agent/Propertybyone'


function Router() {
 
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
      <Route path='/prop' element={<><Usermenu/><Propertybyone/></>}></Route>
      {/* <Route path='/wishlist' element={<Wishlist/>}></Route> */}
      {/* <Route path='/profile' element={<><Usermenu/><Profile/></>}></Route> */}
      {/* <Route path='/' element={<><Usermenu/><Banner/></>}></Route> */}
      <Route path='/' element={<><Usermenu/><Bannerop/><Mainsearch/></>}></Route>
      <Route path='/Main' element={<><Main/></>}></Route>
      <Route path='/home' element={<><Usermenu/><Bannerop/><Mainsearch/></>}></Route>
      <Route path='/all' element={<><Usermenu/><Allproperties/></>}></Route>
      <Route path='/Agentrqst' element={<><Usermenu/><RequestAgent/></>}></Route>
        <Route path='/buys' element={<><Usermenu/><Buysearch/></>}></Route>
        {/* <Route path='/dash' element={<><Dashboard/></>}></Route> */}
        <Route path='/admin/:id' element={<><Adminmenu/> <Admindash/></>}></Route>
        <Route path='/agentlist' element={<><Adminmenu/> <Agentlist/></>}></Route>
        <Route path='/userlist' element={<><Adminmenu/> <Userlist/></>}></Route>
        {/* <Route path='/propertylist' element={<><Adminmenu/> <Propertylist/></>}></Route> */}
        <Route path='/a' element={<><Menus/> <Search/></>}></Route>
        <Route path='/aa' element={<><Menus/> <Bannersearch/></>}></Route>
        {/* <Route path='/' element={<><Menus/> <Banner/> <HomeCard/></>}></Route>
        <Route path='/home' element={<><Menus/> <Banner/> <Home2Card/></>}></Route> */}
       
        {/* <Route path='/home/:email' element={<><Menus/> <Bannerop/></>}></Route> */}
      
        {/* <Route path='/home' element={<><Main/><Bannerop/></>}></Route> */}
        {/* <Route path='/sign' element={<> <Signup/></>}></Route> */}
        {/* <Route path='/Login' element={<Userlogin/>}></Route> */}
        {/* <Route path='/open/:pemail' element={<><Menus/> <Agentopen/> <Demo/></>}></Route> */}
        <Route path='/open/:pemail' element={<><Usermenu/><Agentopen/></>}></Route>
        {/* <Route path='/adding' element={<><Usermenu/> <Propertyadding/></>}></Route> */}

        <Route path='/detail/:_id' element={<><Usermenu/> <Detail/></>}></Route>
        <Route path='/detail/:_id/:ids/:email' element={<><Usermenu/> <Detail/></>}></Route>


        <Route path='/buy/:sell' element={<><Usermenu/> <Buy/></>}></Route>
        <Route path='/rent/:sell1' element={<><Usermenu/> <Rent/></>}></Route>
        <Route path='/commercial/:sell2' element={<><Usermenu/> <Commercial/></>}></Route>
        {/* <Route path='/agent/:email' element={<><Menus/> <Agent/></>}></Route> */}
        <Route path='/agent/:email' element={<><Usermenu/> <Agentdata/></>}></Route>
        <Route path='/getone/:email' element={<><Usermenu/> <GetoneAgentpro/></>}></Route>
        <Route path='/findagent' element={<><Usermenu/> <Findagent/></>}></Route>
        <Route path='/1/:pemail' element={<><Agentopen/></>}></Route>
        <Route path='/2' element={<><Register/></>}></Route>
        
        
        
        {/* <Route path="/w" element={<Product addToWishlist={addToWishlist} />}> </Route> */}
       <Route path="/ha" element={<Editproduct/>}></Route> 
        {/* <Route path='/toast' element={<><Menus/>,<Product/></>}></Route> */}

        <Route path='/Login' element={<Login/>}></Route> 
        <Route path='/adminsignup' element={<Adminsignup/>}></Route> 
        <Route path='/category' element={<Category/>}></Route> 
        <Route path='/categories' element={<Searched1/>}></Route> 
        {/* <Route path="/h" element={loggedInUser ? <Demo loggedInUser={loggedInUser} /> : <Menus setLoggedInUser={setLoggedInUser} />} />
        <Route path="/product-form" element={<Addpro loggedInUser={loggedInUser} />} />
        <Route path="/product-list" element={<Demo loggedInUser={loggedInUser} />} /> */}


<Route
        path="/dashboard"
        element={
          <PrivateRouter>
           <Dashboard />
          </PrivateRouter>
        }
      >
        <Route path="user" element={<PrivateRouter><UsersList/></PrivateRouter>} />
        <Route path="admin" element={<PrivateRouter><DashboardAdminHome/></PrivateRouter>} />
        <Route path="organizer-request" element={<PrivateRouter><Showrqst/></PrivateRouter>} />
        <Route path="properties" element={<PrivateRouter><Propertylist/></PrivateRouter>} />
        <Route path="adding" element={<PrivateRouter><Propertyadding/></PrivateRouter>} />
        <Route path="pro" element={<PrivateRouter><Propertybyone/></PrivateRouter>} />
        <Route path="profile" element={<PrivateRouter><Profile/></PrivateRouter>} />
        <Route path="wishlist" element={<PrivateRouter><Wishlist/></PrivateRouter>} />
        
      </Route>

      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Router
