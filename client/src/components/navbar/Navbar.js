// components/navbar/Navbar.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {logout} from '../auth/auth-service'

const navbar = (props) => {
  return (
    <nav className="nav-style">
      {props.userInSession ? (
        <ul>
            <li>Welcome, {props.userInSession.username}</li>
            <li>
                <Link to='/' style={{textDecoration: 'none'}}>Brands</Link>
            </li>
            {/* HERE */}
            <li>
                <button onClick={(e) => {
                logout().then(() => props.updateUser(null))
                }}>Logout</button>
            </li>
        </ul>
      ) : (
        <Container fluid>
            <Row >
                <Col xs lg="1"></Col>
                <Col>UPOSH|ME</Col>
                <Col md="auto"><Link to='/signup' style={{textDecoration: 'none'}}>Signup</Link></Col>
            </Row>
        </Container>
      )}
      
    </nav>
  )
}

export default navbar;