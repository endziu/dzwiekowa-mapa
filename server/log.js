import morgan from 'morgan'

const log = morgan((tokens, req, res) =>
  [ tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res)
  ].join(' '))

export default log
