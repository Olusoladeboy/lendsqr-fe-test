import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import login_bg from '../../assets/images/pablo-sign-in.svg';
import './login.scss';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const toggleVisibility = (e: any) => {
    e.preventDefault();
    const visibility = !passwordVisible;
    setPasswordVisible(visibility);
  }
  return (
    <div className="login">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="login_grid-1 sm:p-10 px-10">
            <img src={logo} className="login_logo" alt="logo" />
            <img src={login_bg} className="sm:block hidden login_grid-1_hero mt-32" alt="logo" />
          </div>
          <div className="login_grid-2 p-10 sm:px-20 px-10 sm:mt-32 mt-5">
            <h1>Welcome!</h1>
            <p className='mt-5'>Enter details to login.</p>
            <div className="login_form mt-10">
              <div>
                <input className='login_form_input' type="text" placeholder='Email' />
              </div>
              <div className='mt-5'>
                <input className='login_form_input' type={passwordVisible ? "text" : "password"} placeholder='Password' />
                <span onClick={toggleVisibility} className='float-right -mt-7'>{passwordVisible ? 'Hide' : 'Show'}</span>
              </div>
              <div className='mt-5'>
                <span>Forgot Password</span>
              </div>
              <div className='mt-5'>
                <button>
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
