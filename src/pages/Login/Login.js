import React from 'react';
import Logo from '../App/lhl_logo.png'
import './login.css'

export const Login = () => <main id="login-page">
  <div className="logo">YYC Labs</div>
  <button className="github">Login with Github</button>
  <p>A GitHub account is required to login to YYC Labs.</p>
  <img src={Logo} height="40"/>
</main>