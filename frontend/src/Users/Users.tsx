// import React, { Component } from 'react'
import axios, { Axios } from 'axios';
import "./Users.css";

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import IUser from '../FbUser/IUser';
import User from '../FbUser/User';
import { Button } from 'react-bootstrap';

function Users() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [userId, setuserId] = useState("1");
  const [searchParam] = useSearchParams();

  // Component did Mount
  useEffect(() => {
      console.log("only once at mounting stage");
      
      (async()=>{
          const url = "https://dummyapi.io/data/v1/user?limit=10";
      const userdata = await(await axios.get(url,{headers:{"app-id":"623f19872934031e5b0d8089"}})).data;
      console.log(userdata.data);
      setUsers(userdata.data);
  })()
  },[]);

  // Component did update -> running based on selected state variables
  useEffect(() => {
      console.log("Side effect for dependency array");
      
      // (async()=>{})()    
      const fn = async () => {
          console.log("useEffect");
          console.log(isLoggedin);
          

          const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
          const data = await (await axios.get(url)).data;
          console.log("user data", data);

      }
      fn();

      return () => {

      }
  }, [userId,setIsLoggedin])

  const changeName = ()=>{
    const users_:IUser[] = [...users];
    if(users_.length){
      users_[0].firstName = "new Name";
    }
    setUsers(users_)
  }
  const searchTerm:string = searchParam.get("search")?.toLowerCase() || ""
  return (
    <>    
        <Button variant="success" onClick ={changeName} >Change User</Button>
          <h1> search-{ searchTerm}</h1>
         {/* <input placeholder='user id' type="number"  min="0" max="10" onChange={(e)=>setuserId(+e.target.value)/> */}
         {/* convert t lowercase for case insensitive match */}
         {users.filter(user=>user.firstName.toLowerCase().includes(searchTerm))
         .map(user=>{
            return <User key={user.id} user = {user} />
        })}
      </>
  )
}

export default Users