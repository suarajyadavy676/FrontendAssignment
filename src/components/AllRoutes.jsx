import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AdminSignUp from '../routes/AdminSignUp'
import AdminLogin from '../routes/AdminLogin'
import InstructorSignUp from '../routes/InstructorSignUp'
import InstructorLogin from '../routes/InstructorLogin'
import AdminDashboard from '../routes/AdminDashboard'
import InstructorDashboard from '../routes/InstructorDashboard'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin-sign-up" element={<AdminSignUp/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/instructor-sign-up" element={<InstructorSignUp/>}/>
        <Route path="/instructor-login" element={<InstructorLogin/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="/instructor-dashboard" element={<InstructorDashboard/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
