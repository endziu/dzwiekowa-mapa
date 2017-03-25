import React from 'react'
import App from '../shared/App'
import NoMatch from '../shared/comps/NoMatch'
import Error from '../shared/comps/Error'
import { StaticRouter as Router, matchPath } from 'react-router'
import render from './render'
import readFile from 'fs-readfile-promise'

export default (req, res) => {
  const appWithRouter = (data) => <Router context={{}} location={req.url}>
    <App sounds={data} />
  </Router>

  const matchHome = matchPath(req.url, '/', { exact:true }).isExact
  const matchSound = matchPath(req.url, '/rec/:id', { exact:false })
  
  if (matchHome || matchSound) {
    readFile('./src/shared/assets/tracks.json')
      .then(file => JSON.parse(file.toString()))
      .then(sounds => {
        res.status(200).send(render(appWithRouter(sounds), sounds))
      }).catch(err => {
        console.error(err)
        res.status(500).send(render(<Error />))
      })
  } else {
    res.status(404).send(render(<NoMatch />))
    return
  }
}
