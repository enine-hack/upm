import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import './App.css';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login'
import Navbar from './components/navbar/Navbar';
import Menu from './components/landing/Menu';
import Footer from './components/footer/Footer';
import Profil from './components/profil/Profil';
import Brandslist from './components/brands/Brandslist';
import Detailsbrand from './components/brands/Detailsbrand';
import {loggedin} from './components/auth/auth-service';
import Cover from './components/landing/Cover';

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
        
       <Route exact path="/" render={() => (
          <Cover user={this.state.loggedInUser} updateUser={this.updateLoggedInUser}/>
       )} />
       
        <Switch>
          
          <Route exact path='/login' render={() => <Login user={this.state.loggedInUser} updateUser={this.updateLoggedInUser}/>}/>
          <Route exact path="/signup" render={() => <Signup user={this.state.loggedInUser} updateUser={this.updateLoggedInUser}/>} />
  
          <Route exact path="/profil" render={() => (
              <Profil user={this.state.loggedInUser} updateUser={this.updateLoggedInUser}/>
            )} />

          <Route exact path="/brandslist" component={Brandslist}/>
          <Route exact path="/brandslist/:id" component={Detailsbrand}/>

          {/* 
          
          <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} /> */}
        </Switch>
        
        <Route exact path="/" component={Menu}/>
        <Route exact path="/" component={Footer}/>
        

      </div>
    );
  }
}
export default App;