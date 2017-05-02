import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

import api from './api'
import routes from './routes'
import renderApp from './render'

const PORT = process.env.PORT || 3000

const server = express()
server.use(helmet())
server.use(compression())
server.use(morgan(':date[iso] | :status | :method | :url | :response-time ms'))
server.use('/api', api)
server.use('/static', express.static('./dist'))
server.use('/robots.txt', express.static('dist/robots.txt'))
server.use('/favicon.ico', express.static('public/favicon.ico'))
server.use(routes, renderApp)
server.listen(PORT, () => console.log(`dzwiekowa-mapa is listening on port ${PORT}`))
