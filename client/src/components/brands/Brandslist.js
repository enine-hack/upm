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
                      <Container >
                        
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <Link to={`/brandslist/${brand._id}`}>
                                    <img  className="brandlist-logos"
                                          src={brand.logoUrl} />
                                </Link>
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  <Link to={`/brandslist/${brand._id}`}>
                                    {brand.brandname}
                                  </Link>
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
                                    className="brandlist-showmore-col-style">
                                <Link to={`/brandslist/${brand._id}`}>
                                  <img  className="brandlist-showmore-icon"
                                        src={"https://cdn0.iconfinder.com/data/icons/micro8/100/micro8icons-go-36-512.png"}/>
                                </Link>
                              </Col>
                          </Row>
                          
                        
                      </Container>
                      
                      
                        ) : (
                        <></>
                    )}

                </div>
              )}
            )}


            <Container>
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
            </Container>


            {/* A */}
            <h4 className="brandlist-letter-style">A</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('A') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* B */}
            <h4 className="brandlist-letter-style">B</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('B') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* C */}
            <h4 className="brandlist-letter-style">C</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('C') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* D */}
            <h4 className="brandlist-letter-style">D</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('D') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* E */}
            <h4 className="brandlist-letter-style">E</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('E') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* F */}
            <h4 className="brandlist-letter-style">F</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('F') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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
        

            {/* G */}
            <h4 className="brandlist-letter-style">G</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('G') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* H */}
            <h4 className="brandlist-letter-style">H</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('H') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* I */}
            <h4 className="brandlist-letter-style">I</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('I') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* J */}
            <h4 className="brandlist-letter-style">J</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('J') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* K */}
            <h4 className="brandlist-letter-style">K</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('K') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* L */}
            <h4 className="brandlist-letter-style">L</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('L') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* M */}
            <h4 className="brandlist-letter-style">M</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('M') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* N */}
            <h4 className="brandlist-letter-style">N</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('N') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* O */}
            <h4 className="brandlist-letter-style">O</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('O') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* P */}
            <h4 className="brandlist-letter-style">P</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('P') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* Q
            <h4 className="brandlist-letter-style">Q</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('Q') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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
            )} */}

            {/* R */}
            <h4 className="brandlist-letter-style">R</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('R') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* S */}
            <h4 className="brandlist-letter-style">S</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('S') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* T */}
            <h4 className="brandlist-letter-style">T</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('T') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* U */}
            <h4 className="brandlist-letter-style">U</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('U') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* V */}
            <h4 className="brandlist-letter-style">V</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('V') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* W */}
            <h4 className="brandlist-letter-style">W</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('W') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* X */}
            <h4 className="brandlist-letter-style">X</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('X') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* Y */}
            <h4 className="brandlist-letter-style">Y</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('Y') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* Z */}
            <h4 className="brandlist-letter-style">Z</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('Z') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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

            {/* & ou # */}
            <h4 className="brandlist-letter-style">#</h4>
            
            { this.state.listOfBrands.map( brand => {
              return (                
                <div key={brand._id}>
                    { brand.brandname.startsWith('&' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') ? (
                      <Container >
                        <Link to={`/brandslist/${brand._id}`}>
                          <Row className="brandlist-row-style">
                              <Col xs={{ span: 4, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}>
                                <img  className="brandlist-logos"
                                      src={brand.logoUrl} />
                              </Col>
                              <Col  xs={{ span: 5, offset: 0 }} sm={{ span: 4, offset: 0 }} md={{ span: 2, offset: 0 }}
                                    className="brandlist-col-style">
                                  {brand.brandname}
                              </Col>
                              <Col  xs={{ span: 2, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}
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