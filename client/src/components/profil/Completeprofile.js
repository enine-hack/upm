import React, { Component } from 'react';

import {profiledit} from '../auth/auth-service';
import { Container, Row, Col } from 'react-bootstrap';

class CompleteProfile extends Component {
    state= { 
        civility: this.props.user.civility,
        firstname: this.props.user.firstname,
        lastname: this.props.user.lastname,
        dateOfBirth: this.props.user.dateOfBirth,
        numberAddress: this.props.user.numberAddress,
        typeofstreet: this.props.user.typeofstreet,
        additionalAddress: this.props.user.additionalAddress,
        zipcode: this.props.user.zipcode,
        city: this.props.user.city,
        country: this.props.user.country,
        mobileNumber: this.props.user.mobileNumber,
        idWechat: this.props.user.idWechat,
        idLine: this.props.user.idLine
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const civility = this.state.civility;
        const firstname = this.state.firstname;
        const lastname = this.state.lastname;
        const dateOfBirth = this.state.dateOfBirth;
        const numberAddress = this.state.numberAddress;
        const typeofstreet = this.state.typeofstreet;
        const additionalAddress = this.state.additionalAddress;
        const zipcode = this.state.zipcode;
        const city = this.state.city;
        const country = this.state.country;
        const mobileNumber = this.state.mobileNumber;
        const idWechat = this.state.idWechat;
        const idLine = this.state.idLine;

        profiledit(
            civility,
            firstname,
            lastname,
            dateOfBirth,
            numberAddress,
            typeofstreet,
            additionalAddress,
            zipcode,
            city,
            country,
            mobileNumber,
            idWechat,
            idLine
        ).then(response => {
            this.props.updateUser(response);
            
           
          })
          .catch( error => console.log(error) )
      }

    handleChange = (event) => {
        const {type, value, name} = event.target;
    
        this.setState({
            [name]: value
        });

    
      }

    render(){
        return(
            <Container className="complete-profil-style" fluid>          
            
                <form   className="complete-profil-form-center"
                        onSubmit={this.handleFormSubmit}>

                    <p  className="complete-profil-style-desc"> 
                        Fill out your profile and directly benefit from all the advantages linked to your brands loyalty accounts.</p>
                    
                    <div  className="complete-profil-subtitles">
                    ID</div>

                    <select className="complete-profil-form-field" name="civility" >    
                        <option value="">Civility</option>
                        <option value="Madam">Madam</option>
                        <option value="Mister">Mister</option>
                    </select>
                
                    <input className="complete-profil-form-field"
                            type="text" name="firstname"  value={this.state.firstname}  placeholder="Firstname"
                            onChange={(event) =>this.handleChange(event)}/>
                    
                    <input className="complete-profil-form-field"
                            type="text" name="lastname"  value={this.state.lastname} placeholder="Lastname"
                            onChange={(event) =>this.handleChange(event)}/>
                
                    <input className="complete-profil-form-field"
                            type="text" name="dateOfBirth"  value={this.state.dateOfBirth} placeholder="Date of Birth"
                            onChange={(event) =>this.handleChange(event)}/>
                    

                    <div  className="complete-profil-subtitles">
                        ADDRESS</div>
                    
                    <input className="complete-profil-form-Numberadress"
                            type="number" name="numberAddress" value={this.state.numberAddress} placeholder="N°"
                            onChange={(event) =>this.handleChange(event)}/>
                
                    <input className="complete-profil-form-typeofstreet"
                            type="text" name="typeofstreet" value={this.state.typeofstreet} placeholder="Street"
                            onChange={(event) =>this.handleChange(event)}/>

                    <input className="complete-profil-form-field"
                            type="text" name="additionalAddress" value={this.state.additionalAddress} placeholder="Additional address info"
                            onChange={(event) =>this.handleChange(event)}/>
                     
                    <input  className="complete-profil-form-zipcode"
                            type="text" name="zipcode" value={this.state.zipcode} placeholder="Zip Code"
                            onChange={(event) =>this.handleChange(event)}/>
                
                    <input className="complete-profil-form-city"
                            type="text" name="city" value={this.state.city} placeholder="City"
                            onChange={(event) =>this.handleChange(event)}/>

                    <input  className="complete-profil-form-field"
                            type="text" name="country" value={this.state.country} placeholder="Country"
                            onChange={(event) =>this.handleChange(event)}/>

                    

                    <div  className="complete-profil-subtitles">
                        CONTACT</div>

                    <input  className="complete-profil-form-field"
                            type="text" name="mobileNumber" value={this.state.mobileNumber} placeholder="Phone number"
                            onChange={(event) =>this.handleChange(event)}/>
                
                    <input  className="complete-profil-form-field"
                            type="text" name="idWechat" value={this.state.idWechat} placeholder="ID Wechat"
                            onChange={(event) =>this.handleChange(event)}/>
                
                    <input  className="complete-profil-form-field"
                            type="text" name="idLine" value={this.state.idLine} placeholder="ID Line"
                            onChange={(event) =>this.handleChange(event)}/>
                    
                    <input  className="complete-profil-submit"
                            type="submit" value="SUBMIT" />
                    
                </form>
                

                      
           
            </Container>
        )

    }
}

export default CompleteProfile;