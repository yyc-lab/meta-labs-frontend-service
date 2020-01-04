import React from 'react'
import {TaskList} from '../../components/TaskList'
import axios from 'axios'

const API_URL = "http://localhost:3030/user"
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcl9uYW1lIjoidmVuZXRyaXVzIiwiZGlzcGxheV9uYW1lIjoiR2VyZ2VseSBKIiwicGhvdG8iOiJodHRwczovL2F2YXRhcnMwLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzI1NTE3ODk2P3Y9NCIsInRva2VuIjoiMjU1MTc4OTYiLCJpYXQiOjE1NzYzODQ4MTh9.-iUlHyket2FIpuOCBKHSbLrtXnstmrBFwXnTzcMpXLM'
let result = null

function action(){
  let headers = {"Content-Type": "application/json"};
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcl9uYW1lIjoidmVuZXRyaXVzIiwiZGlzcGxheV9uYW1lIjoiR2VyZ2VseSBKIiwicGhvdG8iOiJodHRwczovL2F2YXRhcnMwLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzI1NTE3ODk2P3Y9NCIsInRva2VuIjoiMjU1MTc4OTYiLCJpYXQiOjE1NzYzODQ4MTh9.-iUlHyket2FIpuOCBKHSbLrtXnstmrBFwXnTzcMpXLM'
  if (token) {
    headers["Authorization"] = `${token}`;
  }
  const result = fetch("http://localhost:3030/user/profile", {headers})
  .then(  function(u){ return u.json();}
  ).then(
    function(json){
      console.log(json);
    })
  console.log('result', result)
}
 

function action3(){
  fetch(API_URL, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + TOKEN
        // 'Content-Type': 'application/json'
    }
  })
  .then(res => console.log({res}))
}

function action2(){
  let headers = {"Content-Type": "application/json"};
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcl9uYW1lIjoidmVuZXRyaXVzIiwiZGlzcGxheV9uYW1lIjoiR2VyZ2VseSBKIiwicGhvdG8iOiJodHRwczovL2F2YXRhcnMwLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzI1NTE3ODk2P3Y9NCIsInRva2VuIjoiMjU1MTc4OTYiLCJpYXQiOjE1NzYzODYxNzN9.03lzBAyQEy9Jml6Y-2sHbQxKbLTN2p5-gL-ISDKqQMI'
  if (token) {
    headers["Authorization"] = `Token ${token}`;
  }
  axios.get("http://localhost:3030/user", {
    headers
    
  })
  .then(response => {
    console.log(response)
  })
}

export const Dashboard = () => {
  return (
    <div>
      <a href='http://localhost:3030/auth/github'>Something</a>
      <a href='http://localhost:3030/auth/github'>Something</a>
      <button onClick={() => action()}>Button</button>
      <TaskList />
    </div>
  )
}


/*
Components
- TaskList
- Tasks
- ProjectToggle
- NewProject
- Projects
- Project
*/