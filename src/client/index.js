import { render } from 'react-dom'
import React from 'react'
import App from '../shared/App'
import { BrowserRouter as Router } from 'react-router-dom'
import 'whatwg-fetch'

render((
  <Router>
    <App sounds={window.__sounds__} />
  </Router>
), document.getElementById('app'))
