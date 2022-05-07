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
import Counter from './Counter/Counter';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk'
import Profile from './Profile/Profile';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const name = "Nikhil";
  const store = createStore(rootReducer,applyMiddleware(thunk));
  // const isLoggedIn = useSelector((state:any)=>state.userReducer.isLoggedIn);
  const isLoggedIn = true;
  return (
    <Provider store = {store}>
      {/* <h1>isLoggedIn-{isLoggedIn}</h1> */}
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Route Param */}
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile/>
            </ProtectedRoute>
          } />
          <Route path='/counter' element={<Counter />} />
          <Route path='/test/:userid' element={<Routing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/users" element={<Users />}>
            <Route path='userDetail' element={<TestClass />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
