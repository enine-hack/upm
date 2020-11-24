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
            <li>Welcome, {props.userInSession.firstname} {props.userInSession.lastname}</li>
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
        <Container fluid >
            <Row style={{ height: "50px", alignItems: "center" }}>

                <Col md="auto" style={{ paddingLeft: "15px" }}>
                  <Link to='/signup'>
                    <img style= {{ width: "30px", height: "30px", marginLeft: "20px"}} 
                        src="https://www.ofunifr.ch/assets/navigation.png" alt="menu"/></Link></Col>

                <Col style={{ fontSize: "17px" }}>UPOSH | ME</Col>

                <Col md="auto">
                  <Link to='/signup' style={{textDecoration: 'none'}}>
                    <img style= {{ width: "25px", height: "25px" }} src="https://image.flaticon.com/icons/png/128/3106/3106773.png" alt="profil"/></Link></Col>
            </Row>
        </Container>
      )}
      
    </nav>
  )
}

export default navbar;