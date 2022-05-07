import React from 'react'
import { Navbar, Container,Nav, NavDropdown, Form, FormControl, Button, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'
import { IState } from '../reducers/countReducer';
import { logoutAction } from '../reducers/userReducer';


function MyNav() {
  const [searchParams, setSearchParams] = useSearchParams();
  const count = useSelector((state:any)=>state.countReducer.count);
  const isLoggedIn = useSelector((state:any)=>state.userReducer.isLoggedIn);
  const dispatch = useDispatch()

  const logoutUser = async (e:any)=>{
    dispatch(logoutAction() as any);
}

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
  <Container fluid>
  <Navbar.Brand as={Link} to="/home" >React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>

      <Nav.Link as={Link} to="/users">Users</Nav.Link>
    </Nav>
    <Nav className='ms-auto'>
      <Nav.Link as={Link} to ="/counter">Counter <Badge pill bg="primary">{""+ count}</Badge></Nav.Link>
      
      {!isLoggedIn?(<>
      <Nav.Link as={Link} to ="/login" >
        Login
      </Nav.Link></>):
      (<>
      <Nav.Link as={Link} to ="/profile">Profile</Nav.Link>
      <Nav.Link as={Button} variant="outline" onClick={logoutUser}>
        Logout
      </Nav.Link></>)}
      
      {isLoggedIn?null:<><Nav.Link as={Link} to ="/signup" >
        Signup
      </Nav.Link></>}
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={e=>setSearchParams({search:e.target.value})}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default MyNav