import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [users, setUsers] = useState([]);
    const [userId, setuserId] = useState("1");

    // Component did Mount
    useEffect(() => {
        console.log("only once at mounting stage");
        
        (async()=>{
            const url = "https://jsonplaceholder.typicode.com/users";
        const data = await(await axios.get(url)).data;
        setUsers(data)
        console.log(users);
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



    return (
        <>
            <a href='users'>Link to users</a>
            <Link to="users">Users</Link>
            <h1> user login status -{"" + isLoggedin}</h1>
            <button onClick={() => setIsLoggedin(true)}>Login</button>
            <input type="number" min="1" max="10" onChange={e => setuserId(e.target.value)} />
            {/* <Link to= "/">Home</Link> */}
        </>
    )
}

export default Home