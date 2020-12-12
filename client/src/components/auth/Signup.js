import React, { Component } from 'react';
import {signup} from './auth-service'
import { Link } from 'react-router-dom';

class Signup extends Component {
  state = { email: '', password: '', error: "" }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    signup(email, password)
      .then(response => {
        this.setState({email: "", password: "", error: ""});
        this.props.updateUser(response);
        
      })
      .catch(err => this.setState({error: err.response.data.message}))
  }
 

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  // handleChange() and handleSubmit() will be added here
  render() {
    return (
      <div className="signup_login">
          <div>
              <p className="signup_login__title">MY ACCOUNT</p>
          </div>
          
          <div className="signup_login__l1">
              <div >
                  <Link to={"/login"}>
                    <p className="signup_login_t_unselected">
                        CONNEXION</p>
                  </Link>
              </div>
              <div>
                    <p className="signup_login_t_selected">
                        REGISTER</p>
              </div>
          </div>
          <div>
              <p className="signup_login__desc">
                  Create an account for a personalized luxious shopping fidelity experience and gain privileges faster.
              </p>
          </div>
          <div >
              <form className="signup_login__l2"
                    onSubmit={this.handleFormSubmit}>
                <label className="signup_login__l2_label">
                       EMAIL*</label>
                <input className="signup_login__l2_input"
                      type="text" name="email" placeholder="j.doe@gmail.com" value={this.state.email} onChange={ e => this.handleChange(e)}/>

                <label className="signup_login__l2_label">
                       PASSWORD*</label>
                <input className="signup_login__l2_input"
                      type="password" name="password" placeholder="********" value={this.state.password} onChange={ e => this.handleChange(e)} />
              
              
              <button className="signup_login__l2_btn">
              SIGN UP</button>
              
                
              {/* Affichage message d'erreur */}
                {this.state.error && (
                    <p className="error_form_msg">{this.state.error}
                      </p>
                  )}
              
              </form>

          </div>    
      </div>
    )
  }
}
export default Signup;