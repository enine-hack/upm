import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login'
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
       {/* <Navbar userInSession={this.state.loggedInUser} updateUser={this.updateLoggedInUser} /> */}
        <Switch>
          <Route exact path="/signup" render={() => <Signup updateUser={this.updateLoggedInUser}/>} />
          <Route exact path='/' render={() => <Login updateUser={this.updateLoggedInUser}/>}/>
          {/* <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} /> */}
        </Switch>
      </div>
    );
  }
}
export default App;