import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { URL } from '../../env';

/*
* Get data with option to redirect
* @parameter: string endPoint, string
* @return Promise <React DOM/> 
*/
export const getCall = (endPoint, newRoute = '') => {
  return axios.get(`${URL}${endPoint}`)
  .then(res =>  {
    console.log(res);

    //handle redirect if provied
    if (!!newRoute) {
      return <Redirect to={newRoute} />
    }
  })
  .catch(error => {
    // handle error
    console.log(error);
    return <Redirect to='/' />
  });
}
