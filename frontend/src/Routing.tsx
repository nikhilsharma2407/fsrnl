import React from 'react'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'



function Routing() {
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