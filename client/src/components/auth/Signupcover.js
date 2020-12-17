import React, { Component } from 'react';
import {signup} from './auth-service'
import { Link } from 'react-router-dom';

class Signupcover extends Component {
  state = { email: '', password: '', error: "" }
  // HERE
  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    signup(email, password)
      .then(response => {
        this.setState({email: "", password: "", error: ""});
        this.props.updateUser(response);
        this.props.history.push('/profil');
      })
      .catch(err => this.setState({error: err.response.data.message}))
  }
  // HERE
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  // handleChange() and handleSubmit() will be added here
  render() {
    return (
        <div className="signup_cover">
        
            <div className="signup_cover__l1">
                <div className="signup_cover_l2">
                    <div >
                      <p className="signup_cover__title">The Luxury App</p>
                    </div>
                    <div >
                        <p className="signup_cover__description">Create an account for a personalized and luxious shopping fidelity experience and gain privileges faster.</p>
                    </div>
                
                    <div className="signup_cover__btn_create_account_hidden">
                        <button className="signup_cover__btn_create_account_style">
                            <a  className="a_black"
                                href='/signup'>CREATE AN ACCOUNT  </a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="signup_cover__l3">
                <form className="signup_cover__form"
                      onSubmit={this.handleFormSubmit}>
                    <div>
                        <input className="signup_cover__input"
                              type="text" name="email" placeholder="Email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
                      
                        <input className="signup_cover__input"  
                              type="password" name="password" placeholder="Password" value={this.state.password} onChange={ e => this.handleChange(e)} />

                        <button className="signup_cover__btn_submit"
                          >SIGN UP
                        </button>
                    </div>

                    <div className="signup_cover__signup_redirect">
                      <p>Already have account ?
                        <Link style={{ color:"white" }}
                              to={"/Login"}> Login</Link>
                      </p>
                    </div>
                                      
                  {/* Affichage message d'erreur */}
                    {this.state.error && (
                        <p className="Error-form-message-style">{this.state.error}
                          </p>
                      )}
                  
                </form>
            </div>

           </div>
        
      
    )
  }
}
export default Signupcover;