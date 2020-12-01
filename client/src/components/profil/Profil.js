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
                <Col xs={{ span: 3, offset: 1 }} sm={{ span: 2, offset: 4 }} md={{ span: 3, offset: 3 }}
                     className="Profil-col-title">
                <b>Account ID</b></Col>
                <Col xs={{ span: 4, offset: 0 }} sm={{ span: 2, offset: 2 }} md={{ span: 3, offset: 0 }}
                     className="Profil-col-datas">
                {this.props.user._id}</Col>
            </Row>

            <Row className="Profil-datas">
                <Col xs={{ span: 3, offset: 1 }} sm={{ span: 2, offset: 4 }} md={{ span: 3, offset: 3 }}
                     className="Profil-col-title">
                <b>Registered account</b></Col>
                <Col xs={{ span: 4, offset: 0 }} sm={{ span: 2, offset: 2 }} md={{ span: 3, offset: 0 }}
                     className="Profil-col-datas">
                {this.props.user.email}</Col>
            </Row>

            <Row className="Profil-datas">
                <Col xs={{ span: 3, offset: 1 }} sm={{ span: 2, offset: 4 }} md={{ span: 3, offset: 3 }}
                     className="Profil-col-title">
                <b>Member since</b></Col>
                <Col xs={{ span: 4, offset: 0 }} sm={{ span: 2, offset: 2 }} md={{ span: 3, offset: 0 }}
                     className="Profil-col-datas">
                {this.props.user.createdAt}</Col>
            </Row>

            <p></p>
         

            <Row >
            <Col xs={{ span: 7, offset: 0 }} sm={{ span: 2, offset: 4 }} md={{ span: 6, offset: 3 }}>
            <button className="Profil-form-link" 
                    onClick={(event) => {
                      this.setState({
                        showformconnexionsettings: !this.state.showformconnexionsettings
                      })
                    }}>CONNEXION SETTINGS</button>

            {this.state.showformconnexionsettings &&  <Connexionsettings user={this.props.user} updateUser={this.props.updateUser} />}
            </Col>
            <Col xs={{ span: 1, offset: 3 }} sm={{ span: 2, offset: 2 }} md={{ span: 1, offset: 0 }}>
            <button className="Profil-form-link" 
                    onClick={(event) => {
                      this.setState({
                        showformconnexionsettings: !this.state.showformconnexionsettings
                      })
                    }}>></button>
            </Col>
            </Row>

      

            <Row >
              <Col xs={{ span: 7, offset: 0 }} sm={{ span: 2, offset: 4 }} md={{ span: 6, offset: 3 }}>
                <button className="Profil-form-link" 
                        onClick={(event) => {
                          this.setState({
                            showformfillprofile: !this.state.showformfillprofile
                          })
                        }}>COMPLETE MY PROFILE</button>

                {this.state.showformfillprofile &&  <Completeprofile user={this.props.user} updateUser={this.props.updateUser} />}
              </Col>
            
            
              <Col xs={{ span: 1, offset: 3 }} sm={{ span: 2, offset: 2 }} md={{ span: 1, offset: 0 }}>
                <button className="Profil-form-link" 
                        onClick={(event) => {
                          this.setState({
                            showformfillprofile: !this.state.showformfillprofile
                          })
                        }}>></button>
              </Col>
            </Row>

            <p></p>

            <Row>
              <button className="Profil-delete-button" 
            onClick={(e) => {
              console.log(this.props.user)
              deleteprofil(e).then(() => this.props.updateUser(false))
            }}>Delete account</button>
            </Row>
            
            
          
        </Container> 
                           
)}
}


export default Profil;
