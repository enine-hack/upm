import React, { Component } from 'react';
import service from '../auth/auth-service';


class Prospectcontact extends Component {
    state = { 
        society: '',
        activity: '',
        country: '',
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        comments: '',
        error: '',
        confirmation:''
    }

handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }
      

 handleFormSubmit = (event) => {
    event.preventDefault();
    const society = this.state.society;
    const activity = this.state.activity;
    const country = this.state.country;
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const phone = this.state.phone;
    const email = this.state.email;
    const comments = this.state.comments
    service.post('/partners', { 
        society, 
        activity, 
        country, 
        firstname, 
        lastname,
        phone,
        email,
        comments})
      .then(response => {
        this.setState({ 
            society: '',
            activity: '',
            country: '',
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            comments: '',
            error: '',
            confirmation: "Your request has been sent. Thank you for your interest, you will be contacted soon."
        });
        
        
      })
      .catch(err => this.setState({error: err.response.data.message}))
  }
 
    
    render() {
        return (
            <div className="partners">

                <div className="partners__bloc">
                    <p className="partners__bloc_title">
                            Become a partner
                    </p>
                    <p className="partners__bloc_desc">
                        LET'S GET STARTED
                    </p>     

                <div >
                    <form onSubmit={this.handleFormSubmit}>

                        
                        <div className="partners__form">
                            <input className="partners__form_input"
                                    type="text" name="society"  value={this.state.society}  placeholder="Society"
                                    onChange={(event) =>this.handleChange(event)}/>
                            
                            <input className="partners__form_input"
                                    type="text" name="activity"  value={this.state.activity} placeholder="Activity"
                                    onChange={(event) =>this.handleChange(event)}/>
                        
                            <input className="partners__form_input"
                                    type="text" name="country"  value={this.state.country} placeholder="Country"
                                    onChange={(event) =>this.handleChange(event)}/>
                            
                            <input className="partners__form_input"
                                    type="text" name="firstname"  value={this.state.firstname}  placeholder="Firstname"
                                    onChange={(event) =>this.handleChange(event)}/>
                            
                            <input className="partners__form_input"
                                    type="text" name="lastname"  value={this.state.lastname} placeholder="Lastname"
                                    onChange={(event) =>this.handleChange(event)}/>
                        
                            <input className="partners__form_input"
                                    type="text" name="phone"  value={this.state.phone} placeholder="Mobile"
                                    onChange={(event) =>this.handleChange(event)}/>

                            <input className="partners__form_input"
                            type="text" name="email"  value={this.state.email} placeholder="Email"
                            onChange={(event) =>this.handleChange(event)}/>

                            <input className="partners__form_input_textarea"
                            type="textarea" name="comments"  value={this.state.comments} placeholder="Message"
                            onChange={(event) =>this.handleChange(event)}/>

                            <button className="partners__form_btn">
                                        SUBMIT</button>
                                        
                                            
                            {/* Affichage message d'erreur */}
                                {this.state.error && (
                                    <p className="partners_error_form_msg">{this.state.error}
                                    
                                    </p>
                                   
                                        
                                    
                                )}

                             {/* Affichage du message de confirmation logged */}
                            <p className="partners_confirm_form_msg">{this.state.confirmation}</p>
                        </div>
                        
                       
                    </form>

                </div>
                
            </div>
                      
           
            </div>
        );
    }
}

export default Prospectcontact;