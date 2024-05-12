import React from 'react'
import Course from '../components/Course'

function AdminDashboard() {
  return (
    <div>
      <h1 className='text-center font-bold text-xl'>Admin Dashboard</h1>
      <div className='text-center my-8'>
      <Course/>
      </div>
    </div>
  )
}

export default AdminDashboard
