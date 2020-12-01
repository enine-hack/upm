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
        
          <>
          <h3>LES PLUS AJOUTEES</h3>
            { this.state.listOfBrands.map( brand => {
              return (
                
                <div key={brand._id}>

                <Container >
                    <Link to={`/brandslist/${brand._id}`}>
                    
                    { brand.popularity > 1 ? (
                        <Row>
                            {/* <Col> <img src={brand.logoUrl}/></Col> */}
                            <Col>
                                {brand.brandname}
                            </Col> 
                        </Row>
                        ) : (
                            <></>
                    )}

                    </Link>
                    
                </Container>

                <hr></hr>

               
                </div>
                )}
            )}

            <Container>
                <Row>
                    <Col>+</Col>
                    <Col>Autre Marque</Col>
                </Row>
            </Container>



            <h3>A</h3>

            { this.state.listOfBrands.map( brand => {
              return (
                
                <div key={brand._id}>

                <Container >
                    <Link to={`/brandslist/${brand._id}`}>
                    
                    { brand.brandname.startsWith('A') ? (
                        <Row>
                            {/* <Col> <img src={brand.logoUrl}/></Col> */}
                            <Col>
                                {brand.brandname}
                            </Col> 
                        </Row>
                        ) : (
                            <></>
                    )}

                    </Link>
                    
                </Container>

                <hr></hr>
                </div>
                )}
            )}

        </>
    
      )
    }
  }
  export default Brandslist;