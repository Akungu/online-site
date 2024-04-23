import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder='Enter name' />
          <input type="email" placeholder='Enter email' />
          <input type="password" placeholder='Enter password' />
          </div>
          <button>Create Account</button>
          <p className='login'>Already have an account?<span>Login</span></p>
          <div className="login-signup-agreement">
            <input type="checkbox" name='' id='' />
            <p>By continuing, you agree to all our terms and policies.</p>
          </div>
        
      </div>
    </div>
  );
}

export default LoginSignup;
