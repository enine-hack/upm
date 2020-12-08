import React, { Component } from 'react';

const Newsletter = (props) => {
    return (
        <div className="footer__l3">
        {/* <Newsletter /> */}
        <form>
            <p className="footer__l3_title">
            NEWSLETTER</p>
            <p className="footer__l3_desc">
            Stay in the loop of our news</p>
            
            <br></br>
            <input  className="footer__l3_input"
                    type="email" name="email" placeholder="Email"/>
            <input  className="footer__l3_btn"
                    type="submit" value=">" />
        </form>
    </div>
    )
}

export default Newsletter;