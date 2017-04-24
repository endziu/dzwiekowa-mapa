import React from 'react'
import readFile from 'fs-readfile-promise'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'

import App from '../shared/App'
import Error from '../shared/comps/Error'
import NoMatch from '../shared/comps/NoMatch'

export default (req, res, next) => {
  const routes = ['/', '/:id', '/:id/info', '/:id/map', '/:id/photos']
  const checkRoutes = (routes) => routes.filter((r) => matchPath(req.url, { path: r, exact: true }))
  const routeMatches = checkRoutes(routes).length !== 0

  const generateHtml = (data) => {
    const appString = renderToString(
      <StaticRouter context={{}} location={req.url}>
        <App sounds={data} />
      </StaticRouter>
    )
    const dataString = JSON.stringify(data)

    return readFile('./dist/index.html', 'utf-8')
      .then((s) => s.replace('{{APP}}', appString))
      .then((s) => s.replace('{{DATA}}', `window.__sounds__ = ${dataString}`))
  }

  if (routeMatches) {
    readFile('./src/shared/assets/tracks.json', 'utf-8')
      .then((file) => JSON.parse(file))
      .then((data) => generateHtml(data))
      .then((html) => res.status(200).send(html))
      .catch((err) => res.status(500).send(renderToString(<Error message={err} />)))
  } else {
    res.status(404).send(renderToString(<NoMatch />))
  }
}
