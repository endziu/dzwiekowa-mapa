import { renderToString } from 'react-dom/server'
import React from 'react'

export default (appWithRouterAndData, data) => `
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
        <div id="app">${renderToString(appWithRouterAndData)}</div>
        ${data ? `
            <script>window.__sounds__ = ${JSON.stringify(data)};</script>
            <script src="/static/client.js"></script>
        ` : ''}
    </body>
</html>
`