import express from 'express'
import favicon from 'express-favicon'
import sourceMapSupport from 'source-map-support'
import ssr from './ssr.js'

const app = express()
sourceMapSupport.install()

app.use(favicon(__dirname + '/src/shared/assets/favicon.png'))
app.use('/api', (req, res) => res.status(200).send({'bibi': 'boo'}))
app.use('/static', express.static('./dist'))
app.use(['/', '/rec/:id'], ssr)

app.listen(3000, () => console.log('Demo app listening on port 3000'))
