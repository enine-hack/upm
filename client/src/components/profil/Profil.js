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
        
        <Container className="Profil-style">
            
            <h3>MY PROFIL</h3>
                  
            <p>Welcome {this.props.user.firstname} {this.props.user.lastname}</p>

            <Row className="Profil-datas">
                <Col xs={{ span: 4, offset: 0 }} sm={{ span: 2, offset: 4 }} md={{ span: 2, offset: 4 }}
                     className="Profil-col-datas">
                <b>Account ID</b></Col>
                <Col xs={{ span: 4, offset: 0 }} sm={{ span: 2, offset: 2 }} md={{ span: 3, offset: 0 }}
                     >
                {this.props.user._id}</Col>
            </Row>

            <Row className="Profil-datas">
                <Col xs={{ span: 4, offset: 0 }} sm={{ span: 2, offset: 4 }} md={{ span: 2, offset: 4 }}
                     className="Profil-col-datas">
                <b>Registered account</b></Col>
                <Col xs={{ span: 4, offset: 0 }} sm={{ span: 2, offset: 2 }} md={{ span: 3, offset: 0 }}>
                {this.props.user.email}</Col>
            </Row>

            <Row className="Profil-datas">
                <Col xs={{ span: 4, offset: 0 }} sm={{ span: 2, offset: 4 }} md={{ span: 2, offset: 4 }}
                     className="Profil-col-datas">
                <b>Member since</b></Col>
                <Col xs={{ span: 4, offset: 0 }} sm={{ span: 2, offset: 2 }} md={{ span: 3, offset: 0 }}>
                {this.props.user.createdAt}</Col>
            </Row>           

            <Row>
            <button onClick={(event) => {
              this.setState({
                showformconnexionsettings: !this.state.showformconnexionsettings
              })

            }}>CONNEXION SETTINGS</button>

            {this.state.showformconnexionsettings &&  <Connexionsettings user={this.props.user} updateUser={this.props.updateUser} />}
            </Row>
            
  

           <Row>
            <button onClick={(event) => {
              this.setState({
                showformfillprofile: !this.state.showformfillprofile
              })

            }}>COMPLETE MY PROFILE</button>

            {this.state.showformfillprofile &&  <Completeprofile updateUser={this.props.updateUser} />}
            </Row>


            <Row>
            <button onClick={(e) => {
              console.log(this.props.user)
              deleteprofil(e).then(() => this.props.updateUser(false))
            }}>Delete account</button>
            </Row>
            
            
          
        </Container> 
                           
)}
}


export default Profil;
