import React from 'react'
import Login from './pages/Login';
import HomePage from './pages/HomePage'
import "../src/App.css"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
require('dotenv').config()
const App = ()=>{
  return(
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path = '/dashboard' component={HomePage}/>
      </Switch>
    </BrowserRouter>
    </>  
  )
}

export default App;
