import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Book Store</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/getallbooks">Books</Nav.Link>
            <Nav.Link href="/addbook">Add Book</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <hr />
     
   
  
    </div>
  )
}

export default NavBar