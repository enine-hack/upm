import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Searchbrand from '../favoritebrands/Searchbrand';

class Brandslist extends Component {

    state = { 
        listOfBrands: [],
        showSearchResults: false,
        query:''
    }

    getAllBrands = () =>{
     
      axios.get(`${process.env.REACT_APP_APIURL || ""}/api/brandslist`)
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

    handlerSearchChange = (event) => {
      console.log("hi, from change", event.target.value)
      this.setState({
         query: event.target.value,
         showSearchResults: !this.state.showSearchResults
      })
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

                <div className="brandslist__all_letters">
                <a  className=" brandslist__letter a_black a_black:hover"
                    href="##">#</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#a">A</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#b">B</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#c">C</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#d">D</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#e">E</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#f">F</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#g">G</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#h">H</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#i">I</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#j">J</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#k">K</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#l">L</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#m">M</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#n">N</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#o">O</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#p">P</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#r">R</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#s">S</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#t">T</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#u">U</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#v">V</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#w">W</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#x">X</a>
                <a  className="brandslist__letter a_black a_black:hover"
                            href="#y">Y</a>
                <a  className=" brandslist__letter a_black a_black:hover"
                            href="#z">Z</a>
                </div>
                {/* <Searchbrand search={this.handlerSearchChange}
                             query={this.state.query}/>

                <div className="searchbrand_results">
                 {this.state.showSearchResults && this.state.listOfBrands.filter(brand => brand.brandname.toLowerCase().includes(this.state.query.toLowerCase())).map(brand => (
                    <div key={brand._id} className="searchbrand_results_l">
                        <>
                        
                        <a className="a_black a_black:hover"
                              href={`/brandslist/${brand._id}`}>
                            <p  >
                                {brand.brandname}
                            </p>
                        </a>
                        
                        </>
                    </div>
                  ))}
                  
                </div> */}

                {/* <div className="brandslist_public__most_added">
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
                </div> */}
                
                
                    <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* A */}
                <div className="brandslist_public__most_added">
                
                    <div>
                      <p  id="a"
                          className="brandslist_public__most_added_row_title">
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

              <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* B */}
                <div className="brandslist_public__most_added">
                
                    <div>
                      <p  id="b"
                          className="brandslist_public__most_added_row_title">
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

              <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* C */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="c"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* D */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="d"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* E */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="e"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* F */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="f"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* G */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="g"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* H */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="h"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* I */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="i"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* J */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="j"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* K */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="k"
                      className="brandslist_public__most_added_row_title">
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
          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* L */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="l"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* M */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="m"
                      className="brandslist_public__most_added_row_title">
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
          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* N */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="n"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* O */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="o"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* P */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="p"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>
                {/* R */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="r"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* S */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p id="s"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* T */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="t"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* U */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="u"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* V */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="v"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* W */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="w"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* X */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p id="x"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* Y */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="y"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* Z */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="z"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn">
                        ↑
                        </p></a>

                {/* # */}
                <div className="brandslist_public__most_added">
                
                <div>
                  <p  id="#"
                      className="brandslist_public__most_added_row_title">
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

          <a  className="a_black a_black:hover"
                        href="#">
                        <p className="brandslist_topOfPage__btn_end">
                        Top of Page
                        </p></a>




              </div>
        </div>
    
      )
    }
  }
  export default Brandslist;


