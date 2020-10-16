import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ForgotPassword from '../pages/ForgotPassword'
import PasswordChanged from '../pages/ForgotPassword/PasswordChanged'

import history from './history'

const Router = () => (
  <div className="container-fluid">
    <BrowserRouter history={history}>
      <Route path="/forgotpassword/:token" component={ForgotPassword} exact />
      <Route path="/" component={PasswordChanged} exact />
      <Switch />
    </BrowserRouter>
  </div>
)

export default Router
