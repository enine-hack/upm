import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.css';
import { Redirect } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login'
import Navbar from './components/navbar/Navbar';
import Menu from './components/landing/Menu';
import Footer from './components/footer/Footer';
import Profil from './components/profil/Profil';
import Brandslist from './components/brands/Brandslist';
import Detailsbrand from './components/brands/Detailsbrand';
import Favbrandslist from './components/favoritebrands/Favbrandslist';
import Addfavbrand from './components/favoritebrands/Addfavbrand';
import Detailsfavbrand from './components/favoritebrands/Detailsfavbrand';
import Addpendingbrand from './components/favoritebrands/Addpendingbrand';
import Onlypendingbrandslist from './components/favoritebrands/Onlypendingbrandslist'; 
import Prospectcontact from './components/business/Prospectcontact';
import {loggedin} from './components/auth/auth-service';
import Cover from './components/landing/Cover';
import Concept from './components/upm/Concept';

class App extends Component {
  state = { loggedInUser: null }
  //
  fetchUser() {
    if (this.state.loggedInUser === null) {
      loggedin()
        .then(response => {
          this.setState({loggedInUser: response})
        })
        .catch(err => {
          this.setState({loggedInUser: false})
          
        })
    }
  }
  
  // 
  updateLoggedInUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })

  }

  componentDidMount() {
    this.fetchUser();  
  }


  render() {
    
    return (
      <div className="App">
      
       <Navbar userInSession={this.state.loggedInUser} updateUser={this.updateLoggedInUser} />
        
       <Route exact path="/" render={(props) => (
          <Cover user={this.state.loggedInUser} updateUser={this.updateLoggedInUser} history={props.history}/>
       )} />
       
        <Switch>
          
          <Route exact path='/login' render={(props) => <Login user={this.state.loggedInUser} updateUser={this.updateLoggedInUser} history={props.history}/>}/>
          <Route exact path="/signup" render={(props) => <Signup user={this.state.loggedInUser} updateUser={this.updateLoggedInUser} history={props.history}/>} />
  
          <Route exact path="/profil" render={() => (
              <Profil user={this.state.loggedInUser} updateUser={this.updateLoggedInUser}/>
            )} />

          <Route exact path="/brandslist" component={Brandslist}/>
          <Route exact path="/brandslist/:id" component={Detailsbrand}/>

          <Route exact path="/favoritebrands" render={() => (
              <Favbrandslist user={this.state.loggedInUser} updateUser={this.updateLoggedInUser}/>
            )} />

           <Route exact path="/pendingbrands" render={() => (
              <Onlypendingbrandslist user={this.state.loggedInUser} updateUser={this.updateLoggedInUser}/>
            )} />
          

          <Route exact path="/addfavbrand" render={() => (
              <Addfavbrand user={this.state.loggedInUser} updateUser={this.updateLoggedInUser}/>
              )} />
          
          <Route exact path="/addnewbrandname" render={() => (
              <Addpendingbrand user={this.state.loggedInUser} updateUser={this.updateLoggedInUser}/>
              )} />
          

          <Route exact path="/favoritebrands/:id" render={(props) => (
              <Detailsfavbrand {...props} user={this.state.loggedInUser} updateUser={this.updateLoggedInUser}/>
              )} />

          <Route exact path='/partners' component={Prospectcontact}/>
          
          <Route exact path='/concept' component={Concept}/>
          </Switch>
        
        <Route exact path="/" component={Menu}/>
        <Footer exact path="/" component={Footer}/>
        
        

      </div>
    );
  }
}
export default App;