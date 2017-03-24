import { renderToString } from 'react-dom/server'
import React from 'react'

export default (renderMe, sounds) => `<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="mobile-web-app-capable" content="yes">
        <title>dzwiekowamapa.pl</title>
    </head>
    <body>
        <div id="app">${renderToString(renderMe)}</div>
        ${sounds ? `
            <script>window.__sounds__ = ${JSON.stringify(sounds)};</script>
            <script src="/static/client.js"></script>
        ` : ''}
    </body>
</html>`
