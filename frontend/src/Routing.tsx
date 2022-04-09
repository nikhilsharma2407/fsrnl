import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'



function Routing() {

  useEffect(()=>{
    (async()=>{
        const url1 = "http://localhost:5000/user/123?name=nikhil";

        const data = await axios.get(url1);
        console.log(data)
      })()
  
  }, [])

    const param = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(param);
    
    // useSearchParams
  return (
      <>
      <h1>Routing component</h1>
      <h1>userid - {param.userid} </h1>
      <h1>search param - {searchParams.get("userSearch")} </h1>
      <h1>name - {searchParams.get("name")} </h1>
    <div><input type="text" onChange={e=>setSearchParams({userSearch:e.target.value})} /></div>
    </>
  )
}

export default Routing