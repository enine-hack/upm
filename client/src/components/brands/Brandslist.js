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
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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
                    
                    <Col   xs={{ span: 8, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 4, offset: 0 }}
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
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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


{/* B */}
            <h4 className="brandlist-letter-style">B</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('B') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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

{/* C */}

            <h4 className="brandlist-letter-style">C</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('C') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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

{/* D */}

            <h4 className="brandlist-letter-style">D</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('D') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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

{/* E */}

            <h4 className="brandlist-letter-style">E</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('E') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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

{/* F */}

            <h4 className="brandlist-letter-style">F</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('F') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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

{/* G */}

            <h4 className="brandlist-letter-style">G</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('G') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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


{/* H */}

            <h4 className="brandlist-letter-style">H</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('H') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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

{/* I */}

            <h4 className="brandlist-letter-style">I</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('I') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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


{/* J */}
            <h4 className="brandlist-letter-style">J</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('J') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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


{/* K */}

            <h4 className="brandlist-letter-style">K</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('K') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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


{/* L */}
            <h4 className="brandlist-letter-style">L</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('L') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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


{/* M */}
            <h4 className="brandlist-letter-style">M</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('M') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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

{/* N */}

            <h4 className="brandlist-letter-style">N</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('N') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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


{/* O */}

            <h4 className="brandlist-letter-style">O</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('O') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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

{/* P */}

            <h4 className="brandlist-letter-style">P</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('P') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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


{/* Q */}
            <h4 className="brandlist-letter-style">Q</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('Q') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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


{/* R */}
            <h4 className="brandlist-letter-style">R</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('R') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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

{/* S */}

            <h4 className="brandlist-letter-style">S</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('S') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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


{/* T */}

            <h4 className="brandlist-letter-style">T</h4>

            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('T') ? (
                      <Container fluid>
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs lg="auto">
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                                    className="brandist-showmore-col-style">
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

{/* U */}

<h4 className="brandlist-letter-style">U</h4>

{ this.state.listOfBrands.map( brand => {
  return (                
    <div key={brand._id}>
        { brand.brandname.startsWith('U') ? (
          <Container fluid>
            <Link to={`/brandslist/${brand._id}`}>
              <Row className="brandlist-row-style">
                  <Col xs lg="auto">
                    <img  className="brandlist-logos"
                          src={brand.logoUrl} />
                  </Col>
                  <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                        className="brandlist-col-style">
                      {brand.brandname}
                  </Col>
                  <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                        className="brandist-showmore-col-style">
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


{/* V */}

<h4 className="brandlist-letter-style">V</h4>

{ this.state.listOfBrands.map( brand => {
  return (                
    <div key={brand._id}>
        { brand.brandname.startsWith('V') ? (
          <Container fluid>
            <Link to={`/brandslist/${brand._id}`}>
              <Row className="brandlist-row-style">
                  <Col xs lg="auto">
                    <img  className="brandlist-logos"
                          src={brand.logoUrl} />
                  </Col>
                  <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                        className="brandlist-col-style">
                      {brand.brandname}
                  </Col>
                  <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                        className="brandist-showmore-col-style">
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

{/* W */}

<h4 className="brandlist-letter-style">W</h4>

{ this.state.listOfBrands.map( brand => {
  return (                
    <div key={brand._id}>
        { brand.brandname.startsWith('W') ? (
          <Container fluid>
            <Link to={`/brandslist/${brand._id}`}>
              <Row className="brandlist-row-style">
                  <Col xs lg="auto">
                    <img  className="brandlist-logos"
                          src={brand.logoUrl} />
                  </Col>
                  <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                        className="brandlist-col-style">
                      {brand.brandname}
                  </Col>
                  <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                        className="brandist-showmore-col-style">
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


{/* X */}

<h4 className="brandlist-letter-style">X</h4>

{ this.state.listOfBrands.map( brand => {
  return (                
    <div key={brand._id}>
        { brand.brandname.startsWith('X') ? (
          <Container fluid>
            <Link to={`/brandslist/${brand._id}`}>
              <Row className="brandlist-row-style">
                  <Col xs lg="auto">
                    <img  className="brandlist-logos"
                          src={brand.logoUrl} />
                  </Col>
                  <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                        className="brandlist-col-style">
                      {brand.brandname}
                  </Col>
                  <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                        className="brandist-showmore-col-style">
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


{/* Y */}

<h4 className="brandlist-letter-style">Y</h4>

{ this.state.listOfBrands.map( brand => {
  return (                
    <div key={brand._id}>
        { brand.brandname.startsWith('Y') ? (
          <Container fluid>
            <Link to={`/brandslist/${brand._id}`}>
              <Row className="brandlist-row-style">
                  <Col xs lg="auto">
                    <img  className="brandlist-logos"
                          src={brand.logoUrl} />
                  </Col>
                  <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                        className="brandlist-col-style">
                      {brand.brandname}
                  </Col>
                  <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                        className="brandist-showmore-col-style">
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


{/* Z */}

<h4 className="brandlist-letter-style">Z</h4>

{ this.state.listOfBrands.map( brand => {
  return (                
    <div key={brand._id}>
        { brand.brandname.startsWith('Z') ? (
          <Container fluid>
            <Link to={`/brandslist/${brand._id}`}>
              <Row className="brandlist-row-style">
                  <Col xs lg="auto">
                    <img  className="brandlist-logos"
                          src={brand.logoUrl} />
                  </Col>
                  <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                        className="brandlist-col-style">
                      {brand.brandname}
                  </Col>
                  <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                        className="brandist-showmore-col-style">
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


{/* #,& */}

<h4 className="brandlist-letter-style">#</h4>

{ this.state.listOfBrands.map( brand => {
  return (                
    <div key={brand._id}>
        { brand.brandname.startsWith('&' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') ? (
          <Container fluid>
            <Link to={`/brandslist/${brand._id}`}>
              <Row className="brandlist-row-style">
                  <Col xs lg="auto">
                    <img  className="brandlist-logos"
                          src={brand.logoUrl} />
                  </Col>
                  <Col  xs={{ span: 6, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}
                        className="brandlist-col-style">
                      {brand.brandname}
                  </Col>
                  <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 4, offset: 4 }} md={{ span: 1, offset: 0 }}
                        className="brandist-showmore-col-style">
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