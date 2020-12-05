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
            <Container>

                <h3>MY BRANDS</h3>

                <button>ADD BRAND</button>

                <Row>                    
                    { this.state.listOfFavbrands.map( brand => {
                        return (                
                        <div key={brand._id}>
                        <Col>
                            <img    className="wallet-logoimg-style"
                                    src={brand.logoUrl}/>
                        </Col>
                        </div>
                        )}
                    )}
                </Row>
            </Container>
        );
    }
}

export default Favbrandslist;