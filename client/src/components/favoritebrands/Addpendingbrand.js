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
                brandname: ""
            });
            this.props.addOnenewPendingInputFavbrand(brandname);
            console.log('THE NEW INPUT BRAND ===', brandname);
            
           
          })
          .catch(err => console.log('Error while fetching fav brands', err))
          { alert("New brand added!") }
        //   this.props.history.push('/favoritebrands')
    }

    render() {
        return (
            <div className="addpendingbrand">
                
                <div className="addpendingbrand__bloc">
                    <p className="addpendingbrand__bloc_title">
                        Other brand
                    </p>
                    <p className="addpendingbrand__bloc_desc">
                        ENTER A BRANDNAME
                    </p>
                    <form onSubmit={this.handleFormSubmit}>

                            
                            <div className="addpendingbrand__form">
                                
                                <input className="addpendingbrand__form_input"
                                        type="text" name="brandname"  value={this.state.brandname}  placeholder="Brandname"
                                        onChange={(event) =>this.handleChange(event)}/>
                                
                                
                                <button className="addpendingbrand__form_btn">
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
            </div>
        );
    }
}

export default Addpendingbrand;