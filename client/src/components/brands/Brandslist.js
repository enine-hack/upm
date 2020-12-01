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

        { this.state.listOfBrands.map( brand => {
              return (
                <div key={brand._id}>

                <Container >
                    <h3>LES PLUS AJOUTEES</h3>
                    <Row>
                    <Link to={`/brandslist/${brand._id}`}>
                        <Col><img src={brand.logoUrl}/></Col>
                        <Col>{brand.brandname}</Col>
                    </Link>
                    </Row>
                </Container>

                <hr></hr>

                <Container>
                    <Row>
                        <Col>+</Col>
                        <Col>Autre Marque</Col>
                    </Row>
                </Container>

                <hr></hr>

                <Container>
                    <Row>
                    <Link to={`/brandslist/${brand._id}`}>
                        <Col><img src={brand.logoUrl}/></Col>
                        <Col>{brand.brandname}</Col>
                    </Link>
                    </Row>
                </Container>
                </div>
            )}
        )}
        </>
    

      )
    }
  }
  export default Brandslist;


  {/* <div>
            { this.state.listOfBrands.map( brand => {
              return (
                <div key={brand._id}>

                    <Link to={`/brandslist/${brand._id}`}>
                        <li><img src={brand.logoUrl}/></li>
                        <li><h3>{brand.brandname}</h3></li>
                    </Link>

                </div>
              )})
            }
          </div> */}