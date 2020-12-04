import React, { Component } from 'react';

import Signupcover from '../auth/Signupcover'

const Cover = (props) => { 
    return (

       <div>
        
        <img className="Img-landing-cover"
             src ={"https://images.unsplash.com/photo-1511140973288-19bf21d7e771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"}/>

        <Signupcover user={props.user} updateUser={props.updateUser} />

        </div>

    )
}


export default Cover;

//image 1 :
// https://www.fcls.fr/wp-content/uploads/elementor/thumbs/fcls_voiture_avec_chauffeur_transfert_aeroport-3000x2226-oqj5gvhmki198vhv6ytm2jet1eblg1lhffk9nu0oso.jpg