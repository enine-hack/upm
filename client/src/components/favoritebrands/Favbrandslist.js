import React, { Component } from 'react';
import service from '../auth/auth-service';


class Favbrandslist extends Component {
    state = { 
        listOfFavbrands: []
    }

    getAllFavBrands = () =>{
        service.get(`/myfavoritebrands`)
          .then(responseFromApi => {
              console.log(responseFromApi.data.currentUser.favoritebrands)
            this.setState({
                listOfFavbrands: responseFromApi.data.currentUser.favoritebrands
            })
          })
          .catch(err => console.log('Error while fetching brands', err))
      }
  
      componentDidMount() {
        this.getAllFavBrands();
      }

    render() {
        return (
            <div className="wallet">
                <div className="wallet__l1">
                    <p>My brands</p>
                    
                    <div className="wallet_btn_add">
                        <a href="/"><img    className="wallet__btn_add_img"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </a>
                    </div>
                </div>
                
                <div className="wallet__l2">
                            
                    { this.state.listOfFavbrands.map( brand => {
                        return (                
                        <div key={brand._id}>
                         
                            <img    className="wallet__l2_logo"
                                    src={brand.logoUrl}/>

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