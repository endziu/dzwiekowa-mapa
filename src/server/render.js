import React from 'react'
import { renderToString as reactToHtml } from 'react-dom/server'
import { StaticRouter as Router, matchPath } from 'react-router'
import readFile from 'fs-readfile-promise'

import App from '../shared/App'
import Error from '../shared/comps/Error'
import NoMatch from '../shared/comps/NoMatch'

export default (req, res) => {
  const matchHome = matchPath(req.url, { path: '/', exact: true })
  const matchSound = matchPath(req.url, { path: '/rec/:id' })
  const reactApp = (data) => (<Router context={{}} location={req.url}><App sounds={data} /></Router>)

  if (matchHome || matchSound) {
    readFile('./src/shared/assets/tracks.json')
      .then(file => JSON.parse(file.toString()))
      .then(data => {
        return readFile('./src/index.html', 'utf-8')
          .then((s) => s.replace('{{APP}}', reactToHtml(reactApp(data))))
          .then((s) => s.replace('{{DATA}}', `window.__sounds__ = ${JSON.stringify(data)}`))
      })
      .then((html) => res.status(200).send(html))
      .catch(err => res.status(500).send(reactToHtml(<Error message={err} />)))
  } else {
    res.status(404).send(reactToHtml(<NoMatch />))
    return
  }
  
}
