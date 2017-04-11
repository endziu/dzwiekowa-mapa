import morgan from 'morgan'

const log = morgan((tokens, req, res) =>
  [ tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' '))

  export default log