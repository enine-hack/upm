import React, { Component } from 'react';
import service from '../auth/auth-service';


class Favbrandslist extends Component {
    state = { 
        listOfFavbrands: []
    }

    getAllFavBrands = () =>{
        service.get(`/myfavoritebrands`)
          .then(responseFromApi => {
              console.log(responseFromApi.data)
            this.setState({
                listOfFavbrands: responseFromApi.data
            })
          })
          .catch(err => console.log('Error while fetching brands', err))
      }
  
      componentDidMount() {
        this.getAllFavBrands();
      }

    render() {

        return (
            <div>
                Hello Elo
                {/* { this.props.user.favoritebrands.map( brand => {
                return (                
                  <div>
                      {brand}
                  </div>
                )}
              )} */}
            </div>
        );
    }
}

export default Favbrandslist;