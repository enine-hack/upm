import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

class Connexionsettings extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    const {type, value, name} = event.target;

    this.setState({
        [name]: value
    })
    console.log('title after:   ', this.state.email)
    console.log(event.target)

  }

  handleFormSubmit = (event) => {
      const email = this.state.email;
      const password = this.state.password;

      event.preventDefault()

      axios.put(`http://localhost:5000/api/profil}`, { email, password })
      .then( () => {
        this.props.updateUser();
        //404 !!!!
        
  
      })
      .catch( error => console.log(error) )
      

  }

  handleChangeEmail = (event) => {  
    this.setState({
      email:event.target.value
    })
  }

  handleChangePass = (event) => {  
    this.setState({
      password:event.target.value
    })
  }
    
    render() {
        return (
          <Container>
            <form onSubmit={this.handleFormSubmit}>

              <p><b>CONNEXION SETTINGS</b></p>

              <p>Change your Email or Password</p>

              <Col>
              <label>Email</label>
                <input type="email" name="email" value={this.state.email} placeholder={this.props.user.email} onChange={e => this.handleChangeEmail(e)}/>
              </Col>

              <Col>
              <label>Password</label>
                <input type="password" name="password" value={this.state.password} placeholder="********" onChange={e => this.handleChangePass(e)} />
              </Col>

              <button>CHANGE SETTINGS</button>

            </form>
          </Container>
        )
    }
}

export default Connexionsettings;