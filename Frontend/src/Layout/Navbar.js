import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../images/CTVLogoCleanCopy.png";


const Navbar = () => {
    return (
    <header id="header">
        <div className="inner">
            <NavLink to="/" className="logo">
            <img src={logo} style={{width: 'auto', height: 50, display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Home" />
            </NavLink>
            <nav id="nav">
            <NavLink to="/" exact style={{":hover": { textDecoration : 'underline' }}} activeStyle={{textDecoration : 'underline' }}>Home</NavLink>
            <NavLink to="/faq" exact activeClassName="active" activeStyle={{textDecoration : 'underline'}}>Steps</NavLink>
            {/* <NavLink to={{ pathname: "https://google.com" }} target="_blank" >RE</NavLink> */}
            <NavLink to="/about_us" exact activeClassName="active" activeStyle={{textDecoration : 'underline'}}>About Us</NavLink>
            <NavLink to="/login" exact activeClassName="active" activeStyle={{textDecoration : 'underline'}}>Log In</NavLink>
            </nav>
            <NavLink to="#navPanel" className="navPanelToggle"><span className="fa fa-bars" /></NavLink>
        </div>
    </header>
      
    );
};

export default Navbar;