import React, { Component } from 'react';
import {signup} from './auth-service'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

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
        this.props.updateUser(response)
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
        <div className="Signup-cover">
        <Container fluid>
          <Col xs={{ span: 12, offset: 1 }} sm={{ span: 3, offset: 4 }} md={{ span: 8, offset: 0 }}>
            <h1>The Luxury App</h1>
            
            <div className="Signup-cover-description">
              Create an account for a personalized luxious shopping fidelity experience and gain privileges faster.
            </div>
          
            <form className="Signup-cover-form-style"
                  onSubmit={this.handleFormSubmit}>
              
                <input className="Input-cover-form-style"
                      type="text" name="email" placeholder="Email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
              
                <input className="Input-cover-form-style"  
                      type="password" name="password" placeholder="Password" value={this.state.password} onChange={ e => this.handleChange(e)} />
              
              
              <button className="Button-cover-form-style"
              >SIGN UP</button>
              
                
              {/* Affichage message d'erreur */}
                {this.state.error && (
                    <p className="Error-form-message-style">{this.state.error}
                      </p>
                  )}
              
            </form>
          

            <div>
              <p>Already have account? 
                <Link to={"/Login"}>Login</Link>
              </p>
            </div>
          </Col>

        </Container>
      </div>
      
    )
  }
}
export default Signupcover;