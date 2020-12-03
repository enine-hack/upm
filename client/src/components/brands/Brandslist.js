import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

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
        
          <div className= "brandlist-style">
            
            <p>MOST ADDED BRANDS</p>

            { this.state.listOfBrands.splice(Math.floor(Math.random()*this.state.listOfBrands.length),20).map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.popularity > 2 ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandlist-showmore-col-style">
                                <img  className="brandlist-showmore-icon"
                                      src={"https://cdn0.iconfinder.com/data/icons/micro8/100/micro8icons-go-36-512.png"}/>
                              </Col>
                          </Row>
                        </Link>
                      </Container>
                      
                        ) : (
                        <></>
                    )}

                </div>
              )}
            )}

            <div className="brandlist-hr-style"></div>

            <Container fluid>
                <Row className="brandist-addbrand-row-style">
                    <Col xs lg="auto">
                      <img  className="brandlist-logos"
                            src={"https://upload.wikimedia.org/wikipedia/commons/9/9e/Plus_symbol.svg"}/>
                    </Col>
                    
                    <Col   xs={{ span: 8, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                          className="brandist-addbrand-col-style">
                     <Link to='/'>Another brand </Link>
                    </Col>
                    
                </Row>
            </Container>

            <div className="brandlist-hr-style"></div>


{/* A */}
            <h4 className="brandlist-letter-style">A</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('A') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandlist-showmore-col-style">
                                <img  className="brandlist-showmore-icon"
                                      src={"https://cdn0.iconfinder.com/data/icons/micro8/100/micro8icons-go-36-512.png"}/>
                              </Col>
                          </Row>
                        </Link>
                      </Container>
                      
                        ) : (
                        <></>
                    )}

                </div>
              )}
            )}





        </div>
    
      )
    }
  }
  export default Brandslist;