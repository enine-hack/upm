import React, { Component } from 'react';
import isnull from 'lodash.isnull';
import { Redirect } from 'react-router-dom';


class Favbrandslist extends Component {
    state = { 
        listOfFavbrands: []
    }

   

    render() {
        if (isnull(this.props.user)) return '..loading'
        if (this.props.user === false) return <Redirect to='/'/>
        
        return (
            <div>
                Hello Elo
                { this.props.user.favoritebrands.map( brand => {
                return (                
                  <div>
                      {brand}
                  </div>
                )}
              )}
            </div>
        );
    }
}

export default Favbrandslist;