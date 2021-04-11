import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="inner">
                <div className="flex">
                    <div className="copyright">
                    © e-DAC G31.
                    </div>

                        <NavLink to='/termsnconditions' target="_blank">Terms of Service</NavLink>
                        <NavLink to='/privacy_policy' target="_blank">Privacy Policy</NavLink>
                        <NavLink to='/contact_us' target="_blank">Contact Us</NavLink>
                        <NavLink to='/feedback' target="_blank">Feedback</NavLink>
                        <NavLink to='/guidelines' target="_blank">General Guidelines</NavLink>
                        
                    <ul className="icons">
                    <li><Link to="/" className="icon fa-facebook"><span className="label">Facebook</span></Link></li>
                    <li><Link to="/" className="icon fa-twitter"><span className="label">Twitter</span></Link></li>
                    <li><Link to="/" className="icon fa-instagram"><span className="label">Instagram</span></Link></li>
                    </ul>
                </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;