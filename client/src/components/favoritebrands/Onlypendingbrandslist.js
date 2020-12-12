import React, { Component } from 'react';
import service from '../auth/auth-service';

class Onlypendingbrandslist extends Component {
    state = { 
        
        listOfPendingbrands: []
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

    render() {
        return (
            <div>
               { this.state.listOfPendingbrands.map( brand => {
                return (                
                <div className="">
                    
                        {brand}

                </div>

                )}
            )}
            </div>
        );
    }
}

export default Onlypendingbrandslist;