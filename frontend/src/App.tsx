import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users/Users';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import TestClass from './TestClass';
import Routing from './Routing';
import MyNav from './Navbar/Nav';
import Signup from './Signup/Signup';
import Login from './Login/Login';

function App() {
  const name = "Nikhil";
  return (
    <BrowserRouter>
    <MyNav />
    <Routes>
      <Route path="/" element={<Home />}/>
      {/* Route Param */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/test/:userid' element={<Routing/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/users" element={<Users />}>
        <Route path='userDetail' element={<TestClass/>}/>
        </Route>
        
    </Routes>
  </BrowserRouter>
  )
}

export default App;
