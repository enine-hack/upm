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
        axios.get(`${process.env.REACT_APP_APIURL || ""}/api/favoritebrands/${params.id}`, {withCredentials: true})
       
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
                                  <a  className=" a_black a_black:hover"
                                      href={this.state.websiteUrl} target="_blank">
                                    BRAND HOUSE
                                  </a>
                                </div>
                                <div>
                                  <a  className=" a_black a_black:hover"
                                      href={this.state.websiteUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  </a>
                                </div>
                            </div>

                            <div className="details_brand_public__l4">
                              
                              <a  className=" a_black a_black:hover"
                                  href={this.state.newinUrl} target="_blank">
                                  NEW IN
                                  </a>
                              
                                  <a  className=" a_black a_black:hover"
                                      href={this.state.newinUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  </a>
                              
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                                  
                                  SALES AND EXCLUSIVITIES
                                  
                              </div>
                              <div>
                                <img  className="details_brand_public__arrow_right"
                                      src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                              </div>
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                               
                                  PRIVILEGE ACCOUNT
                                  
                              </div>
                              <div>
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  
                              </div>
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                                  
                                  SHOPPING HISTORY
                                  
                              </div>
                              <div>
                                  
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  
                              </div>
                            </div>

                            

                            <div className="details_brand_public__l4">
                              <div>
                                  
                                  E-GIFT CARD
                                  
                              </div>
                              <div>
                                  
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  
                              </div>
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                                 
                                  FEEDBACK
                                  
                              </div>
                              <div>
                                  
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                 
                              </div>
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                              <a  className=" a_black a_black:hover"
                                  href={this.state.returnPolicyUrl}  target="_blank">
                                  RETURNS AND WARRANTY
                                  </a>
                              </div>
                              <div>
                                  <a  className=" a_black a_black:hover"
                                      href={this.state.returnPolicyUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  </a>
                              </div>
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                              <a  className=" a_black a_black:hover"
                                  href={this.state.shopUrl}  target="_blank">
                                  STORE LOCATOR
                                  </a>
                              </div>
                              <div>
                                  <a  className=" a_black a_black:hover"
                                      href={this.state.shopUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  </a>
                              </div>
                            </div>



                        </div>
                        <div>
                            <button className="details_user_favbrand__btn_delete"   
                                    onClick={this.deleteBrand}
                                    >Delete brand
                                      </button>
                            </div> 
                       
                    </div>          
                </div> 
            </div>
       
           
        )
    }
}



export default Detailsfavbrand;