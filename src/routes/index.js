import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ForgotPassword from '../pages/ForgotPassword'

import history from './history'

const Router = () => (
  <div className="container-fluid">
    <BrowserRouter history={history}>
      <Route path="/" component={ForgotPassword} exact />
      <Switch />
    </BrowserRouter>
  </div>
)

export default Router
