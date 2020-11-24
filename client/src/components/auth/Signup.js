import React, { Component } from 'react';
import {signup} from './auth-service'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class Signup extends Component {
  state = { email: '', password: '' }
  // HERE
  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    signup(email, password)
      .then(response => {
        this.setState({email: "", password: ""});
        this.props.updateUser(response)
      })
      .catch( error => console.log(error) )
  }
  // HERE
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  // handleChange() and handleSubmit() will be added here
  render() {
    return (
      <Container style={{ marginTop: "80px", marginBottom: "200px"}}>
        <h2 style={{ paddingBottom: "30px" }}>MY ACCOUNT</h2>
        <Row style={{ justifyContent: "center", alignItems: "center", height: "40px"}}>
          <Col xs lg="2" style={{ height: "40px" }}><Link to={"/"}>CONNEXION</Link></Col>
          <Col xs lg="2" style={{ borderBottom: "solid", height: "40px", paddingRight: "0px", paddingLeft: "0px" }}><b>CREATE AN ACCOUNT</b></Col>
        </Row>
        
        <hr style={{ marginTop: "0px", marginBottom: "40px", width: "380px" }}></hr>

        <p style={{ marginBottom: "30px", textAlign: "center", marginLeft: "auto", marginRight: "auto", width: "390px", }}>Create an account for a personalized luxious shopping fidelity experience and gain privileges faster.</p>

        <Row style={{ marginTop: "40px", justifyContent: "center"}}>
        <form onSubmit={this.handleFormSubmit}>
        <Col >
          <input style={{ width: "380px", marginBottom: "30px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }}
                 type="text" name="email" placeholder="Email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
        </Col>
        <Col>
          <input style={{ width: "380px", marginBottom: "40px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5" }} 
                 type="password" name="password" placeholder="Password" value={this.state.password} onChange={ e => this.handleChange(e)} />
        </Col>
          <Col><button style={{ width: "380px", height: "45px", border: "none", backgroundColor: "#1a1a1a", color: "white" }}>SIGN UP</button></Col>
        </form>
        </Row>
      </Container>
    )
  }
}
export default Signup;