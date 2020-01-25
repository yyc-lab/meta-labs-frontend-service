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

const CRUD_TO_METHOD = {
  GET: 'get',
  UPDATE: 'put',
  CREATE: 'create',
  DELETE: 'delete'
}

const defaultApiCall = ({ crudType, resource, body, filter }) => {
  const inputCrudType = crudType.split('_')[0];
  const method = CRUD_TO_METHOD[inputCrudType];
  const idRequiredMethods = ['PUT', 'DELETE', 'GET_ONE'];

  let url = `/${resource}`;

  if (idRequiredMethods.includes(crudType)) {
    if (!body.id) throw new Error('id not provided');
    url += `/${body.id}`
  }

  if (crudType === 'GET_MANY' && filter) {
    // url += `?filter=${filter}`
  }  
  
  return {
    url,
    method,
    body,
  }
}

export default defaultApiCall