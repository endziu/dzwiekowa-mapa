import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App.js'
import Mapa from './components/Mapa.js'
import Info from './components/Info.js'
import Imgs from './components/Imgs.js'
import Welcome from './components/Welcome.js'
import NotFound from './components/NotFound.js'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome} />
      <Route path='/rec/:id' component={Mapa} />
      <Route path='/info/:id' component={Info} />
      <Route path='/imgs/:id' component={Imgs} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

export default Routes
