import React, { Component } from 'react';
import {profilsettings} from '../auth/auth-service';




class Connexionsettings extends Component {
  state = {
    // email: this.props.user.email,
    password: ""
  }

  handleFormSubmit = (event) => {
      event.preventDefault()
      
      // const email = this.state.email;
      const password = this.state.password;

      profilsettings(password)
        .then(response => {
        this.props.updateUser(response);
       
      })
      .catch( error => console.log(error) )   

  }

  // handleChange = (event) => {
  //   const {type, value, name} = event.target;

  //   this.setState({
  //       [name]: value
  //   });
  // }

  // handleChangeEmail = (event) => {  
  //   this.setState({
  //     email:event.target.value
  //   })
  // }

  handleChangePassword = (event) => {  
    this.setState({
      password:event.target.value
    })
  }
    
    render() {
        return (
          // AJOUTER IF PROFIL COMPLET => RETOURNER MODIFIER PROFIL

          <div className="connexion_settings">
              <div>
                <p className="connexion_settings__desc">Change your Password</p>
              </div>
              <div className="connexion_settings__form" >
              
                <form className="connexion_settings__form_bloc"
                      onSubmit={this.handleFormSubmit}>                
                
                  {/* <input className="connexion-settings-form-field"
                        type="email" name="email" value={this.state.email} 
                          onChange={event => this.handleChangeEmail(event)}/> */}
                  <p  className="connexion_settings__label">
                  NEW PASSWORD</p>
                  <input className="connexion_settings__input" 
                        type="password" name="password" value={this.state.password}
                        onChange={event => this.handleChangePassword(event)} />
              
                
                  <button className="connexion_settings__btn">
                    CHANGE PASSWORD
                  </button>                
                </form>
              </div>
          
          </div>
        )
    }
}

export default Connexionsettings;