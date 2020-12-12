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

    // deletePendingBrand = () => {
    //     const { params } = this.props.match;
    //     // console.log(this.props.match)
        
    //     deleteonefavbrand(params.id)
    //         .then(() =>{
    //             this.props.history.push('/favoritebrands');     
    //         })
    //         .catch((err) => {
    //             console.log('Error while deleting the brand', err)
    //         })
    //     }

    render() {  
        return (
            <div>




                <form>
               { this.state.listOfPendingbrands.map( brand => {
                    return (                
                    <div className="">
                        
                    <input type="checkbox" name="brandname" value={brand}/>
                    {brand}
                    
                    </div>
                    

                    )}
                
                )}
              

                <button className=""   
                        onClick={this.deletePendingBrand}
                        type="submit"
                        >Delete brand
                        </button>
        </form>
            </div>
        );
    }
}

export default Onlypendingbrandslist;