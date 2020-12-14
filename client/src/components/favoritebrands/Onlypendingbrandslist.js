import React, { Component } from 'react';
import service from '../auth/auth-service';
import { deleteonependingbrand } from '../auth/auth-service'

class Onlypendingbrandslist extends Component {
    state = { 
        
        listOfPendingbrands: [],
        checked: false,
    }

    getAllPendingBrands = () =>{
        service.get(`/profil`)
            .then(responseFromApi => {
                console.log(responseFromApi.data.currentUser.pendingfavoritebrands)
            this.setState({
                listOfPendingbrands: responseFromApi.data.currentUser.pendingfavoritebrands
            })
            })
            .catch(err => console.log('Error while fetching pending brands', err))
        }
    
    componentDidMount() {
        this.getAllPendingBrands();
        }



        handleCheckboxChange = (event) => {
        const {type, value, name, checked} = event.target;
    
        this.setState({
          [name]: value, // brandname : 'BRANDNAME';
          checked: checked 
        });
      }

    
      handleFormSubmit = (event) => {
        event.preventDefault();
        const brandname = this.state.listOfPendingbrands.brandname
        deleteonependingbrand(brandname)
            .then(response => {
                
                this.props.updateUser(response);
                this.setState ({
                    checked : false
                })
                
            })
            .catch( error => console.log(error) )
      }
    

    render() {  
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <label>
                    { this.state.listOfPendingbrands.map( brand => {
                        return (                
                        <div className="">
                            {brand}
                            <input
                            name="brandname"
                            value={brand}
                            type="checkbox"
                            checked={this.handleCheckboxChange}
                            onChange={this.handleChange} />

                        </div>
                       
                        )}
                    
                    )}
                    
                        

                </label>
              
              

                <button className=""   
                        type="submit"
                        >Delete brand
                        </button>
        </form>
            </div>
        );
    }
}

export default Onlypendingbrandslist;