import React from 'react';
import './Footer.css';
import logo_big from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';
import pintester_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo_big} alt="" />
        <p>Online Shop</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        
        <div className="footer-icons-container">
            <div><img src={instagram_icon} alt="" />
            </div>
            <div>
            <img src={pintester_icon} alt=""  />
            </div>
            <div>
            <img src={whatsapp_icon} alt="" />
        </div>
            
            </div>
           
      </div>
      <div className="footer-copyright">
       <p>Copyright @ 2023-All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
