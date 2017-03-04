import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Layout from './components/Layout.js'
import Mapa from './components/Mapa.js'
import Info from './components/Info.js'
import Add from './components/Add.js'
import Welcome from './components/Welcome.js'
import NotFound from './components/NotFound.js'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Welcome} />
      <Route path='/rec/:id' component={Mapa} />
      <Route path='/info' component={Info} />
      <Route path='/add' component={Add} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

export default Routes
