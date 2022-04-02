import React from 'react'
import { Navbar, Container,Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'


function MyNav() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
  <Container fluid>
  <Navbar.Brand as={Link} to="/home" >React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>

      <Nav.Link as={Link} to="/users">Users</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav className='ms-auto'>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
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