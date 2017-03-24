import { render } from 'react-dom'
import React from 'react'
import App from '../shared/App'
import { BrowserRouter as Router } from 'react-router-dom'
import 'whatwg-fetch'

import '../shared/assets/tachyons.min.css'
import '../shared/assets/style.css'

render((
  <Router>
    <App sounds={window.__sounds__} />
  </Router>
), document.getElementById('app'))
