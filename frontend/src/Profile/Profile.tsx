import React from 'react'
import { useSelector } from 'react-redux';
import { IUserState } from '../reducers/userReducer';
import Friend from './Friend';
import "./profile.scss";

function Profile() {
  const {username,isLoggedIn,name,friendList} = useSelector((state:any)=>state.userReducer);

  console.log(username);
  

  return (
    <>
    <h1>Welcome {name}</h1>
    {friendList.map(id=>
      <Friend username = {username} id ={id} key={id}/>
    )}
    </>
    
  )
}

export default Profile