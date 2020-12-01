// components/navbar/Navbar.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {logout} from '../auth/auth-service'

const navbar = (props) => {
  return (
    <nav className="nav-style">
      {props.userInSession ? (
          <Container fluid>
            <Row>
            <Col><Link to='/'>UPOSH | ME</Link></Col>
              <Col md="auto">{props.userInSession.firstname} {props.userInSession.lastname}</Col>
              <Col md="auto"><Link to='/'>Brands</Link></Col>
              <Col md="auto"><Link to='/profil'>Profile</Link></Col>
              <Col xs lg="1">
                <button onClick={(e) => {
                  logout().then(() => props.updateUser(false))
                  }}>LOG OUT</button>
              </Col>

            </Row>    
            
            <hr className="nav-hr"></hr>

          </Container>
        
      ) : (
        <Container fluid >
            <Row style={{ marginTop: "8px", marginBottom: "8px", height: "40px", alignItems: "center" }}>

                <Col md="auto" style={{ paddingLeft: "15px" }}>
                  <Link to='/signup'>
                    <img style= {{ width: "30px", height: "30px", marginLeft: "20px"}} 
                        src="https://www.ofunifr.ch/assets/navigation.png" alt="menu"/></Link></Col>

                <Col style={{ fontSize: "17px" }}><Link to='/'>UPOSH | ME</Link></Col>

                <Col md="auto">
                  <Link to='/signup'>
                    <img style= {{ width: "25px", height: "25px" }} src="https://image.flaticon.com/icons/png/128/3106/3106773.png" alt="profil"/></Link></Col>
            </Row>
            <hr style={{ marginTop: "0px", marginBottom:"0px" }}></hr>
        </Container>
      )}
      
    </nav>
  )
}

export default navbar;