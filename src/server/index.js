import express from 'express'
import helmet from 'helmet'
import favicon from 'express-favicon'
import compression from 'compression'
import log from './log'
import api from './api'
import renderApp from './render'
import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

const app = express()
app.use(helmet())
app.use(compression())
app.use(log)
app.use(favicon(__dirname + './src/shared/assets/favicon.png'))
app.use('/static', express.static('./dist'))
app.use('/api', api)
app.use(['/', '/:id', '/:id/info', '/:id/map', '/:id/photos'], renderApp)
app.listen(3000, () => console.log('dzwiekowa-mapa is listening on port 3000'))
