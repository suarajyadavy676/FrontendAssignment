import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate()
  return (
    <div className='text-center my-40 text-lg'>
    <h1 className='text-center text-blue-900 text-xl mb-20 font-bold'>Who are You ?</h1>
      <button onClick={()=>navigate("/admin-sign-up")} className='bg-blue-200 mx-10 px-3 rounded-sm hover:text-red-600 my-5 shadow-2xl shadow-red-400'>Admin</button>
      <button onClick={()=>navigate('/instructor-sign-up')} className='bg-slate-400 mx-10 px-3 rounded-sm hover:text-red-600 my-5 shadow-2xl'>Instructor</button>
    </div>
  )
}

export default Home
