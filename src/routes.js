//Routes added here will be rendered by webpack as the static site
import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'
import App from './App.js'
import Home from './pages/Home.js'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
  </Route>
)
