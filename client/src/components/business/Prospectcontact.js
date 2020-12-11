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
    service.post('/partners', { 
        society, 
        activity, 
        country, 
        firstname, 
        lastname,
        phone,
        email})
      .then(response => {
        this.setState({ 
            society: '',
            activity: '',
            country: '',
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            error: '',
            confirmation: "Your request has been sent. Thank you for your interest, you will be contacted soon."});
        
      })
      .catch(err => this.setState({error: err.response.data.message}))
  }
 
    
    render() {
        return (
            <div className="">
                <div>
                    <p  className=""> 
                        Let's get started.</p>
                </div>       

                <div >
                    <form   className=""
                            onSubmit={this.handleFormSubmit}>

                        
                        <div className="">
                            <input className=""
                                    type="text" name="society"  value={this.state.society}  placeholder="Society"
                                    onChange={(event) =>this.handleChange(event)}/>
                            
                            <input className=""
                                    type="text" name="activity"  value={this.state.activity} placeholder="Activity"
                                    onChange={(event) =>this.handleChange(event)}/>
                        
                            <input className=""
                                    type="text" name="country"  value={this.state.country} placeholder="Country"
                                    onChange={(event) =>this.handleChange(event)}/>
                            
                            <input className=""
                                    type="text" name="firstname"  value={this.state.firstname}  placeholder="Firstname"
                                    onChange={(event) =>this.handleChange(event)}/>
                            
                            <input className=""
                                    type="text" name="lastname"  value={this.state.lastname} placeholder="Lastname"
                                    onChange={(event) =>this.handleChange(event)}/>
                        
                            <input className=""
                                    type="text" name="phone"  value={this.state.phone} placeholder="Mobile"
                                    onChange={(event) =>this.handleChange(event)}/>

                            <input className=""
                            type="text" name="email"  value={this.state.email} placeholder="Email"
                            onChange={(event) =>this.handleChange(event)}/>

                            <button className="">
                                        SUBMIT</button>
                                        
                                            
                            {/* Affichage message d'erreur */}
                                {this.state.error && (
                                    <p className="error_form_msg">{this.state.error}
                                    </p>
                                )}

                             {/* Affichage du message de confirmation logged */}
                            <p className="confirm_form_msg">{this.state.confirmation}</p>
                        </div>
                        
                       
                    </form>

                </div>
                

                      
           
            </div>
        );
    }
}

export default Prospectcontact;