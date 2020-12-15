import React, { Component } from 'react';
import service from '../auth/auth-service';
import { deleteonependingbrand } from '../auth/auth-service'

class Onlypendingbrandslist extends Component {
    state = { 
        
        listOfPendingbrands: [],
      
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



    handleClick = (brand) => {
    console.log(brand)// "didsmfoij99384703809"
    console.log(typeof(brand)) //string
    
    deleteonependingbrand(brand)
    .then(response => {
        console.log('MA REPONSE',response)
        this.props.updateUser(response);
        this.setState({
            listOfPendingbrands: [...this.state.listOfAddedBrands].pull(brand)
              });
        
        
    })
    .catch( error => console.log(error) )
    { alert("Brandname deleted!") }
    }     
    
    

    render() {  
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <label>
                    { this.state.listOfPendingbrands.map( brand => {
                        return (                
                        <div className="">
                            <button onClick={()  => this.handleClick(brand)}>
                                {brand}
                            </button>
                            {/* <input
                            name="brandname"
                            value={brand}
                            type="checkbox"
                            defaultChecked={this.state.checked}
                            onChange={this.handleCheck} /> */}

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