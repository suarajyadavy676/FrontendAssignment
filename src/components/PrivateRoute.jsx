import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

function PrivateRoute({children}) {
  let navigate = useNavigate()
  let token = localStorage.getItem("token")
  useEffect(()=>{
    if(!token){
      return navigate('/login') 
    }
  },[navigate,token])
  return (children)
}

export default PrivateRoute