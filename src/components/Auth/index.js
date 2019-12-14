import React from 'react';
import { LOGIN, LOGOUT } from '../../constants/APIRoutes';
import { URL } from '../../env';
// import { getCall } from '../../utils' TODO: change to utils after CORS resolved

export const Auth = () => {
  console.log(`Auth ${URL}${LOGIN}`, 'and', process.env);
    
  // TODO: use the axios util to send Get request instead of link
  // return process.env.REACT_APP_NODE_ENV !== 'development'? 
  // (<button type="button" onClick={getCall(LOGIN, '/projects')}>Login</button>
  // ) :
  return (<div>
      <a href={`${URL}${LOGIN}`}>
      <button type="button">Login</button>
      </a>
      Github login: you'll be redirected to /projects with successful login
    </div>
  )
}

export const Logout = () => {
  return (
    <div>
      <a href={`${URL}${LOGOUT}`}>
      <button type="button">Logout</button>
      </a>
      Github logout: you'll be redirected to / wiht successufl logout
    </div>
  )
}