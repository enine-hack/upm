import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact__l1">
                    <div className="contact__title">
                        CONTACT US
                    </div>
                <p>
                    <b>E-mail</b> : contact.uposhme@gmail.com
                </p>

                <button className="contact__btn">
                    <a      className= "a_white a_white:hover"
                            href="/">BACK</a>
                </button>

                </div>
            
                
            </div>
        );
    }
}

export default Contact;