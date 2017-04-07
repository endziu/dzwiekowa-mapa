import express from 'express'
import favicon from 'express-favicon'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import api from './api'
import renderApp from './render'
import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

const log = morgan((tokens, req, res) =>
  [ tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' '))

const app = express()
app.use(helmet())
app.use(compression())
app.use(log)
app.use(favicon(__dirname + './src/shared/assets/favicon.png'))
app.use('/static', express.static('./dist'))
app.use('/api', api)
app.use(['/', '/rec/:id', '/info/:id'], renderApp)
app.listen(3000, () => console.log('dzwiekowa-mapa is listening on port 3000'))
