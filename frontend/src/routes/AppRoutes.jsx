import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserRegister from '../components/UserRegister'
import UserLogin from '../components/UserLogin'

import PartnerRegister from '../components/PartnerRegister'
import PartnerLogin from '../components/PartnerLogin'
import PartnerLogout from '../components/PartnerLogedOut'
import Home from '../components/Home'
import CreateFood from '../components/CreateFood'
import FoodPartnerProfile from '../components/FoodPartnerProfiel'
import ChooseRegister from '../components/ChooseRegister'



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<ChooseRegister/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        

        {/* Food Partner Routes */}
        <Route path="/foodpartner/register" element={<PartnerRegister />} />
        <Route path="/foodpartner/login" element={<PartnerLogin />} />
        <Route path="/foodpartner/logout" element={<PartnerLogout />} />
        <Route path='/foodpartner/create-food' element={<CreateFood/>}/>
        <Route path='/food-partner/:id' element={<FoodPartnerProfile/>}/>

      </Routes>
    </Router>
  );
};



export default AppRoutes


