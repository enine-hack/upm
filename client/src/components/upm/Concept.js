import React, { Component } from 'react';

class Concept extends Component {
    render() {
        return (
            <div className="concept">
                <div className="concept__grey_zone">
                </div>
                <div className="concept__white_zone">
                    
                </div>
                <div className="concept_pictures">
                <img className="concept_pictures_t"
                     src="https://images.unsplash.com/photo-1535622059989-f0a821a938f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/>
                
                <div>
                <div>
                <p className="concept__title">UPOSH | ME</p>
                <p className="concept__subtitle">CONCEPT</p>
                </div>

                <div className="concept__descriptions">
                    <div>
                    <p className="concept__desc1">This is a WebApp that helps you add and view all the news and lastest products of your favorite high-end and luxury brands. You will also soon benefits from exceptional features such as the access to your purchase history, sales and exclusive privileges linked to your loyalty accounts.</p>
                    </div>
                    <div>
                    <p className="concept__desc2">Today, UPOSH|ME is at the concept stage. The first release is a platform that's still accessible. You will be able to explore the exclusive gift collections and offer something that is sure to please your lovers and friends. Don't loose any more time to find a unique and original gift idea in a record time for any occasion on  
                        <u><a  className="a_white a_white:hover"
                            href="https://www.uposhme.com/" target="_blank"> www.uposhme.com</a></u> (french version).</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Concept;