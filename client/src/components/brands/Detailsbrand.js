import React, { Component } from 'react';
import axios from 'axios';


class Detailsbrand extends Component {
    state = {}

    // 
    componentDidMount(){
      this.getSingleBrand();
    }

    //
    getSingleBrand = () => {
        const { params } = this.props.match;
        console.log('param:', params)
        axios.get(`${process.env.REACT_APP_APIURL || ""}/brandslist/${params.id}`)
        
          .then( responseFromApi =>{
            const theBrand = responseFromApi.data;
            
            this.setState(theBrand);
            console.log(theBrand)
          })
          .catch((err)=>{
            console.log('Error while fetching brand', err)
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
                                  <a href={this.state.websiteUrl} target="_blank" className="a_black">
                                    BRAND HOUSE
                                  </a>
                                </div>
                                <div>
                                  <a href={this.state.websiteUrl}  target="_blank" className="a_black">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://icons-for-free.com/iconfiles/png/512/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"/>
                                  </a>
                                </div>
                            </div>

                            <div className="details_brand_public__l4">
                              
                              <a href={this.state.newinUrl} target="_blank" className="a_black">
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
                              <a href={this.state.returnPolicyUrl}  target="_blank" className="a_black">
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



export default Detailsbrand;