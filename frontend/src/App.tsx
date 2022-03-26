import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users/Users';

function App() {
  const name = "Nikhil";
  return (
    <div className="App">
        {/* <h1 className=''>Hello {name}</h1> */}
      {/* <UserComponet/> */}
      <Users/>
   </div>
  );
}

export default App;
