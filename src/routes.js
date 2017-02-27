import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Layout from './components/Layout.js'
import Mapa from './components/Mapa.js'
import Welcome from './components/Welcome.js'
import NotFound from './components/NotFound.js'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Welcome} />
      <Route path='/rec/:id' component={Mapa} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

export default Routes
