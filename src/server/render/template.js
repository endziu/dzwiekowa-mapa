import { renderToString } from 'react-dom/server'
import readFile from 'fs-readfile-promise'

export default (app, data) => {
  const appString = renderToString(app(data))
  const dataString = `window.__sounds__ = ${JSON.stringify(data)}`

const prepareHtml = () => {
  readFile('./src/index.html', 'utf-8')
    .then((s) => s.replace('{{DATA}}', dataString))
    .then((s) => s.replace('{{APP}}', appString))
}

  return `
    <!DOCTYPE html>
    <html lang="pl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="/static/style.css" />
        <title>dzwiekowamapa.pl</title>
      </head>
      <body>
        <div id="app">${appString}</div>
        ${data
            ? `<script>${dataString}</script>
              <script src="/static/client.js"></script>`
            : ''}
      </body>
    </html>
  `
}
