import React, { Component } from 'react';

// import {profiledit} from '../auth/auth-service';
import { Container, Row, Col } from 'react-bootstrap';

class CompleteProfile extends Component {
    state= { 
        civility: '',
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        numberAddress: '',
        typeofstreet: '',
        additionalAddress: '',
        zipcode: '',
        city: '',
        country: '',
        mobileNumber: '',
        idWechat: '',
        idLine: ''
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

        // profiledit(
        //     civility,
        //     firstname,
        //     lastname,
        //     dateOfBirth,
        //     numberAddress,
        //     typeofstreet,
        //     additionalAddress,
        //     zipcode,
        //     city,
        //     country,
        //     mobileNumber,
        //     idWechat,
        //     idLine
        // ).then(response => {
        //     this.props.updateUser(response);
           
        //   })
        //   .catch( error => console.log(error) )
      }

    handleChange = (event) => {
        const {type, value, name} = event.target;
    
        this.setState({
            [name]: value
        });

    
      }
    


    render(){
        return(
            <Container>
                <p><b>COMPLETE MY PROFILE</b></p>
                 
                <p> Fill out your profile and directly benefit from all the advantages linked to your loyalty accounts.</p>

            
                <form onSubmit={this.handleFormSubmit}>
                    <Col>
                        <select name="civility">
                              
                         <option value="">Civility</option>
                         <option value="Madam">Mrs</option>
                         <option value="Mister">Mr.</option>
                         </select>
                    </Col>
                    <Col>
                        <input type="text" name="firstname"  value={this.state.firstname}  placeholder="Firstname"
                               onChange={(event) =>this.handleChange(event)}/>
                    </Col>
                    <Col>
                        <input type="text" name="lastname"  value={this.state.lastname} placeholder="Lastname"
                               onChange={(event) =>this.handleChange(event)}/>
                    </Col>

                    <Col>
                        <input type="text" name="dateOfBirth"  value={this.state.dateOfBirth} placeholder="Date of Birth"
                               onChange={(event) =>this.handleChange(event)}/>
                    </Col>

                    <p><b>ADDRESS</b></p>
                    
                    <Col>
                        <input type="number" name="numberAddress" value={this.state.numberAddress} placeholder="N°"
                               onChange={(event) =>this.handleChange(event)}/>

                        <input type="text" name="typeofstreet" value={this.state.typeofstreet} placeholder="Street"
                               onChange={(event) =>this.handleChange(event)}/>
                    </Col>

                    <Col>
                        <input type="text" name="additionalAddress" value={this.state.additionalAddress} placeholder="Additional address info"
                               onChange={(event) =>this.handleChange(event)}/>
                    </Col>
                    <Col>
                        <input type="text" name="zipcode" value={this.state.zipcode} placeholder="Zip Code"
                               onChange={(event) =>this.handleChange(event)}/>

                        <input type="text" name="city" value={this.state.city} placeholder="City"
                               onChange={(event) =>this.handleChange(event)}/>
                    </Col>
                    <Col>
                        <input type="text" name="country" value={this.state.country} placeholder="Country"
                               onChange={(event) =>this.handleChange(event)}/>
                    </Col>

                    <p><b>CONTACT</b></p>

                    <Col>
                        <input type="text" name="mobileNumber" value={this.state.mobileNumber} placeholder="Phone number"
                               onChange={(event) =>this.handleChange(event)}/>
                    </Col>
                    <Col>
                        <input type="text" name="idWechat" value={this.state.idWechat} placeholder="ID Wechat"
                               onChange={(event) =>this.handleChange(event)}/>
                    </Col>
                    <Col>
                        <input type="text" name="idLine" value={this.state.idLine} placeholder="ID Line"
                               onChange={(event) =>this.handleChange(event)}/>
                    </Col>

                    <Col>
                        <input type="submit" value="SUBMIT" />
                    </Col>
                </form>
            

                      
           
            </Container>
        )

    }
}

export default CompleteProfile;