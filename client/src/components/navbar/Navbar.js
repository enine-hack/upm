// components/navbar/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../auth/auth-service'

const navbar = (props) => {
  return (
    <>
    
      {props.userInSession ? (
          <nav className="navbar">
            
            <div className="navbar__logged__UPOSHME">
              <Link to='/'>UPOSH | ME</Link>
            </div>

            <div className="navbar_logged_customized_name">
                {props.userInSession.firstname} {props.userInSession.lastname}
            </div>
            
            <div className= "navbar__logged_allowed_menu">

              <div>
                <Link to='/myfavoritebrands'>Brands</Link>
              </div>
              <div>
                <Link to='/profil'>Profile</Link>
              </div>
                           
                <button onClick={(e) => {
                  logout().then(() => props.updateUser(false))
                  }}>LOG OUT</button>
            </div>

          </nav>
        
      ) : (
        <nav className="navbar" >

          <div>                
            <Link to='/signup'>
              <img  className="navbar__unlogged__icon" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Symbol_code_ww_45.svg/1024px-Symbol_code_ww_45.svg.png" alt="menu"/>
            </Link>
          </div>

          <div><Link to='/'>UPOSH | ME</Link></div>

          <div>
            <Link to='/signup'>
                <img  className="navbar__unlogged__icon" 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsuxUrEVyvCmLYoM5BeyNUOts2akw1RFDYw&usqp=CAU" alt="profil"/>
            </Link>
          </div>
            
            
        </nav>
      )}
      
      </>
  )
}

export default navbar;