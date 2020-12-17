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
    console.log(brand)// "brandname"
    console.log(typeof(brand)) //string
    
        deleteonependingbrand(brand)
        .then(response => {
            console.log('MA REPONSE',response)
            const listOfPendingBrandsCopy = [...this.state.listOfPendingbrands]
            this.setState({
                listOfPendingbrands: listOfPendingBrandsCopy.pull(brand)
                });
            this.props.updateUser(response);
            
            
        })
        .catch( error => console.log(error) )
        { alert("Brandname deleted!") }
    }     
    
    

    render() {  
        return (
            <div className="wallet_pending">

                <div className="wallet_pending__l1">

                    <div>
                    <p>My pending brands</p>
                    </div>

                    <div className="wallet_pending_btn_add">
                        <a href="/addnewbrandname"><img    className="wallet_pending__btn_add_img"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </a>
                    </div>
                </div>

            
                <div className="wallet_pending__l2">
                    <p className="wallet_pending__l2_title">
                      DELETE BRANDNAME
                    </p>
                    
                    <div >
                    { this.state.listOfPendingbrands.map( brand => {
                        return (                
                        <div className="wallet_pending__l3">
                            <button className="wallet_pending__btn_brandname"
                                    onClick={()  => this.handleClick(brand)}>
                                {brand}
                            </button>
                            <button className="brandslist_user_addbrand__btn_addbrand"
                                    onClick={()  => this.handleClick(brand)}>
                                <img    className="wallet_pending__img_minus"
                                        src="https://cdn.iconscout.com/icon/free/png-256/minus-146-475070.png"/>
                            </button>
                        </div>

                        )}
                    )}
                    </div>       
                </div>
              
            </div>
        );
    }
}

export default Onlypendingbrandslist;