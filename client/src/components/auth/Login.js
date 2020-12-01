import React, { Component } from 'react';
import {login} from './auth-service';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class Login extends Component {
  state = { email: '', password: '', error: "" }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    login(email, password)
      .then(response => {
        console.log('connected to your account')
        
          this.setState({ email: "", password: "", error: "" });
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
      <Container className="Signup-login">

        <h3>MY ACCOUNT</h3>

        <Row className="Signuplogin-center">
          <Col className="Col-h40 Border-bottom-solid" 
               xs={{ span: 5, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 2, offset: 0 }}>
               <b>CONNEXION</b></Col>
          <Col className="Col-h40"
               xs={{ span: 5, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 2, offset: 0 }} ><Link to={"/signup"}>
               REGISTER</Link></Col>
        </Row>
        
        <Row>
          <Col xs={12} sm={{ span: 8, offset: 2 }} md={{ span: 4, offset: 4 }} >
            <p>Welcome</p>
            <p className="Signuplogin-description">
            Log in using your email address and password.
            </p>
          </Col>
        </Row>

        <Row className="Signuplogin-center">
          <form onSubmit={this.handleFormSubmit} >
          
            <Col>
              <input className="Input-form-style" style={{ width: "380px"}}
                     type="text" name="email" placeholder="Email" value={this.state.email} onChange={e => this.handleChange(e)} />
            </Col>
            <Col>
              <input className="Input-form-style" style={{ width: "380px"}}
                     type="password" name="password" placeholder="Password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            </Col>
            <Col>
            
              <input className="Button-form-style"
              style={{ width: "380px"}} type="submit" value="LOG IN" />
            </Col>

            {/* Affichage du message d'erreur */}
            {this.state.error && (
              <p className="Error-form-message-style">{this.state.error}</p>
            )}

          </form>


          

        </Row>
          
      </Container>
    )
  }
}
export default Login;











