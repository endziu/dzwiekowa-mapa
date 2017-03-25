import React from 'react'
import App from '../shared/App'
import NoMatch from '../shared/comps/NoMatch'
import Error from '../shared/comps/Error'
import { StaticRouter as Router, matchPath } from 'react-router'
import template from './template'
import readFile from 'fs-readfile-promise'

export default (req, res) => {

  const matchHome = matchPath(req.url, { path: '/', exact: true })
  const matchSound = matchPath(req.url, { path: '/rec/:id' })

  const appWithRouter = (data) =>
    <Router context={{}} location={req.url}>
      <App sounds={data} />
    </Router>

  if (matchHome || matchSound) {
    readFile('./src/shared/assets/tracks.json')
      .then(file => JSON.parse(file.toString()))
      .then(sounds => {
        res.status(200).send(template(appWithRouter, sounds))
      }).catch(err => {
        console.error(err)
        res.status(500).send(template(<Error message={err}/>))
      })
  } else {
    res.status(404).send(template(<NoMatch />))
    return
  }
  
}
