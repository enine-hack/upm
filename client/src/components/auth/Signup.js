import React, { Component } from 'react';
import {signup} from './auth-service'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class Signup extends Component {
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
      <Container className="Signup-login">
       
        <h3>MY ACCOUNT</h3>
        
        <Row className="Signuplogin-center">
          <Col className="Col-h40" 
               xs={{ span: 5, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 2, offset: 0 }}><Link to={"/login"}>
               CONNEXION</Link></Col>
          <Col className="Col-h40 Border-bottom-solid"
               xs={{ span: 5, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 2, offset: 0 }} >
               <b>REGISTER</b></Col>
        </Row>
        
        
        <Row>
          <Col xs={12} sm={{ span: 8, offset: 2 }} md={{ span: 4, offset: 4 }} >
            <p className="Signup-description">
              Create an account for a personalized luxious shopping fidelity experience and gain privileges faster.
            </p>
          </Col>
        </Row>

        <Row className="Signuplogin-center">
          <form onSubmit={this.handleFormSubmit}>
            <Col >
              <input className="Input-form-style" style={{ width: "380px"}}
                    type="text" name="email" placeholder="Email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
            </Col>
            <Col>
              <input className="Input-form-style" style={{ width: "380px"}} 
                    type="password" name="password" placeholder="Password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            </Col>
            
            <Col><button className="Button-form-style"
            style={{ width: "380px"}}>SIGN UP</button>
            </Col>
              
            {/* Affichage message d'erreur */}
              {this.state.error && (
                  <p className="Error-form-message-style">{this.state.error}
                    </p>
                )}
            
          </form>

      

        </Row>
      </Container>
    )
  }
}
export default Signup;