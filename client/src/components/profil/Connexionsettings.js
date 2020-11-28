import React, { Component } from 'react';

import {profilsettings} from '../auth/auth-service';
import { Container, Row, Col } from 'react-bootstrap';

class Connexionsettings extends Component {
  state = {
    email: '',
    password: '',
  }

  handleFormSubmit = (event) => {
      event.preventDefault()
      
      const email = this.state.email;
      const password = this.state.password;

      profilsettings(email, password)
        .then(response => {
        this.props.updateUser(response);
       
      })
      .catch( error => console.log(error) )   

  }

  // handleChangeEmail = (event) => {  
  //   this.setState({
  //     email:event.target.value
  //   })
  // }

  // handleChangePass = (event) => {  
  //   this.setState({
  //     password:event.target.value
  //   })
  // }

  handleChange = (event) => {
    const {type, value, name} = event.target;

    this.setState({
        [name]: value
    });
  }
    
    render() {
        return (
          <Container>
            <form onSubmit={this.handleFormSubmit}>

              <p><b>CONNEXION SETTINGS</b></p>

              <p>Change your Email or Password</p>

              <Col>
              <label>Email</label>
                <input type="email" name="email" value={this.state.email} placeholder={this.props.user.email}
                       onChange={event => this.handleChange(event)}/>
              </Col>

              <Col>
              <label>Password</label>
                <input type="password" name="password" value={this.state.password} placeholder="********"
                       onChange={event => this.handleChange(event)} />
              </Col>

              <button>CHANGE SETTINGS</button>

            </form>
          </Container>
        )
    }
}

export default Connexionsettings;