import React, { Component } from 'react';

import {profilsettings} from '../auth/auth-service';
import { Container } from 'react-bootstrap';



class Connexionsettings extends Component {
  state = {
    email: '',
    password: '',
  }

  handleFormSubmit = (event) => {
      event.preventDefault()
      
      const email = this.state.email;
      const password = this.state.password;

      profilsettings(email, password)
        .then(response => {
        this.props.updateUser(response);
       
      })
      .catch( error => console.log(error) )   

  }

  handleChange = (event) => {
    const {type, value, name} = event.target;

    this.setState({
        [name]: value
    });
  }

  // handleChangeEmail = (event) => {  
  //   this.setState({
  //     email:event.target.value
  //   })
  // }

  // handleChangePassword = (event) => {  
  //   this.setState({
  //     password:event.target.value
  //   })
  // }
    
    render() {
        return (
          // AJOUTER IF PROFIL COMPLET => RETOURNER MODIFIER PROFIL

          <Container className="connexion-settings-style" fluid>
              
              
              
              <div>
                <form className="connexion-settings-form-center" 
                      onSubmit={this.handleFormSubmit}>                
                <p>Change your Email or Password</p>
                  <input className="connexion-settings-form-field"
                        type="email" name="email" value={this.state.email} placeholder="New Email"
                          onChange={event => this.handleChange(event)}/>
                
                  <input className="connexion-settings-form-field" 
                        type="password" name="password" value={this.state.password} placeholder="New Password"
                        onChange={event => this.handleChange(event)} />
              
                
                  <button className="connexion-setting-submit">
                    CHANGE SETTINGS
                  </button>                
                </form>
              </div>
          
             
              
           
          </Container>
        )
    }
}

export default Connexionsettings;