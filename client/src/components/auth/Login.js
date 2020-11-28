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
      <Container style={{ marginTop: "80px", marginBottom: "200px"}}>
        <h2 style={{ paddingBottom: "30px" }}>MY ACCOUNT</h2>

        <Row style={{ justifyContent: "center", alignItems: "center", height: "40px"}}>
          <Col xs lg="2" style={{ borderBottom: "solid", height: "40px" }}><b>CONNEXION</b></Col>
          <Col xs lg="2" style={{ height: "40px" }}><Link to={"/signup"}>CREATE AN ACCOUNT</Link></Col>
        </Row>
        
        <hr style={{ marginTop: "0px", marginBottom: "40px", width: "380px" }}></hr>

        <h5 style={{ marginBottom: "30px"}}>Welcome</h5>
        <p>Log in using your email address and password.</p>

        <Row style={{ marginTop: "40px", justifyContent: "center"}}>
          <form onSubmit={this.handleFormSubmit} >
          

            <Col>
              <input style={{ width: "380px", marginBottom: "30px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="text" name="email" placeholder="Email" value={this.state.email} onChange={e => this.handleChange(e)} />
            </Col>
            <Col>
              <input style={{ width: "380px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                     type="password" name="password" placeholder="Password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            </Col>
            <Col>
            
              <input style={{ width: "380px", height: "45px", border: "none", backgroundColor: "#1a1a1a", color: "white" }} type="submit" value="LOG IN" />
            </Col>
          </form>


          
          {this.state.error && (
              <p>{this.state.error}</p>
            )}
        </Row>
          
      </Container>
    )
  }
}
export default Login;











