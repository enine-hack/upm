import React, { Component } from 'react';
import isnull from 'lodash.isnull';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Connexionsettings from './Connexionsettings';
import Completeprofile from './Completeprofile';

// PARENT DE CONNEXION SETTING ET DE COMPLETEPROFILE

class Profil extends Component {

  render(){
    if (isnull(this.props.user)) return 'loading..'
    if (this.props.user === false) return <Redirect to='/'/>

    return(
        
        <Container style={{ width: "550px", marginBottom: "100px" }}>

            <h1>MY PROFIL</h1>
                  
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

            

            <Row style={{ width: "550px", marginTop: "50px" }}>
              <Connexionsettings user={this.props.user} updateUser={this.props.updateUser}/>
              {/* 404 */}
            </Row>

            <Row style={{ width: "550px", marginTop: "50px" }}>
              <Completeprofile updateUser={this.props.updateUser} />
            </Row>

            
            
          
        </Container> 
                           
)}
}


export default Profil;
