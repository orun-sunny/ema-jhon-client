import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            

            <img className='logo' style={{ width: '20%' }} src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">inventory</a>
            </nav>

            <nav>
                
            </nav>
        </div>
    );
};

export default Header;