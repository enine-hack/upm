import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Menu = () => { 
    return (
        
        <Container style={{ marginBottom: "200px"}}>
            <Row style={{ marginBottom: "100px"}} >
                <Col style={{ height: "500px", width: "500px", backgroundColor: "#1a1a1a", 
                            paddingRight: "0px", paddingLeft: "0px"}}>
                    <h4><Link to='/'
                        style={{ lineHeight: "500px", textAlign: "center", marginTop: "auto", marginBottom: "auto" }}>CONCEPT</Link></h4></Col>

                <Col style= {{ paddingRight: "200px", paddingLeft: "0px"}} >
                    <img style= {{ width: "670px", height:"500px" }}
                        src ="https://s1.1zoom.me/big0/267/Men_Closeup_Camera_462030.jpg"/>
                </Col>

            </Row>
                
            <Row style={{ marginBottom: "100px"}} >
                <Col style= {{ paddingRight: "200px", paddingLeft: "0px"}} >
                        <img style= {{ width: "670px", height:"500px" }}
                            src ="https://www.collegedeparis.fr/wp-content/uploads/2018/01/ouverture-bachelor-marketing-du-luxe-cdp-700x465.jpg "/></Col>

                <Col style={{ height: "500px", width: "500px", backgroundColor: "#1a1a1a", 
                            paddingRight: "0px", paddingLeft: "0px"}}>
                    <h4><Link to='/'
                        style={{ lineHeight: "500px", textAlign: "center", marginTop: "auto", marginBottom: "auto" }}>ALL LUXURY BRANDS</Link></h4></Col>

            </Row>

            <Row style={{ marginBottom: "100px"}} >
                <Col style={{ height: "500px", width: "500px", backgroundColor: "#DD8B00", 
                            paddingRight: "0px", paddingLeft: "0px"}}>
                    <h4><Link to='/'
                        style={{ lineHeight: "500px", textAlign: "center", marginTop: "auto", marginBottom: "auto" }}>LIVE THE EXPERIENCE</Link></h4></Col>

                <Col style= {{ paddingRight: "200px", paddingLeft: "0px"}} >
                    <img style= {{ width: "670px", height:"500px" }}
                        src ="https://www.hugoboss.com/on/demandware.static/-/Sites-hb-eu/default/dw09f6edfa/search-result-images/BOSS_HUGO_Black_Friday_640x422_Footer.jpg"/></Col>
            </Row>

            <Row style={{ marginBottom: "100px"}} >
                <Col style= {{ paddingRight: "200px", paddingLeft: "0px"}} >
                        <img style= {{ width: "670px", height:"500px" }}
                            src ="https://cdn.trendhunterstatic.com/phpthumbnails/196/196249/196249_1_800.jpeg"/></Col>

                <Col style={{ height: "500px", width: "500px", backgroundColor: "#1a1a1a", 
                            paddingRight: "0px", paddingLeft: "0px"}}>
                    <h4><Link to='/'
                        style={{ lineHeight: "500px", textAlign: "center", marginTop: "auto", marginBottom: "auto" }}>PARTNERS ZONE</Link></h4></Col>

            </Row>
        </Container>
        
    )
  }
   
export default Menu;