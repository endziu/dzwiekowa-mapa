import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import favicon from 'express-favicon'
import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

import api from './api'
import log from './log'
import routes from './routes'
import renderApp from './render'

const server = express()
server.use(helmet())
server.use(compression())
server.use(favicon(__dirname + './src/shared/assets/favicon.ico'))
server.use(log)
server.use('/static', express.static('./dist'))
server.use('/api', api)
server.use(routes, renderApp)
server.listen(process.env.PORT, () => console.log('dzwiekowa-mapa is listening on port 3000'))
