import React from 'react'
import path from 'path'
import readFile from 'fs-readfile-promise'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'

import App from '../shared/App'
import Error from '../shared/comps/Error'
import NoMatch from '../shared/comps/NoMatch'
import { asNumber, isDigitOnly } from '../shared/helpers'

export default (req, res, next) => {
  const routes = ['/', '/:id', '/:id/info', '/:id/map', '/:id/photos']
  const checkRoutes = (paths) => paths.filter((i) => matchPath(req.url, { path: i, exact: true }))
  const routeMatches = checkRoutes(routes).length !== 0

  if (routeMatches) {

  readFile('./src/shared/assets/tracks.json', 'utf-8')
    .then(file => JSON.parse(file))
    .then(data => {
      const reactApp =
        <StaticRouter context={{}} location={req.url}>
          <App sounds={data} />
        </StaticRouter>
      const appString = renderToString(reactApp)
      const dataString = JSON.stringify(data)
      const html =
        readFile('./dist/index.html', 'utf-8')
          .then((s) => s.replace('{{APP}}', appString))
          .then((s) => s.replace('{{DATA}}', `window.__sounds__ = ${dataString}`))
      return html
    })
    .then((html) => {
      res.status(200).send(html)
      next()
    })
    .catch((err) => {
      res.status(500).send(renderToString(<Error />))
      next()
    })
  } else {
    res.status(404).send(renderToString(<NoMatch />))
    next()
  }
}
