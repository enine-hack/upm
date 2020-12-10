import React, { Component } from 'react';
import isnull from 'lodash.isnull';
import { Redirect } from 'react-router-dom';
import Connexionsettings from './Connexionsettings';
import Completeprofile from './Completeprofile';
import {deleteprofil} from '../auth/auth-service';

// PARENT DE CONNEXION SETTING ET DE COMPLETEPROFILE

class Profil extends Component {
  state = {
    showformconnexionsettings: false,
    showformfillprofile: false
    }
  

  render(){
    if (isnull(this.props.user)) return '..loading'
    if (this.props.user === false) return <Redirect to='/'/>

    return(
        
        <div className="profile">
            <div>
                <p  className="profile__title"
                    >MY PROFIL</p>
            </div>

            <div>
                <p  className="profile_username"
                    >Welcome
                    <br></br>
                    {this.props.user.firstname} {this.props.user.lastname}</p>
            </div>

            <div className="profile__l1">
                <div className="profile__l1_bloc">
                    <div>
                        <p  className="profile__main_info">Account ID</p>
                    </div>
                    <div>
                      <p  className="profile__userdata">{this.props.user._id}</p>
                    </div>
                </div>

                <div className="profile__l1_bloc">
                    <div>
                        <p  className="profile__main_info">Registered account</p>
                    </div>
                    <div>
                      <p  className="profile__userdata"> {this.props.user.email}</p>
                    </div>
                </div>
                  
                <div className="profile__l1_bloc">
                    <div>
                        <p className="profile__main_info">Member since</p>
                    </div>
                    <div>
                      <p  className="profile__userdata"> {this.props.user.createdAt}</p>
                    </div>
                </div>
              </div>  

              <div className="profile__l2"> 
                  <div className="profile__l2_bloc">
                      <div>
                          <button className="profile__btn_showform" 
                                onClick={(event) => {
                                  this.setState({
                                    showformconnexionsettings: !this.state.showformconnexionsettings
                                  })
                                }}>CONNEXION SETTINGS
                          </button>
                          {this.state.showformconnexionsettings &&  <Connexionsettings user={this.props.user} updateUser={this.props.updateUser} />}
                      </div>
                      <div>
                          <button className="profile__btn_arrow_showform"
                                  onClick={(event) => {
                                    this.setState({
                                      showformconnexionsettings: !this.state.showformconnexionsettings
                                    })
                                  }}>
                                <img  className="profile__img_arrow_showform"
                                      src={"https://image.flaticon.com/icons/png/512/120/120886.png"}/>
                          </button>
                      </div>
                  </div>

                  <div className="profile__l2_bloc">
                      <div >
                          <button className="profile__btn_showform" 
                                  onClick={(event) => {
                                    this.setState({
                                      showformfillprofile: !this.state.showformfillprofile
                                    })
                                  }}>COMPLETE MY PROFILE
                          </button>

                          {this.state.showformfillprofile &&  <Completeprofile user={this.props.user} updateUser={this.props.updateUser}/>}
                      </div>
                      <div>
                          <button className="profile__btn_arrow_showform" 
                                  onClick={(event) => {
                                    this.setState({
                                      showformfillprofile: !this.state.showformfillprofile
                                    })
                                  }}>
                                    <img  className="profile__img_arrow_showform"
                                      src={"https://image.flaticon.com/icons/png/512/120/120886.png"}/>
                          </button>
                      </div>
                  </div>
              </div>

              

              <div>
                  <button className="profile__btn_delete" 
                          onClick={(e) => {
                            console.log(this.props.user)
                            deleteprofil(e).then(() => this.props.updateUser(false))
                          }}>Delete account
                  </button>
              </div>
  
        </div> 
                           
)}
}


export default Profil;
