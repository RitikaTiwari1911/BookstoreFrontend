import React from 'react'
import Login from './pages/Login';
import "../src/App.css"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
require('dotenv').config()
const App = ()=>{
  return(
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
      </Switch>
    </BrowserRouter>
    </>  
  )
}

export default App;
