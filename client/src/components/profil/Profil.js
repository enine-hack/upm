import React, { Component } from 'react';
import {login} from '../auth/auth-service'

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const Profil = (props) => {
    return(
        
        <Container style={{ width: "550px" }}>
            <Row style={{ marginTop: "50px", marginBottom: "40px", justifyContent:"center" }}><h1>MY PROFIL</h1></Row>
            
            <Row style={{ marginBottom: "20px", paddingTop:"20px", paddingBottom:"20px", justifyContent: "center" }}>
                {props.userInSession ? (
                    
                    <p>Welcome, {props.userInSession.firstname} {props.userInSession.lastname}</p>
                    
                ) : (
                    <div>
                    You are not logged
                    <button style = {{ borderStyle: "none", backgroundColor: "white" }} 
                            onClick={(e) => {
                            login().then(() => props.updateUser(null)) //A FAIRE
                            }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjT6UZF04t0klbLlaltNsKu6RzbcQKuPhBKQ&usqp=CAU"
                                     style={{ width: "30px", height: "30px" }}
                        /></button>
                    </div>

                    
                )}
                        
                                {/* IL FAUDRA METTRE TOUT CE QUI SUIT DANS SI LOGGUE */}

            </Row>

            <Row style={{  backgroundColor: "#F6F6F6", paddingTop: "10px", paddingBottom: "10px", textAlign: "left" }}>
                <Col><b>Account ID</b></Col>
                <Col>9384859872878</Col>
            </Row>

            <Row style={{  backgroundColor: "#F6F6F6", paddingTop: "10px", paddingBottom: "10px", textAlign: "left" }}>
                <Col><b>Registered account</b></Col>
                <Col>elodie.c@ironhack.com</Col>
            </Row>

            <Row style={{  backgroundColor: "#F6F6F6", paddingTop: "10px", paddingBottom: "10px", textAlign: "left" }}>
                <Col><b>Member since</b></Col>
                <Col>25/11/2020</Col>
            </Row>

                        

            

            <Row style={{ marginTop: "40px", justifyContent: "center"}}>
          <form>
          <p style={{ paddingLeft: "30px", marginBottom: "15px", textAlign: "left" }}><b>MODIFY MY CONNECTION DATA</b></p>
            <Col>
              <input style={{ width: "550px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="email" name="email" placeholder="Email" />
            </Col>
            <Col>
              <input style={{ width: "550px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="password" name="password" placeholder="Password" />
            </Col>

            <p style={{ marginTop: "10px", paddingLeft: "30px", textAlign: "left" }}><b>COMPLETE MY PROFIL</b></p>
            <p style={{ width: "530px", paddingLeft: "30px", textAlign: "left" }}> Fill out your profile and directly benefit from all the advantages linked to your loyalty accounts.</p>

            <Col>
              <input style={{ width: "550px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "30px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="civility" placeholder="Civility"  />
            </Col>
            <Col>
              <input style={{ width: "550px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="firstname" placeholder="Firstname" />
            </Col>
            <Col>
              <input style={{ width: "550px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="lastname" placeholder="Lastname" />
            </Col>

            <Col>
              <input style={{ width: "550px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="dateOfBirth" placeholder="Date of Birth" />
            </Col>

            <p style={{ paddingLeft: "30px", textAlign: "left" }}><b>ADDRESS</b></p>
            
            <Col>
              <input style={{ width: "100px", paddingLeft: "15px", paddingBottom:"6px", marginRight: "20px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="number" name="numberAddress" placeholder="N°" />

              <input style={{ width: "428px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="typeofstreet" placeholder="Street" />
            </Col>

            <Col>
              <input style={{ width: "550px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="additionalAddress" placeholder="Additional address info" />
            </Col>
            <Col>
              <input style={{ width: "150px", paddingLeft: "15px", paddingBottom:"6px", marginRight: "20px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="zipcode" placeholder="Zip Code" />

              <input style={{ width: "380px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="city" placeholder="City" />
            </Col>
            <Col>
              <input style={{ width: "550px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="country" placeholder="Country" />
            </Col>

            <p style={{ paddingLeft: "30px", textAlign: "left" }}><b>CONTACT</b></p>

            <Col>
              <input style={{ width: "550px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="mobileNumber" placeholder="Phone number" />
            </Col>
            <Col>
              <input style={{ width: "550px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="idWechat" placeholder="ID Wechat" />
            </Col>
            <Col>
              <input style={{ width: "550px", paddingLeft: "15px", paddingBottom:"6px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="idLine" placeholder="ID Line" />
            </Col>

            <Col><input style={{ width: "550px", height: "45px", border: "none", backgroundColor: "#1a1a1a", color: "white" }} type="submit" value="LOG IN" /></Col>
          </form>
        </Row>

  
            

        </Container> 
            
        
        
    )
}

export default Profil;