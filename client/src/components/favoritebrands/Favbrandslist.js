import React, { Component } from 'react';
import service from '../auth/auth-service';
import Addfavbrand from './Addfavbrand';
import { Link } from 'react-router-dom';



class Favbrandslist extends Component {
    state = { 
        listOfFavbrands: [],
        listOfPendingbrands: []
    }

    getAllFavBrands = () =>{
        service.get(`/profil`)
          .then(responseFromApi => {
            console.log(responseFromApi.data.currentUser.favoritebrands)
            this.setState({
                listOfFavbrands: responseFromApi.data.currentUser.favoritebrands
            })
          })
          .catch(err => console.log('Error while fetching fav brands', err))
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
        this.getAllFavBrands();
        this.getAllPendingBrands();
      }



    render() {
        return (
            <div className="wallet">

            {/* <Addfavbrand addnewbrand={(newbrand) => this.addFavbrand(newbrand)}/> */}

                <div className="wallet__l1">
                    <p>My brands</p>
                    
                    <div className="wallet_btn_add">
                        <a href="/addfavbrand"><img    className="wallet__btn_add_img"
                           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </a>
                    </div>
                </div>
                
                <div className="wallet__l2">
                            
                    { this.state.listOfFavbrands.map( brand => {
                        return (                
                        <div key={brand._id}>
                         
                            <Link to={`/favoritebrands/${brand._id}`}>
                                    <img    className="wallet__l2_logo"
                                    src={brand.logoUrl}/></Link>

                        </div>

                        )}
                    )}
                </div>

                <hr></hr>
                            {/* REFAIRE LE CSS ICI */}
                <div className="">
                            
                    { this.state.listOfPendingbrands.map( brand => {
                        return (                
                        <div >
                         
                             {brand}

                        </div>

                        )}
                    )}
                </div>
                    
                <div className="wallet__menu">
                    <div className="wallet_menu_btn_bloc darkblue background_grey">
                        <button className="wallet__menu_btn background_grey">
                        <img    className="wallet__menu_btn_img "
                                src="https://i.pinimg.com/originals/2b/a7/7d/2ba77de4c93153606635928e5686cc44.png"/>
                        </button>
                        <p>BRAND</p>
                    </div>
                
                    <div className="wallet_menu_btn_bloc">
                        <button className="wallet__menu_btn">
                            <img    className="wallet__menu_btn_img"
                                    src="https://i.pinimg.com/originals/2b/a7/7d/2ba77de4c93153606635928e5686cc44.png"/>
                            </button>
                        <p>GIFT CARD</p>
                    </div>

                    <div className="wallet_menu_btn_bloc">
                        <button className="wallet__menu_btn">
                        <img    className="wallet__menu_btn_img"
                                src="https://i.pinimg.com/originals/2b/a7/7d/2ba77de4c93153606635928e5686cc44.png"/>
                        </button>
                        <p>PROFIL</p>
                    </div>

                </div>

            </div>
        );
    }
}

export default Favbrandslist;