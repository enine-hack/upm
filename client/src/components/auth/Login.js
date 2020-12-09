import React, { Component } from 'react';
import {login} from './auth-service';
import { Link } from 'react-router-dom';


class Login extends Component {
  state = { email: '', password: '', error: "", confirmation:"" }
  handleFormSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    login(email, password)
      .then(response => {
        console.log('connected to your account')
        
          this.setState({ email: "", password: "", error: "", confirmation: "You are now connected to your account" });
          this.props.updateUser(response);
          
      })
      .catch(err => this.setState({error: err.response.data.message}))
  }
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  render(){
    
    return(
      <div className="signup_login">
          <div>
              <p className="signup_login__title">MY ACCOUNT</p>
          </div>

          <div className="signup_login__l1">
              <div>
                  <p className="signup_login_t_selected">
                      CONNEXION</p>
              </div>
              <div>
                  <Link to={"/signup"}>
                    <p className="signup_login_t_unselected">
                    REGISTER</p>
                  </Link>
              </div>
          </div>

          <div>
              
              <p className="signup_login__desc">
              Welcome,
              <br></br>
              <br></br>
              Log in using your email address and password.
              </p>
          </div>
          <div>
              <form className="signup_login__l2"
                    onSubmit={this.handleFormSubmit} >
                  <label className="signup_login__l2_label">
                       EMAIL*</label>    
                  <input className="signup_login__l2_input"
                        type="text" name="email" placeholder="j.doe@gmail.com" value={this.state.email} onChange={e => this.handleChange(e)} />
                  <label className="signup_login__l2_label">
                       PASSWORD*</label>
                  <input className="signup_login__l2_input"
                        type="password" name="password" placeholder="********" value={this.state.password} onChange={ e => this.handleChange(e)} />

                
                  <input  className="signup_login__l2_btn" 
                          type="submit" value="LOG IN" />
     

              {/* Affichage message d'erreur */}
              {this.state.error && (
                    <p className="error_form_msg">{this.state.error}
                      </p>
                  )}
        
            {/* Affichage du message de confirmation logged */}
            <p className="confirm_form_msg">{this.state.confirmation}</p>

      </form>

          </div>




          
          
      </div>
    )
  }
}
export default Login;











