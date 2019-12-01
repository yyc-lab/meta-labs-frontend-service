import React from 'react';
import axios from 'axios';
import { LOGIN, LOGOUT, BASE_URL } from 'constants/APIRoutes'

export const Auth = () => {
  return (
    <div>
      <a href={`${BASE_URL}${LOGIN}`}>
      <button type="button">Login</button>
      </a>
      Github login: you'll be redirected to /projects with successful login
    </div>
  )
}

export const Logout = () => {
  return (
    <div>
      <a href={`${BASE_URL}${LOGOUT}`}>
      <button type="button">Logout</button>
      </a>
      Github login: you'll be redirected to /projects with successful login
    </div>
  )
}