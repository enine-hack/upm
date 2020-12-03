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
         <h1>THE LUXIOUS APP</h1>
          
          <p className="Signup-cover-description">
            Create an account for a personalized luxious shopping fidelity experience and gain privileges faster.
          </p>
      <Container >      

        <Row>
          <form onSubmit={this.handleFormSubmit}>
            <Col >
              <input className="Input-cover-form-style"
                    type="text" name="email" placeholder="Email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
            </Col>
            <Col>
              <input className="Input-cover-form-style"  
                    type="password" name="password" placeholder="Password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            </Col>
            
            <Col><button className="Button-cover-form-style"
            >SIGN UP</button>
            </Col>
              
            {/* Affichage message d'erreur */}
              {this.state.error && (
                  <p className="Error-form-message-style">{this.state.error}
                    </p>
                )}
            
          </form>

          <p>Already have account? 
          <Link to={"/Login"}>Login</Link>
        </p>

      

        </Row>
      </Container>
      </div>
    )
  }
}
export default Signupcover;