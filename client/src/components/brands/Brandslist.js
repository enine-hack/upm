import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Brandslist extends Component {

    state = { 
        listOfBrands: []
    }

    getAllBrands = () =>{
      // axios.get(`http://localhost:5000/api/brandslist`)
      axios.get(`${process.env.REACT_APP_APIURL || ""}/brandslist`)
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

    render(){
    
      return(
        
          <div className="brandslist_public">
            <img  className="brandslist_public__cover_img"
                  src="https://images.unsplash.com/photo-1548508839-a31a4673f82d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"/>
            
            <div className="brandslist_public__cover_title">
              <p>Go for prestigious <br></br> and creation</p>
            </div>
            
            <div className="brandslist_public__l">
                <div>
                    <p className="brandslist_public__title">
                        Discover
                    </p>
                </div>

                <div>
                    <p className="brandslist_public__description">
                        ALL THE BRANDS
                    </p>
                </div>



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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                    <p  className="brandslist_public__brandname a_black">
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
                                    <Link to={`/brandslist/${brand._id}`}>
                                        <img className="brandslist_public__logo"
                                            src={brand.logoUrl} />
                                    </Link>

                                    <Link to={`/brandslist/${brand._id}`}>
                                        <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
                      { brand.brandname.startsWith('&' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '-' || '_') ? (
                        <>  
                            <div className="brandslist_public_most_added_col1">
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img className="brandslist_public__logo"
                                        src={brand.logoUrl} />
                                </Link>

                                <Link to={`/brandslist/${brand._id}`}>
                                    <p  className="brandslist_public__brandname a_black">
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
  export default Brandslist;


