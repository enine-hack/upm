import React, { Component } from 'react';
import {signup} from './auth-service'
import { Link } from 'react-router-dom';

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
      <div>
        {/* HERE */}
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          <button>I Signup</button>
        </form>
        <p>Already have account? 
          <Link to={"/"}>Login</Link>
        </p>
      </div>
    )
  }
}
export default Signup;