import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {addfavbrand} from '../auth/auth-service';
import Searchbrand from './Searchbrand';

class Addfavbrand extends Component {

    state = { 
        listOfBrands: [],
        listOfAddedBrands: [],
        showSearchResults: false,
        query:'',
        mostAddedBrands: [],
        brandId: ''

    }

    getAllBrands = () =>{
        axios.get(`${process.env.REACT_APP_APIURL || ""}/api/brandslist`)
        
          .then(responseFromApi => {
            const listOfBrands = responseFromApi.data;
           
            let listOfBrandsCopy = listOfBrands;
            let popularlistOfBrands = listOfBrandsCopy.filter((e) => {return e.popularity > 2})

            
            let random = popularlistOfBrands.sort(() => {return 0.5 - Math.random()}).slice(0, 5);
            console.log(this.state.brandId)
            // const mostAddedBrandsCopy = [...this.state.mostAddedBrands]
          
            // const brandIndexToRemoveForMostAdded = random.findIndex(e => e.id === this.state.brandId);
            // console.log('indextoremove:', brandIndexToRemoveForMostAdded)
            // mostAddedBrands: [...this.state.mostAddedBrands].splice(brandIndexToRemoveForMostAdded, 1),

            this.setState({
              listOfBrands: listOfBrands,
              mostAddedBrands: random,
            })
           
            
          })
          .catch(err => console.log('Error while fetching brands', err))
      }

    
    componentDidMount() {
    this.getAllBrands();
    }

    handleClick = (brandid) => {
      // console.log(brandid)// "didsmfoij99384703809"
      // console.log(typeof(brandid)) //string
      // console.log(this.state.mostAddedBrands)





      // const listOfBrandsCopy = [...this.state.listOfBrands]
      // console.log(listOfBrandsCopy)

      // const brandIndexToRemoveForlistOfBrands = listOfBrandsCopy.findIndex(e => e.id === brandid);
      // console.log('indextoremove:', brandIndexToRemoveForlistOfBrands)

      addfavbrand(brandid)
        .then(response => {
          console.log('MA REPONSE',response) //mon wallet

          
          this.setState({
            // listOfAddedBrands: [...this.state.listOfAddedBrands, brandid],
            
            brandId: brandid,
            // mostAddedBrands: [...this.state.mostAddedBrands].splice(brandIndexToRemoveForMostAdded, 1),
            // listOfBrands: [...this.state.listOfBrands].splice(brandIndexToRemoveForlistOfBrands,1)
            });
           
              // console.log('LIST OF ADDED BRAND ======', this.state.listOfAddedBrands)
              // console.log('LIST OF MOST ADDED BRAND ======', this.state.mostAddedBrands)
              // console.log('LIST OF BRANDS ======', this.state.listOfAddedBrands)
              // this.props.addnewSelectedFavbrands(this.state.listOfAddedBrands);
              
             
        })
        .catch(err => console.log('Error while fetching fav brands', err))
   
       {alert(`New brand added!`)}
      //  this.props.history.push('/favoritebrands')
    }

    handlerSearchChange = (event) => {
      console.log("hi, from change", event.target.value)
      this.setState({
         query: event.target.value,
         showSearchResults: !this.state.showSearchResults
      })
    }



