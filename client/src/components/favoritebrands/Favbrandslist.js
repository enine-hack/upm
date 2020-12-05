import React, { Component } from 'react';
import service from '../auth/auth-service';

import { Container, Row, Col } from 'react-bootstrap';


class Favbrandslist extends Component {
    state = { 
        listOfFavbrands: []
    }

    getAllFavBrands = () =>{
        service.get(`/myfavoritebrands`)
          .then(responseFromApi => {
              console.log(responseFromApi.data.currentUser.favoritebrands)
            this.setState({
                listOfFavbrands: responseFromApi.data.currentUser.favoritebrands
            })
          })
          .catch(err => console.log('Error while fetching brands', err))
      }
  
      componentDidMount() {
        this.getAllFavBrands();
      }

    render() {
        return (
            <Container className="wallet-style">

                <h3>MY BRANDS</h3>
                
                <button className="wallet-button-style"
                >ADD BRAND</button>
                

                <Row   
                        className="wallet-mainrow-style">
                        
                                          
                    { this.state.listOfFavbrands.map( brand => {
                        return (                
                        <div key={brand._id}>
                        <Col   
                                className="wallet-maincol-style">
                            <img    className="wallet-logoimg-style"
                                    src={brand.logoUrl}/>
                        </Col>
                        
                        </div>

                        )}
                    )}
                    
                </Row>

                <button className="wallet-button-style"
                >ADD BRAND</button>
            </Container>
        );
    }
}

export default Favbrandslist;