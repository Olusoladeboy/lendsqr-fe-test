import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import login_bg from '../../assets/images/pablo-sign-in.svg';
import './dashboard.scss';

function Dashboard() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const toggleVisibility = (e: any) => {
    e.preventDefault();
    const visibility = !passwordVisible;
    setPasswordVisible(visibility);
  }
  return (
    <div className="login">
      <div className="container mx-auto">
        This is a Dashboard
      </div>
    </div>
  );
}

export default Dashboard;
