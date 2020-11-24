import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Newsletter from '../footer/Newsletter';

const Footer = (props) => {
    return (
        <Container fluid className="footer-style">
        <hr></hr>
        <Container>
            <Row style={{ height: "50px", marginBottom: "30px"}}>
                <Col xs lg="auto" style={{ marginTop:"8px"}}> <Link to= "/">FAQ</Link></Col>
                <Col xs lg="auto" style={{ marginTop:"8px"}}> <Link to= "/">CONTACT</Link></Col>
                <Col xs lg="auto" style={{ marginTop:"8px"}}> <Link to= "/">LEGAL TERMS</Link></Col>
                <Col xs lg="auto" style={{ marginTop:"8px"}}> <Link to= "/">PRIVACY POLICY</Link></Col>
                <Col xs lg="auto" style={{ marginLeft:"auto"}}> <Newsletter /></Col>
        
                
            </Row>
            </Container> 

        </Container>     
  )
}

export default Footer;