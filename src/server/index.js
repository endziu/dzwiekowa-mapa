import express from 'express'
import React from 'react'
import App from '../shared/App'
import NoMatch from '../shared/comps/NoMatch'
import Error from '../shared/comps/Error'
import { StaticRouter as Router, matchPath } from 'react-router'
import sourceMapSupport from 'source-map-support'
import render from './render'
import readFile from 'fs-readfile-promise'

const routes = [
  '/',
  '/rec/:id'
]

sourceMapSupport.install()

const app = express()
app.use('/static', express.static('./dist'))

app.get('/api', (req,res) => {
  res.status(200).send({"bibi":"boo"})
})

app.get('*', (req, res) => {
  const appWithRouter = (data) => <Router context={{}} location={req.url}>
    <App sounds={data} />
  </Router>

  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: false }) || acc, null)
  if (!match) {
    res.status(404).send(render(<NoMatch />))
    return
  }
  readFile('./src/shared/assets/tracks.json')
    .then( file => JSON.parse(file.toString()) )
    .then( sounds => {
      res.status(200).send(render(appWithRouter(sounds), sounds))
    }).catch(err => {
      console.error(err)
      res.status(500).send(render(<Error />))
    })
})

app.listen(3000, () => console.log('Demo app listening on port 3000'))
