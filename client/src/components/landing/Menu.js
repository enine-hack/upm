import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Menu = () => { 
    return (
        <div className="landing_menu">
            <div className="landing_menu__main_title">
                <p>You are the next level of luxury</p>
            </div>

            <div className="landing_menu__l1">
                <div className="landing_menu__1_bloc">
                    <div>
                    <img    className="landing_menu__l1_bloc_img"
                            src ="https://cdn.trendhunterstatic.com/phpthumbnails/196/196249/196249_1_800.jpeg"/>
                    </div>
                    <div>
                        <button className="landing_menu__l1_bloc_btn">
                        <a href="/">CONCEPT</a>
                        </button>
                    </div>
                </div>
                <div className="landing_menu_l1_bloc">
                    <div>
                        <img    className="landing_menu__l1_bloc_img"
                                src ="https://www.collegedeparis.fr/wp-content/uploads/2018/01/ouverture-bachelor-marketing-du-luxe-cdp-700x465.jpg "/>
                    </div>
                    <div>
                        <button className="landing_menu__l1_bloc_btn">
                        <a href="/brandslist">ALL BRANDS</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="landing_menu__l2">
                <div>
                    <img className="landing_menu__l2_img"
                        src ="https://images.unsplash.com/photo-1496517463163-3550265405c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"/>
                </div>
                <div >
                    <p className= "landing_menu_l2_title">
                        <Link to='/signup'>LIVE THE EXPERIENCE</Link>
                    </p>
                </div>

                <div>
                    <Link to= "/">PARTNERS ZONE</Link>
                </div>
    </div>
        </div>
    )
  }
   
export default Menu;