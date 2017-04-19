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
  const matchHome = matchPath(req.url, { path: '/', exact: true })
  const matchSound = matchPath(req.url, { path: '/:id', exact: true })
  const matchInfo = matchPath(req.url, { path: '/:id/info', exact: true })
  const matchMap = matchPath(req.url, { path: '/:id/map', exact: true })
  const matchPhotos = matchPath(req.url, { path: '/:id/photos', exact: true })

  if (matchHome || matchSound || matchInfo || matchMap || matchPhotos) {
    
    const routerApp = (data) => <StaticRouter context={{}} location={req.url}>
      <App sounds={data} />
    </StaticRouter>

    return readFile('./src/shared/assets/tracks.json', 'utf-8')
      .then(file => JSON.parse(file))
      .then(data => {
        return readFile('./dist/index.html', 'utf-8')
          .then((s) => s.replace('{{APP}}', renderToString(routerApp(data))))
          .then((s) => s.replace('{{DATA}}', `window.__sounds__ = ${JSON.stringify(data)}`))
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
