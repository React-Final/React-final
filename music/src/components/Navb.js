import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom"
import "./Navb.css"


export default function Navb() {
  return (
    <div>   
        <Container className='container'>
          <Nav className='nav'>
            <Link to="/Home">Home</Link>
            <Link to="/Album">Album</Link>
            <Link to="/Artist">Artist</Link>
            <Link to="/Fav">Fav</Link>
          </Nav>
        </Container>
    </div>
  )
}
