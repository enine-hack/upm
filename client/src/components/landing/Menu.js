import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Menu = () => { 
    return (
        <Container fluid >
            <Row style={{ height: "300px",
                          flexDirection: 'row',
                          justifyContent: "center",
                         }}>
                <Col style={{ backgroundColor: "#EDEDED"}}><Link to='/'>UPOSH|ME CONCEPT</Link></Col>
                <Col style={{ backgroundColor: "#CCCCCC"}}><Link to='/'>UPOSH|ME ALL LUXURY BRANDS</Link></Col>
                <Col style={{ backgroundColor: "#E5AC00"}}><Link to='/'>UPOSH|ME LIVE THE EXPERIENCE</Link></Col>
                <Col style={{ backgroundColor: "#7F7F7F"}}><Link to='/'>UPOSH|ME PARTNERS ZONE</Link></Col>
            </Row>
        </Container>
    )
  }
   
export default Menu;