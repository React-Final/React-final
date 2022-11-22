import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"

export default function Navb() {
  return (
    <div>
           <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Link to="/Home">Home</Link>
            <Link to="/Album">Album</Link>
            <Link to="/Artist">Artist</Link>
            <Link to="/Fav">Fav</Link>
          </Nav>
        </Container>
      </Navbar>
      
    

    </div>
  )
}
