import React, { Component } from 'react'
import axios, { Axios } from 'axios';
import User from '../User/User';
import IUser from "../User/IUser";
import "./Users.css";



interface Constructor{
  users:IUser[];
  userId:number;
}
export default class Users extends Component<{},Constructor> {

  constructor({}){
    super({});
    this.state = {
      users:[],
      userId :0
    }
  }


  async componentDidMount(){
    console.log("componentDidMount");
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = await (await axios.get(url)).data;
    console.log(data);
    this.setState({users:data})
  }

  async componentDidUpdate(){
    console.log("componentDidUpdate");
    
    const {userId}  = this.state
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const data = await (await axios.get(url)).data;
    console.log("user data",data);
  }

  render() {
    console.log("render");
    
    const {users:myUsers} = this.state
    return (
      <>
        <input placeholder='user id' type="number"  min="0" max="10" onChange={(e)=>{this.setState({userId:+e.target.value})}}/>
        {myUsers.map(user=>{
            return <User name={user.name} email={user.email}/>
        })}
      </>
    )
  }
}
