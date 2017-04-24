import React from 'react'
import readFile from 'fs-readfile-promise'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'

import App from '../shared/App'
import Error from '../shared/comps/Error'
import NoMatch from '../shared/comps/NoMatch'

export default (req, res, next) => {
  const routes = ['/', '/:id', '/:id/info', '/:id/map', '/:id/photos']
  const checkRoutes = (routes) => routes.filter((i) => matchPath(req.url, { path: i, exact: true }))
  const routeMatches = checkRoutes(routes).length !== 0

  const parseJson = (file) => JSON.parse(file)
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

  const sendHtml = (html) => {
    res.status(200).send(html)
  }

  const handleErrors = (err) => {
    res.status(500).send(renderToString(<Error message={err} />))
  }

  const handleUnMatchedRequests = () => {
    res.status(404).send(renderToString(<NoMatch />))
  }

  if (routeMatches) {
    readFile('./src/shared/assets/tracks.json', 'utf-8')
      .then(parseJson)
      .then(generateHtml)
      .then(sendHtml)
      .catch(handleErrors)
  } else {
    handleUnMatchedRequests()
  }
}
