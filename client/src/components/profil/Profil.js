import React, { Component } from 'react';
import isnull from 'lodash.isnull';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Connexionsettings from './Connexionsettings';
import Completeprofile from './Completeprofile';
import {deleteprofil} from '../auth/auth-service';

// PARENT DE CONNEXION SETTING ET DE COMPLETEPROFILE

class Profil extends Component {
  state = {
    showformconnexionsettings: false,
    showformfillprofile: false
    }

  render(){
    if (isnull(this.props.user)) return '..loading'
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

            <button onClick={(event) => {
              this.setState({
                showformconnexionsettings: !this.state.showformconnexionsettings
              })

            }}>CONNEXION SETTINGS</button>

            {this.state.showformconnexionsettings &&  <Connexionsettings user={this.props.user} updateUser={this.props.updateUser} />}

            {/* <Row style={{ width: "550px", marginTop: "50px" }}>
              <Connexionsettings user={this.props.user} updateUser={this.props.updateUser}/>
              
            </Row> */}

            <button onClick={(event) => {
              this.setState({
                showformfillprofile: !this.state.showformfillprofile
              })

            }}>COMPLETE MY PROFILE</button>

            {this.state.showformfillprofile &&  <Completeprofile updateUser={this.props.updateUser} />}


            {/* <Row style={{ width: "550px", marginTop: "50px" }}>
              <Completeprofile updateUser={this.props.updateUser} />
            </Row> */}

            
            <button onClick={(e) => {
              console.log(this.props.user)
              deleteprofil(e).then(() => this.props.updateUser(false))
            }}>Delete account</button>

            
            
          
        </Container> 
                           
)}
}


export default Profil;
