/*
* Return any environment variable listed by build matched
* with the REACT_APP_NODE_ENV variable from .env
*
*/
const config = {
  'development': {
    URL: 'http://localhost:3030'
  },
  'test': {
    URL: 'https://metalabyyc.herokuapp.com'
  },
  'production': {
    URL: 'https://metalabyyc.herokuapp.com'
  }
}[process.env.REACT_APP_NODE_ENV || 'development']

export const URL = config.URL