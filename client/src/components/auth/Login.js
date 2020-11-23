import React, { Component } from 'react';
import {login} from './auth-service';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class Login extends Component {
  state = { email: '', password: '' }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    login(email, password)
      .then(response => {
          this.setState({ email: "", password: "" });
          this.props.updateUser(response)
      })
      .catch( error => console.log(error) )
  }
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  render(){
    return(
      <Container style={{ marginTop: "100px", marginBottom: "100px"}}>
        SIGN UP
        <Row style={{ justifyContent: "center" }}>
          <form onSubmit={this.handleFormSubmit}>
            <Col>
              <label>Email</label>
              <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
            </Col>
            <Col>
              <label>Password</label>
              <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            </Col>
            <Col><input type="submit" value="LogIn" /></Col>
            <Col>
              <p>Don't have account?  
              <Link to={"/signup"}> Register</Link>
              </p>
            </Col>
          </form>
        </Row>
          
      </Container>
    )
  }
}
export default Login;











