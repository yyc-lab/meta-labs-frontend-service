import React from 'react';
import { Dashboard } from '../Dashboard'
import { NotFound } from '../NotFound'
import { NewProject } from '../NewProject'
import { Projects } from '../Projects'
import { Login } from '../Login'
import 'antd/dist/antd.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/new" component={NewProject}/>
        <Route exact path="/projects" component={Projects}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default App;
