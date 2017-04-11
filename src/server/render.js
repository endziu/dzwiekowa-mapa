import React from 'react'
import readFile from 'fs-readfile-promise'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'

import App from '../shared/App'
import Error from '../shared/comps/Error'
import NoMatch from '../shared/comps/NoMatch'

export default (req, res, next) => {
  const matchHome = matchPath(req.url, { path: '/', exact: true })
  const matchMap = matchPath(req.url, { path: '/:id/map', exact: true })
  const matchInfo = matchPath(req.url, { path: '/:id/info', exact: true })

  const routerApp =
    (data) =>
      <StaticRouter context={{}} location={req.url}>
        <App sounds={data} />
      </StaticRouter>

  if (matchHome || matchMap || matchInfo) {
    return readFile('./src/shared/assets/tracks.json', 'utf-8')
      .then(file => JSON.parse(file))
      .then(jsonData => {
        return readFile('./dist/index.html', 'utf-8')
          .then((s) => s.replace('{{APP}}', renderToString(routerApp(jsonData))))
          .then((s) => s.replace('{{DATA}}', `window.__sounds__ = ${JSON.stringify(jsonData)}`))
      })
      .then((html) => {
        res.status(200).send(html)
        next()
      })
      .catch((err) => {
        res.status(500).send(renderToString(<Error message={err} />))
        next()
      })
  } else {
    res.status(404).send(renderToString(<NoMatch />))
    next()
  }
}
