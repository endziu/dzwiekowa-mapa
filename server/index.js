import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

import api from './api'
import routes from './routes'
import renderApp from './render'

morgan.token('ip', (req) => req.headers['x-forwarded-for'])

const server = express()
server.use(helmet())
server.use(compression())
server.use('/static', express.static('./dist'))
server.use('/api', api)
server.use('/favicon.ico', express.static('client/public/favicon.ico'))
server.use('/robots.txt', express.static('dist/robots.txt'))
server.use(morgan(':ip | :date[iso] | :status | :method | :url | :response-time ms'))
server.use(routes, renderApp)
server.listen(16661, () => console.log(`dzwiekowa-mapa is listening on port 16661`))
