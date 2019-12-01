import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

if (process.env.META_LABS_API_BASE_URL) {
  axios.defaults.baseURL = process.env.META_LABS_API_BASE_URL;
}
console.log('index.js:', process.env)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
