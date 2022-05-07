import { addListener } from 'process';
import React, { useEffect, useState } from 'react'
import { Form, Button, Col, Row, Container } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, loginCookieAction } from '../reducers/userReducer';
import { login, loginWithCookie, logout } from '../services/apiRequest';

function Login() {

    const [password, setpassword] = useState('');
    const [username, setusername] = useState("");
    const [isValid, setIsValid] = useState(false);
    const isloggedIn = useSelector((state:any)=>state.userReducer.isLoggedIn);
    // const [isloggedIn, setisloggedIn] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const isFormDataValid = password.length>0 && username.length>0;
        setIsValid(isFormDataValid);
    }, [username,password])
    
    useEffect(() => {
        dispatch(loginCookieAction() as any)
    }, [])
    


    const validate = e=>{
        const pwd = e.target.value;
        setpassword(pwd);
    }

    const loginUser = async (e:any)=>{
        try {
            e.preventDefault();
            const payload = {username,password};
            dispatch(loginAction(payload)as any);
            // const response = await (await login(payload)).data;
            // console.log(response);
            // if(response.success){
            //     alert(response.message);
            //     setisloggedIn(true)
            // }    
        } catch (error:any) {
            console.log(error.response as any);
        }        
    }
    const logoutUser = async (e:any)=>{
        try {
            const response = await (await logout()).data;
            console.log(response);
            if(response.success){
                alert(response.message);
                // setisloggedIn(false)
            }    
        } catch (error) {
            console.log(error);
        }        
    }
    return (
        <>
            <Container>
                <Row>
                    <Col md="6" sm="8" lg="4" className="offset-lg-4 offset-md-3 offset-sm-2">
                        {isloggedIn?<><h1>User Logged in</h1> <Button onClick={logoutUser}>Logout</Button></>:<Form>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control  placeholder="Enter username" onChange = {e=>setusername(e.target.value)} />
                                <Form.Text className="text-muted">
                                    We'll never share your data with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                onKeyUp={validate}/>
                            </Form.Group>
                            <Button className = "col-12" variant="outline-primary" type="submit" onClick = {loginUser} disabled = {!isValid}>
                                Login
                            </Button>
                        </Form>}
                        
                    </Col>
                </Row>
                
            </Container>

        </>
    )
}

export default Login