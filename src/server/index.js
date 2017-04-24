import express from 'express'
import helmet from 'helmet'
import favicon from 'express-favicon'
import compression from 'compression'
import log from './log'
import api from './api'
import renderApp from './render'
import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

const server = express()
server.use(helmet())
server.use(compression())
server.use(favicon(__dirname + './src/shared/assets/favicon.png'))
server.use(log)
server.use('/static', express.static('./dist'))
server.use('/api', api)
server.use(['/', '/:id', '/:id/info', '/:id/map', '/:id/photos'], renderApp)
server.listen(3000, () => console.log('dzwiekowa-mapa is listening on port 3000'))
