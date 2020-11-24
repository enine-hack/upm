import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import './App.css';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login'
import Navbar from './components/navbar/Navbar';
import Menu from './components/landing/Menu';
import Footer from './components/footer/Footer';
import {loggedin} from './components/auth/auth-service';

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
  componentDidMount() {
    this.fetchUser();
  }
  updateLoggedInUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }
  render() {
    return (
      <div className="App">
      
       <Navbar userInSession={this.state.loggedInUser} updateUser={this.updateLoggedInUser} />
       
       <img src ={"https://www.fcls.fr/wp-content/uploads/elementor/thumbs/fcls_voiture_avec_chauffeur_transfert_aeroport-3000x2226-oqj5gvhmki198vhv6ytm2jet1eblg1lhffk9nu0oso.jpg"}/>
        
        <Switch>
          <Route exact path="/signup" render={() => <Signup updateUser={this.updateLoggedInUser}/>} />
          <Route exact path='/' render={() => <Login updateUser={this.updateLoggedInUser}/>}/>
          
          {/* <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} /> */}
        </Switch>
        <Route exact path="/" component={Menu}/>
        <Route exact path="/" component={Footer}/>
      </div>
    );
  }
}
export default App;