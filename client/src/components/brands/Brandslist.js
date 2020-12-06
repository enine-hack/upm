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
            <div>
                <h1 className="brandslist_public__title">
                    Discover
                </h1>
            </div>

            <div>
              <p>OUR MOST ADDED BRANDS</p>
            </div>

            <div>
            { this.state.listOfBrands.splice(Math.floor(Math.random()*this.state.listOfBrands.length),20).map( brand => {
              return (                
                <div
                      key={brand._id}>
                      { brand.popularity > 2 ? (
                      
                        <>  
                          <Link to={`/brandslist/${brand._id}`}>
                              <img className="brandslist_public__logo"
                                   src={brand.logoUrl} />
                          </Link>

                          <Link to={`/brandslist/${brand._id}`}>
                            {brand.brandname}
                          </Link>

                          <Link to={`/brandslist/${brand._id}`}>
                            {/* <img src={"https://cdn0.iconfinder.com/data/icons/micro8/100/micro8icons-go-36-512.png"}/> */}
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