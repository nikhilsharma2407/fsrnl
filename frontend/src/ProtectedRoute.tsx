import React from 'react'
import { Navigate } from 'react-router'

function ProtectedRoute(props) {
    console.log(props);
    const {isLoggedIn,children} = props;
  if(!isLoggedIn){
      alert("Please login to continue!!!");
      return <Navigate to="/login" replace/>
  }
  return children
}

export default ProtectedRoute