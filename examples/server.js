const Koa = require('koa')
const rjqApiKoa = require('../index')

const app = new Koa()

const { PORT = 4000 } = process.env

app
  .use(rjqApiKoa('/rjq-api', {
    queues: ['Mathematics', 'RegistrationEmail'],
    db: 'JobQueue'
  }))
  .listen(PORT)

console.log(`Running api at: http://localhost:${PORT}`)
