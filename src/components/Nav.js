import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {shoppingCart} from 'react-icons-kit/fa/shoppingCart';
import {userCircleO} from 'react-icons-kit/fa/userCircleO';

const Nav = () => {
    return (
        <div className="navbar">
            <div className = "name">
                <Link to = '/' style={{textDecoration: 'none'}}>     
                    <h1>ShopHere.com</h1>
                </Link>
            </div>
            <div className="icons">
                <Link to = '/cart'>   
                    {/* <div className="total"><span>50</span></div>   */}
                    <Icon icon={shoppingCart} size={35} className="icon cart"></Icon>
                </Link>
                <Link to = '/'>   
                    <Icon icon={userCircleO} size={30} className="icon user"></Icon>
                </Link>
            </div>
        </div>
    )
}

export default Nav;