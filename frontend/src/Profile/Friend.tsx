import React, { Component, useEffect, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import userReducer,{addFriendAction, removeFriendAction} from '../reducers/userReducer';
import IUser from '../FbUser/IUser';
import "../FbUser/User.scss";
import axios from 'axios';

function Friend(props) {
    const {id,username} = props;
    console.log(id);
    const dispatch = useDispatch();
    const [user,setUser] = useState<IUser|any>();

    useEffect(() => {
        const url = 'https://dummyapi.io/data/v1/user/'+id;
        (async()=>{
            try {
                console.log("here");
                
                const userdata = await (await axios.get(url, { headers: { "app-id": "623f19872934031e5b0d8089" } })).data;
                console.log(userdata);
                
                setUser(userdata)    
            } catch (error) {
                console.log(error);
            }
            
        })()
      
    }, [])

    if(!user) return <></>
    const {firstName,title,lastName,picture} = user

    const removeFriend = ()=>{
        const name = firstName;
        console.log({id,name,username});
        dispatch(removeFriendAction({id,name,username}) as any);
    }
  return (
      <>
    <Col className='fb-user test123' sm="12" md="6" lg="4">
    <Card className = "m-3 h-100">
        <Card.Header className = "col-12 d-flex">FriendList</Card.Header>
        <Card.Body className = "col-12 d-flex">
            <Image fluid src = {picture} rounded></Image>
            <div className = "card-body__user ms-3">
                <div className="card-body__user-font-name">{`${title} ${firstName} ${lastName}`}</div>
                <Button onClick = {()=>removeFriend()} className="card-body__user-font-btn" variant = "outline-danger">Remove Friend</Button>
            </div>
        </Card.Body>
    </Card>
    </Col>
    </>
  )
}

export default Friend