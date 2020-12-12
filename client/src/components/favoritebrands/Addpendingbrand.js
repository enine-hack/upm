import React, { Component } from 'react';
import { addpendingbrand } from '../auth/auth-service';


class Addpendingbrand extends Component {
    state= {
        brandname : ""
    }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }

      handleFormSubmit = (event) => {
        event.preventDefault();
        const brandname = this.state.brandname;
        addpendingbrand(brandname)
          .then(response => {
            console.log('MA REPONSE',response)
            this.setState({ 
                brandname: brandname
            });
            this.props.addOnenewPendingInputFavbrand(brandname);
            console.log('THE NEW INPUT BRAND ===', brandname)
            
          })
          .catch(err => console.log('Error while fetching fav brands', err))
          { alert("New brand added!") }
    }

    render() {
        return (
            <div>
                <form   className=""
                            onSubmit={this.handleFormSubmit}>

                        
                        <div className="">
                            <input className=""
                                    type="text" name="brandname"  value={this.state.brandname}  placeholder="Brandname"
                                    onChange={(event) =>this.handleChange(event)}/>
                            
                            
                            <button className="">
                                        ADD NEW BRAND</button>
                                        
                                            
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
        );
    }
}

export default Addpendingbrand;