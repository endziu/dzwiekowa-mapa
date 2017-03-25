import express from 'express'
import favicon from 'express-favicon'
import compression from 'compression'
import sourceMapSupport from 'source-map-support'
import renderApp from './render'
import api from './api'

const app = express()
sourceMapSupport.install()

app.use(compression({filter: (req) => req.headers['x-no-compression'] ? true : false}))
app.use(favicon(__dirname + '/src/shared/assets/favicon.png'))
app.use('/static', express.static('./dist'))
app.use('/api', api)
app.use(['/', '/rec/:id'], renderApp)

app.listen(3000, () => console.log('Demo app listening on port 3000'))
