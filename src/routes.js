//Routes added here will be rendered by webpack as the static site
import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'
import App from './App.js'
import Home from './pages/Home/Home.js'
import Landing from './pages/Landing/Landing.js'
import Resume from './pages/Resume/Resume.js'
import Projects from './pages/Projects/Projects.js'
import Contact from './pages/Contact/Contact.js'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Landing}/>
    <Route path='/home' component={Home}/>
    <Route path='/resume' component={Resume}/>
    <Route path='/projects' component={Projects}/>
    <Route path='/contact' component={Contact}/>

  </Route>
)
