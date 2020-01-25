import React, { useState } from 'react';
import { Redirect } from 'react-router'
import Logo from '../App/lhl_logo.png'
// import Button from '../../external_components'
import 'antd/dist/antd.css';
import { Button } from 'antd'; // TODO CONNECT TO EXTERNAL COMPONENTS
import './login.css'

export const Login = () => {
  const [loginRedirect, setLoginRedirect] = useState(false)
  const [loadingSpinner, setLoadingSpinner] = useState(false)

  const loginClick = () => {
    // const [login, err, loading, data] = useLogin()
    // login()
    // if(loading) {
    //   setLoadingSpinner(true)
    // }
    const data = {}

    if(Object.entries(data).length === 0) {
      setLoginRedirect(true)
    }
  }
  
  if (loadingSpinner) {
    return (
      <div>
        <Button type="primary" loading>
          Loading
        </Button>
      </div>
    )
  }

  if(loginRedirect) {
    return <Redirect to="/dashboard" />
  }
  
  return (
    <main id="login-page">
      <div className="logo">YYC Labs</div>
      <button onClick={loginClick} className="github">Login with Github</button>
      <p>A GitHub account is required to login to YYC Labs.</p>
      <img src={Logo} height="40"/>
    </main>
  )
}
