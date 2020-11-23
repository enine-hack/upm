import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Menu = () => { 
    return (
        <Container style={{ marginBottom: "200px"}}>
            <Row style={{ height: "250px",
                          
                          flexDirection: 'row',
                          justifyContent: "center",
                         }}>
                <Col style={{ backgroundColor: "#EDEDED"}}><Link to='/'>UPOSH|ME <br></br>CONCEPT</Link></Col>
                <Col style={{ backgroundColor: "#CCCCCC"}}><Link to='/'>UPOSH|ME <br></br>ALL LUXURY BRANDS</Link></Col>
                <Col style={{ backgroundColor: "#898989"}}><Link to='/'>UPOSH|ME <br></br>LIVE THE EXPERIENCE</Link></Col>
                <Col style={{ backgroundColor: "#232323"}}><Link to='/'>UPOSH|ME <br></br>PARTNERS ZONE</Link></Col>
            </Row>
        </Container>
    )
  }
   
export default Menu;