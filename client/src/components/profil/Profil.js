import React, { Component } from 'react';
import {logout} from '../auth/auth-service'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const Profil = (props) => {
    return(
        
        <div>
            PROFIL
            {props.userInSession ? (
            <p>Bonjour, {props.userInSession.firstname} {props.userInSession.lastname}</p>
            
            ) : (
                <div>
                </div>
                )
                }
            </div> 
            
        
        
)
}

export default Profil;