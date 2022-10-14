import React from 'react';
import logo from '../../assets/images/logo.svg';
import login_bg from '../../assets/images/pablo-sign-in.svg';
import './login.scss';

function Login() {
  return (
    <div className="login">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <img src={logo} className="login_logo" alt="logo" />
            <img src={login_bg} className="login_hero" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
