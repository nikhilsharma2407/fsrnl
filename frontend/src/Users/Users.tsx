import React, { Component } from 'react'
import "./Users.css";


export default class Users extends Component {

  render() {
    //   const users:string[] = ["Nikhil","abc","xyz","1","2","3","4"];
      const users:{name:string}[] = [
          {name:"Nikhil"},
            {name:"abc"},
            {name:"xyz"},
            {name:"1"},
            {name:"2"},
            {name:"3"},
            {name:"4"}
    ]
    //   [<h1>Nikhil</h1>,<h1>abc</h1>...]
    return (
      users.map(user=>{
          return <h1>{user.name}</h1>
      })
    )
  }
}
