import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, incrementAsyncAction, IState } from '../reducers/countReducer';

function Counter() {
    const [incrementBy, setincrementBy] = useState(0);
    const count = useSelector((state:any)=>state.countReducer.count);
    const state = useSelector((state:any)=>state);

    const dispatch = useDispatch();

    const increment=(value)=>{
        console.log(state);
        
        // dispatch({type:"INCREMENT"})
        dispatch(incrementAction(value));
    }
    const incrementAsync=(value)=>{
        
        dispatch(incrementAsyncAction(value) as any);
    }
    const decrement=()=>{
        dispatch(decrementAction())
    }


    // const increment=()=>{
    //     setCount(count+1)
    // }
    // const decrement=()=>{
    //     setCount(count-1)
    // }
  return (
    <>
        <div className="text-center">
            <h1>Count: {count}</h1>
            <input type="number" min="1" onChange={e=>setincrementBy(parseInt(e.target.value||"1"))} />
            <Button variant="success" className="me-5" onClick={()=>incrementAsync(incrementBy)}>Increase by async {incrementBy}</Button>
            <Button variant="warn" className="me-5" onClick={()=>increment(incrementBy)}>Increase by {incrementBy}</Button>
            <Button variant="danger" onClick={decrement}>Decrease</Button>
        </div>
    </>
  )
}

export default Counter