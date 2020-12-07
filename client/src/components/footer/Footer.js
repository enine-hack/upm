import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../footer/Newsletter';

const Footer = (props) => {
    return (
        <div className="footer">
            <hr></hr>
            <div className="footer__l1">

                <div className="footer__l2">
                    <div>
                        <Link to= "/">FAQ</Link>
                    </div>
                    <div>
                        <Link to= "/">CONTACT</Link>
                    </div>
                    <div>
                        <Link to= "/">LEGAL TERMS</Link>
                    </div>
                    <div>
                        <Link to= "/">PRIVACY POLICY</Link>
                    </div>
                </div>
 
                    
                <div className="footer__l3">
                    {/* <Newsletter /> */}
                    <form>
                    NEWSLETTER
                    <br></br>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="submit" value="Email" />
                    </form>
                </div>

                <div>
                    <p>UPOSH | ME</p>
                </div>    
                    
            
                    
                
            </div> 

        </div>     
  )
}

export default Footer;