import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App/App.js'
import Sound from './components/Sound/Sound.js'
import Welcome from './components/Welcome/Welcome.js'
import NotFound from './components/NotFound/NotFound.js'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome} />
      <Route path='/sound/:id' selectedSound={0} component={Sound} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

export default Routes
