// components/navbar/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../auth/auth-service'

const navbar = (props) => {
  return (
    <>
      {props.userInSession ? (
            <div class="navbar">
            <header class="site-header">
              <div class="site-branding">
                <p class="site-title">
                <a href="/" className="a_black a_black:hover">UPOSH | ME</a></p>
              </div>
              
              <input type="checkbox" id="top-nav" name="top-nav" aria-labelledby="top-nav-toggle" />
              <label for="top-nav" class="top-nav-label" id="top-nav-toggle">
                <span class="open-close-menu">
                  <span class="open-menu">Open menu</span>
                  <span class="close-menu">Close menu</span>
                </span>
              </label>
              

              <nav class="main-navigation">
                <ul class="menu">
                  <li class="menu-item-username">
                    <p class="menu-item-username-p">{props.userInSession.firstname} {props.userInSession.lastname}</p>
                  </li>
                  <li class="menu-item">
                    <a href="/favoritebrands">My Brands</a>
                  </li>
                  <li class="menu-item">
                    <a href="/profil">Profile</a>
                  </li>
                  
                
                  <li class="menu-item">
                    <a href="/login">
                      <img  class="menu-item-btn-login-img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsuxUrEVyvCmLYoM5BeyNUOts2akw1RFDYw&usqp=CAU" alt="profil"/>
                    </a>
                  </li>

                <li class="menu-item">
                
                <button   class="menu-item-btn-logout"
                          onClick={(e) => {
                      logout().then(() => props.updateUser(false))
                      }}>
                      <img  class="menu-item-btn-logout-img"
                            src="https://i7.uihere.com/icons/337/535/596/logout-9ba9f57d617c97e633b16f213b37c9d9.png"/>
                      </button>
                  </li>
                </ul>
              </nav>
            </header>
            <main class="site-main"></main>
            <footer class="site-footer"></footer>
          </div>
      ) : (
        <div class="site">
            <header class="site-header">
              <div class="site-branding">
                <p class="site-title"><a href="/" className="a_black a_black:hover" >UPOSH | ME</a></p>
              </div>
              <input type="checkbox" id="top-nav" name="top-nav" aria-labelledby="top-nav-toggle" />
              <label for="top-nav" class="top-nav-label" id="top-nav-toggle">
                <span class="open-close-menu">
                  <span class="open-menu">Open menu</span>
                  <span class="close-menu">Close menu</span>
                </span>
              </label>
              <nav class="main-navigation">
                <ul class="menu">
                <li class="menu-item">
                    <a href="/">Concept</a>
                  </li>
                <li class="menu-item">
                    <a href="/brandslist">All Brands</a>
                  </li>
                  <li class="menu-item">
                    <a href="/partners">Partners</a>
                  </li>

                  
                
                <li class="menu-item">
                    <a href="/login">
                      <img  class="menu-item-btn-login-img"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsuxUrEVyvCmLYoM5BeyNUOts2akw1RFDYw&usqp=CAU" alt="profil"/>
                    </a>
                  </li>


                </ul>
              </nav>
            </header>
            <main class="site-main"></main>
            <footer class="site-footer"></footer>
          </div>
      )}
      
      </>
  )
}

export default navbar;