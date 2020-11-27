import React, { Component } from 'react';
import isnull from 'lodash.isnull';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';



class Profil extends Component {

  render(){
    if (isnull(this.props.user)) return 'loading..'
    if (this.props.user === false) return <Redirect to='/'/>

    return(
        
        <Container style={{ width: "550px" }}>
            <Row style={{ marginTop: "50px", marginBottom: "40px", justifyContent:"center" }}><h1>MY PROFIL</h1></Row>
            
      
            <p>Welcome {this.props.user.firstname} {this.props.user.lastname}</p>

            <Row>
                <Col><b>Account ID</b></Col>
                <Col>{this.props.user._id}</Col>
            </Row>

            <Row >
                <Col><b>Registered account</b></Col>
                <Col>{this.props.user.email}</Col>
            </Row>

            <Row >
                <Col><b>Member since</b></Col>
                <Col>{this.props.user.createdAt}</Col>
            </Row>

            <Row>
                    <form>
                    <p><b>MODIFY MY CONNECTION DATA</b></p>
                      <Col>
                        <input type="email" name="email" placeholder="Email" />
                      </Col>
                      <Col>
                        <input type="password" name="password" placeholder="Password" />
                      </Col>

                      <p><b>COMPLETE MY PROFIL</b></p>
                      <p> Fill out your profile and directly benefit from all the advantages linked to your loyalty accounts.</p>

                      <Col>
                        <input type="text" name="civility" placeholder="Civility"  />
                      </Col>
                      <Col>
                        <input type="text" name="firstname" placeholder="Firstname" />
                      </Col>
                      <Col>
                        <input type="text" name="lastname" placeholder="Lastname" />
                      </Col>

                      <Col>
                        <input type="text" name="dateOfBirth" placeholder="Date of Birth" />
                      </Col>

                      <p><b>ADDRESS</b></p>
                      
                      <Col>
                        <input type="number" name="numberAddress" placeholder="N°" />

                        <input type="text" name="typeofstreet" placeholder="Street" />
                      </Col>

                      <Col>
                        <input type="text" name="additionalAddress" placeholder="Additional address info" />
                      </Col>
                      <Col>
                        <input type="text" name="zipcode" placeholder="Zip Code" />

                        <input type="text" name="city" placeholder="City" />
                      </Col>
                      <Col>
                        <input type="text" name="country" placeholder="Country" />
                      </Col>

                      <p><b>CONTACT</b></p>

                      <Col>
                        <input type="text" name="mobileNumber" placeholder="Phone number" />
                      </Col>
                      <Col>
                        <input type="text" name="idWechat" placeholder="ID Wechat" />
                      </Col>
                      <Col>
                        <input type="text" name="idLine" placeholder="ID Line" />
                      </Col>

                      <Col><input type="submit" value="LOG IN" /></Col>
                  </form>
            </Row>

            
          
        </Container> 
                           
)}
}


export default Profil;
