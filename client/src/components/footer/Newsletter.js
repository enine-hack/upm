import React, { Component } from 'react';
import service from '../auth/auth-service';

class Newsletter extends Component {
    state = {email: '',
            error: '',
            confirmation:''
    }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }
      

 handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    service.post('/newsletters', { 
        email,
        })
      .then(response => {
        this.setState({ 
            email: '',
            error: '',
            confirmation: "Thank you for your interest."
        });
    })
    .catch(err => this.setState({error: err.response.data.message}))
 }
 render() {

    return (
        <div className="footer__l3">
        {/* <Newsletter /> */}
        <form onSubmit={this.handleFormSubmit}>
            <p className="footer__l3_title">
            NEWSLETTER</p>
            <p className="footer__l3_desc">
            Stay in the loop of our news</p>
            
            <br></br>
            <input  className="footer__l3_input"
                    type="email" name="email" value={this.state.email} placeholder="Email"
                    onChange={(event) =>this.handleChange(event)}    
                    />
            <input  className="footer__l3_btn"
                    type="submit" value=">" />

            {/* Affichage message d'erreur */}
            {this.state.error && (
            <p className="footer__l3_error_form_msg">{this.state.error}

            </p>

            )}

            {/* Affichage du message de confirmation logged */}
            <p className="footer__l3_confirm_form_msg">{this.state.confirmation}</p>
                        
        </form>
    </div>
    )
 }
}

export default Newsletter;