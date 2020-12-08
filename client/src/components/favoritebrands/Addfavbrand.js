import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import service from '../auth/auth-service';

class Addfavbrand extends Component {

    state = { 
        listOfBrands: [],
    }

    getAllBrands = () =>{
        axios.get(`http://localhost:5000/api/brandslist`)
          .then(responseFromApi => {
            this.setState({
              listOfBrands: responseFromApi.data
            })
          })
          .catch(err => console.log('Error while fetching brands', err))
      }
    
    
    componentDidMount() {
    this.getAllBrands();
    }

    // brandvalue = this.state.listOfBrands._id



    render() {
        

        return( 
        
        <div className="brandslist_public">
          
            <div className="brandslist_public__l">
                <div>
                    <p className="brandslist_public__title">
                        Add your favorite brands
                    </p>
                </div>

                <div>
                    <p className="brandslist_public__description">
                        ALL THE BRANDS
                    </p>
                </div>

                <>  
                            <div className="brandslist_public_most_added_col1">
                                <Link to='/'>
                                    +
                                </Link>

                                <Link to='/'>
                                    <p  className="brandslist_public__brandname">
                                    OTHER BRAND
                                    </p>
                                </Link>
                             </div>

                              <Link to='/'>
                                <img  className="brandslist_public__showmore_icon"
                                      src={"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-more-512.png"}/>
                              </Link>
                            </>

                <div className="brandslist_public__most_added">
                    <p className="brandslist_public__most_added_row_title">
                      MOST ADDED
                    </p>
                
                { this.state.listOfBrands.splice(Math.floor(Math.random()*this.state.listOfBrands.length),20).map( brand => {
                  return (
                                    
                    <div className="brandslist_public__most_added_row"
                          key={brand._id}>
                          { brand.popularity > 2 ? (
                          
                            <>  
                            <div className="brandslist_public_most_added_col1">
                                
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />

                                    {/* <button onClick={(newbrand) => {
                                            newbrand = this.state.listOfBrands._id;
                                            this.props.addnewbrand(newbrand);
                                            }}
                                            className="brandslist_public__brandname">
                                        {brand.brandname}
                                    </button> */}
                                
                             </div>

                              
                                <img  className="brandslist_public__showmore_icon"
                                      src={"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-more-512.png"}/>
                             
                            </>

                            ) : (

                            <></>
                        )}

                    </div>
                    
                  )}
                  
                )}
                </div>
                
                {/* A */}
                <div className="brandslist_public__most_added">
                
                    <div>
                      <p className="brandslist_public__most_added_row_title">
                        A
                      </p>
                    </div>
                
                <div>

                { this.state.listOfBrands.map( brand => {
                  return (                
                    <div className="brandslist_public__most_added_row"
                          key={brand._id}>
                          { brand.brandname.startsWith('A') ? (
                          
                            <>  
                            <div className="brandslist_public_most_added_col1">
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname">
                                        {brand.brandname}
                                    </p>
                                </Link>
                             </div>

                              <Link to={`/brandslist/${brand._id}`}>
                                <img  className="brandslist_public__showmore_icon"
                                      src={"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-more-512.png"}/>
                              </Link>
                            </>

                            ) : (

                            <></>
                        )}

                    </div>
                  )}
                )}
                </div>
              </div>

                



              </div>
        </div>
        )
    }
}

export default Addfavbrand;