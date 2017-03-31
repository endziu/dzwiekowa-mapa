import React from 'react'
import readFile from 'fs-readfile-promise'
import { renderToString as reactToHtml } from 'react-dom/server'
import { StaticRouter as Router, matchPath } from 'react-router'

import App from '../shared/App'
import Error from '../shared/comps/Error'
import NoMatch from '../shared/comps/NoMatch'

export default (req, res) => {
  const matchHome = matchPath(req.url, { path: '/', exact: true })
  const matchSound = matchPath(req.url, { path: '/rec/:id' })
  const routerApp = (data) => <Router context={{}} location={req.url}><App sounds={data} /></Router>

  if (matchHome || matchSound) {
    readFile('./src/shared/assets/tracks.json', 'utf-8')
      .then(file => JSON.parse(file))
      .then(data => {
        return readFile('./src/index.html', 'utf-8')
          .then((s) => s.replace('{{APP}}', reactToHtml(routerApp(data))))
          .then((s) => s.replace('{{DATA}}', `window.__sounds__ = ${JSON.stringify(data)}`))
      })
      .then((html) => res.status(200).send(html))
      .catch(err => res.status(500).send(reactToHtml(<Error message={err} />)))
  } else {
    res.status(404).send(reactToHtml(<NoMatch />))
    return
  }
}
