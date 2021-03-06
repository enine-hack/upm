import React, { Component } from 'react';


const Menu = () => { 
    return (
        <div className="landing_menu">
            <div className="landing_menu__main_title">
                <p>You are the next level of luxury</p>

            </div>

            <div className="landing_menu__l1">
                <div className="landing_menu__l1_bloc">
                    <div>
                    <img    className="landing_menu__l1_bloc_img "
                            src ="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/>
                    </div>
                    <div>
                        <button className="landing_menu__l1_bloc_btn a_black_landing">
                        <a  className="a_black"
                            href="/concept"><p className="landing_menu__l1_bloc_subtitle">CONCEPT</p></a>
                        </button>
                    </div>
                </div>
                <div className="landing_menu__l1_bloc">
                    <div>
                        <img    className="landing_menu__l1_bloc_img"
                                src ="https://images.unsplash.com/photo-1549385117-ba4f57c7144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 "/>
                    </div>
                    <div>
                        <button className="landing_menu__l1_bloc_btn a_black_landing">
                        <a  className="a_black"
                            href="/brandslist">
                            <p className="landing_menu__l1_bloc_subtitle">ALL BRANDS</p></a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="landing_menu__l2">
                <p>'' I’m a man of simple tastes, I’m always satisfied with the best.'' <br></br><b>Oscar Wilde</b></p>
                
                <button className="landing_menu__l2_btn">
                        <a  className="a_white a_white:hover"
                            href="/signup">LIVE THE EXPERIENCE</a>
                        </button>  
            </div>

            <div className="landing_menu__l3">
                <div>
                    <img    className="landing_menu__l3_img"
                            src="https://cdn.trendhunterstatic.com/phpthumbnails/196/196249/196249_1_800.jpeg"/>
                </div>
                <div>
                    <div>
                        <button className="landing_menu__l3_btn">
                            <a  className="a_white"
                                href="/partners">PARTNERS ZONE</a>
                        </button> 
                    </div>
                    <div>
                        <p className="landing_menu__l3_desc">Access the timelessness and luxury of tomorrow.</p>
                    </div>
                    
                </div>
            
                
                    
            </div>
        </div>
    )
  }
   
export default Menu;