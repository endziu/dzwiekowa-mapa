import React from 'react'
import readFile from 'fs-readfile-promise'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'

import App from '../shared/App'
import Error from '../shared/comps/Error'
import NoMatch from '../shared/comps/NoMatch'
import Routes from './routes'

const generateHtml = url => data => {
  const appString = renderToString(
    <StaticRouter context={{}} location={url}>
      <App sounds={data} />
    </StaticRouter>
  )
  const dataString = JSON.stringify(data)
  const html = readFile('./dist/index.html', 'utf-8')
    .then(s => s.replace('{{APP}}', appString))
    .then(s => s.replace('{{DATA}}', `window.__sounds__ = ${dataString}`))
  return html
}

export default (req, res, next) => {
  const notEmpty = xs => xs.length > 0
  const matchUrl = url => route => matchPath(url, { path: route, exact: true })
  const validUrl = notEmpty(Routes.filter(matchUrl(req.url)))

  if (validUrl) {
    readFile('./db/tracks.json', 'utf-8')
      .then(JSON.parse)
      .then(generateHtml(req.url))
      .then(html => res.status(200).send(html))
      .catch(() => res.status(500).send(renderToString(<Error />)))
  } else {
    res.status(404).send(renderToString(<NoMatch />))
  }
}