    render() {
      


        return( 
        
        <div className="brandslist_public">
          
            <div className="brandslist_public__l">
                <div>
                    <p className="brandslist_user_addbrand__title">
                        Add brands
                    </p>
                </div>

                
                <Searchbrand search={this.handlerSearchChange}
                             query={this.state.query}/>

                <div className="searchbrand_results">
                 {this.state.showSearchResults && this.state.listOfBrands.filter(brand => brand.brandname.toLowerCase().includes(this.state.query.toLowerCase())).map(brand => (
                    <div key={brand._id}>
                        <>  
                        <div className="searchbrand_results_l">                              
                          <button className="searchbrand_results_btn"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                        </div>
                        </>
                    </div>
                  ))}
                  
                </div>
            


                <div className="brandslist_public__most_added">
                    <p className="brandslist_public__most_added_row_title">
                      MOST ADDED
                    </p>
                
                { this.state.mostAddedBrands.map( brand => {
                  return (
                                    
                    <div className="brandslist_public__most_added_row"
                          key={brand._id}>
                          
                          
                            <>  
                            <div className="brandslist_public_most_added_col1">
                                
                              <button className="brandslist_user_addbrand__btn_addbrand"
                                      onClick={()  => this.handleClick(brand._id)}>
                                  <img className="brandslist_public__logo" 
                                  src={brand.logoUrl} alt="photo" />        
                              </button>
                              
                              <button className="brandslist_user_addbrand__btn_addbrand"
                                      onClick={()  => this.handleClick(brand._id)}>
                                      {brand.brandname}
                              </button>
                                
                            </div>

                            <button className="brandslist_user_addbrand__btn_addbrand"
                                    onClick={()  => this.handleClick(brand._id)}>  
                             <img className="brandslist_user_addbrand__btn_add_img"
                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                            </button>
                             
                            </>



                    </div>
                    
                  )}
                  
                )}
                </div>

                <div className="brandslist_user_addbrand__otherbrand ">  
                
                  <Link className="a_black a_gold:hover"
                        to='/addnewbrandname'>
                      
                      Other brand
                    
                  </Link>
              

              
                  <a href="/addnewbrandname"><img    className="brandslist_user_addbrand__btn_add_img"
                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                    </a>
              
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
                                
                              <button className="brandslist_user_addbrand__btn_addbrand"
                                      onClick={()  => this.handleClick(brand._id)}>
                                  <img className="brandslist_public__logo"
                                  src={brand.logoUrl} />        
                              </button>
                              
                              <button className="brandslist_user_addbrand__btn_addbrand"
                                      onClick={()  => this.handleClick(brand._id)}>
                                      {brand.brandname}
                              </button>
                                
                            </div>

                            <button className="brandslist_user_addbrand__btn_addbrand"
                                    onClick={()  => this.handleClick(brand._id)}>  
                             <img className="brandslist_user_addbrand__btn_add_img"
                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                            </button>
                             
                            </>

                            ) : (

                            <></>
                        )}

                    </div>
                  )}
                )}
                </div>
              </div>

              {/* B */}
              <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    B
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('B') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* C */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    C
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('C') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* D */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    D
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('D') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* E */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    E
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('E') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* F */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    F
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('F') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* G */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    G
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('G') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* H */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    H
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('H') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* I */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    I
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('I') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* J */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    J
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('J') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* K */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    K
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('K') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* L */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    L
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('L') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* M */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    M
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('M') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* N */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    N
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('N') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* O */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    O
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('O') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* P */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    P
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('P') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* R */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    R
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('R') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* S */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    S
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('S') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* T */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    T
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('T') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* U */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    U
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('U') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* V */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    V
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('V') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* W */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    W
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('W') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* X */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    X
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('X') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* Y */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    Y
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('Y') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* Z */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    Z
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('Z') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
                        </>

                        ) : (

                        <></>
                    )}

                </div>
              )}
            )}
            </div>
          </div>

           {/* # */}
           <div className="brandslist_public__most_added">
                
                <div>
                  <p className="brandslist_public__most_added_row_title">
                    #
                  </p>
                </div>
            
            <div>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                      <div className="brandslist_public__most_added_row"
                      key={brand._id}>
                      { brand.brandname.startsWith('&' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') ? (
                      
                        <>  
                        <div className="brandslist_public_most_added_col1">
                            
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                              <img className="brandslist_public__logo"
                              src={brand.logoUrl} />        
                          </button>
                          
                          <button className="brandslist_user_addbrand__btn_addbrand"
                                  onClick={()  => this.handleClick(brand._id)}>
                                  {brand.brandname}
                          </button>
                            
                        </div>

                        <button className="brandslist_user_addbrand__btn_addbrand"
                                onClick={()  => this.handleClick(brand._id)}>  
                         <img className="brandslist_user_addbrand__btn_add_img"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"/>
                        </button>
                         
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