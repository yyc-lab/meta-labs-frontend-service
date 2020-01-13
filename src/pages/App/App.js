import React from 'react';
import { Layout } from '../../components/Layout'
import { Dashboard } from '../Dashboard'
import { NotFound } from '../NotFound'
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
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/projects" component={Projects}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App;
