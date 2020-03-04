import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'


import history from './history'

const Router = () => (
  <div className="container-fluid">
    <BrowserRouter history={history}>

      <Switch />
    </BrowserRouter>
  </div>
)

export default Router
