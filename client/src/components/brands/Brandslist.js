import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Brandslist extends Component {

    state = { 
        listOfBrands: []
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


                {/* A */}
                <div><p>A</p></div>
                
                <div>
                { this.state.listOfBrands.map( brand => {
                  return (                
                    <div 
                          key={brand._id}>
                          { brand.brandname.startsWith('A') ? (
                            <div>
                            
                              <Link to={`/brandslist/${brand._id}`}>

                                <img  className="brandslist_public__logo"
                                      src={brand.logoUrl} />
                              
                                  {brand.brandname}
                              
                              
                                {/* <img src={"https://cdn0.iconfinder.com/data/icons/micro8/100/micro8icons-go-36-512.png"}/> */}

                              </Link>
                            </div>
                            
                              ) : (
                              <></>
                        )}

                    </div>
                  )}
                )}
                </div>
              </div>
        </div>
    
      )
    }
  }
  export default Brandslist;



              {/* <Container>
                <Row className="brandist-addbrand-row-style">
                    <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                         className="brandlist-addbrand-logos">
                      <img  className="brandlist-loupe-icon"
                            src={"https://friconix.com/png/fi-xtluhl-magnifying-glass-thin.png"}/>
                    </Col>
                    
                    <Col   xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                          className="brandist-addbrand-col-style">
                     <Link to='/'>ANOTHER BRAND </Link>
                    </Col>

                    <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
                                    className="brandlist-showmore-addbrand-col-style">
                                <Link to='/'>
                                  <img  className="brandlist-showmore-icon"
                                        src={"https://pngimg.com/uploads/plus/plus_PNG54.png"}/>
                                </Link>
                    </Col>
                    
                </Row>
            </Container> */}