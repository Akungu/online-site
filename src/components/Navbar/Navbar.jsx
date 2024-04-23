import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const[menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
     <div className="nav-logo">
        <img src={logo} alt=""  />
        <p>ONLINE-SHOP</p>
        </div> 
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="Shop" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Men's")}}><Link style={{textDecoration:'none'}} to='/Mens'>Men's</Link>{menu==="Men's" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women's")}}><Link style={{textDecoration:'none'}} to='/Womens'>Women's</Link>{menu==="Women's" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids'")}}><Link style={{textDecoration:'none'}} to='/Kids'>Kids'</Link>{menu==="Kids'" ? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link style={{textDecoration:'none'}} to='/Login'><button>Login</button></Link>
           <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt=""  /></Link> 
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  );
}

export default Navbar;
