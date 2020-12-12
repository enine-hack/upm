import React, { Component } from 'react';
import axios from 'axios';
import { deleteonefavbrand } from '../auth/auth-service'

class Detailsfavbrand extends Component {
    state = {}

    
    componentDidMount(){
      this.getSingleFavBrand();
    }

    //
    getSingleFavBrand = () => {
        const { params } = this.props.match;
        console.log('param:', params)
        axios.get(`http://localhost:5000/api/favoritebrands/${params.id}`, {withCredentials: true})
          .then( responseFromApi =>{
            const theBrand = responseFromApi.data;
            console.log(theBrand)
            
            this.setState(theBrand);
            console.log(theBrand)
          })
          .catch((err)=>{
            console.log('Error while fetching brand', err)
          })
    }

    
    deleteBrand = () => {
      const { params } = this.props.match;
      // console.log(this.props.match)
      
      deleteonefavbrand(params.id)
        .then(() =>{
            this.props.history.push('/favoritebrands');     
        })
        .catch((err) => {
            console.log('Error while deleting the brand', err)
        })
    }


  
    render(){
    
        return( 
            <div className="details_brand_public">

            <button className=""   
                onClick={this.deleteBrand}
                >Delete brand
                  </button>
            
                <div className="details_brand_public__l1">
                    <div>
                        <img  className="details_brand_public__cover"
                              src={this.state.coverImage}/>
                    </div>      
                
                    <div  className="details_brand_public__l2">
                        <img  className="details_brand_public__logo"
                              src={this.state.logoUrl}/>
                        
                        <div className="details_brand_public__l3">
                            <div className="details_brand_public__l4">
                                <div>
                                  <a href={this.state.websiteUrl} target="_blank">
                                    BRAND HOUSE
                                  </a>
                                </div>
                                <div>
                                  <a href={this.state.websiteUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  </a>
                                </div>
                            </div>

                            <div className="details_brand_public__l4">
                              
                              <a href={this.state.newinUrl} target="_blank">
                                  NEW IN
                                  </a>
                              
                                  <a href={this.state.newinUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  </a>
                              
                            </div>

                            <div className="details_brand_public__l4 font_lightgray">
                              <div>
                                  
                                  SALES AND EXCLUSIVITIES
                                  
                              </div>
                              <div>
                                <img  className="details_brand_public__arrow_right font_lightgra"
                                      src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                              </div>
                            </div>

                            <div className="details_brand_public__l4 font_lightgray">
                              <div>
                               
                                  PRIVILEGE ACCOUNT
                                  
                              </div>
                              <div>
                                      <img  className="details_brand_public__arrow_right font_lightgray"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  
                              </div>
                            </div>

                            <div className="details_brand_public__l4 font_lightgray">
                              <div>
                                  
                                  SHOPPING HISTORY
                                  
                              </div>
                              <div>
                                  
                                      <img  className="details_brand_public__arrow_right font_lightgra"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  
                              </div>
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                              <a href={this.state.returnPolicyUrl}  target="_blank">
                                  RETURNS AND WARRANTY
                                  </a>
                              </div>
                              <div>
                                  <a href={this.state.returnPolicyUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  </a>
                              </div>
                            </div>

                            <div className="details_brand_public__l4 font_lightgray">
                              <div>
                                  
                                  E-GIFT CARD
                                  
                              </div>
                              <div>
                                  
                                      <img  className="details_brand_public__arrow_right font_lightgra"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  
                              </div>
                            </div>

                            <div className="details_brand_public__l4 font_lightgray">
                              <div>
                                 
                                  FEEDBACK
                                  
                              </div>
                              <div>
                                  
                                      <img  className="details_brand_public__arrow_right font_lightgray"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                 
                              </div>
                            </div>

                        </div>  
                       
                    </div>          
                </div> 
            </div>
       
           
        )
    }
}



export default Detailsfavbrand;