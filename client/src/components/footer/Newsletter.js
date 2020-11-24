import React, { Component } from 'react';

const Newsletter = (props) => {
    return (
        <div>
            
            <form style={{marginBottom: "50px"}}>
                <label style={{paddingRight: "20px"}}>NEWSLETTER</label>
                <input style={{ width: "300px", height: "40px", marginBottom: "30px", borderStyle: "none none solid none", borderWidth: "1px", borderColor: "#E5E5E5", backgroundColor: "#f2f2f2"}}
                       type="email" name="email" placeholder="Email"/>
                <input style={{  width: "40px", height: "40px", border: "none", backgroundColor: "#1a1a1a", color: "white" }} type="submit" value=">" />
            </form>

        </div>
    )
}

export default Newsletter;