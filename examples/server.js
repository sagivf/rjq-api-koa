const Koa = require('koa')
const rjqApiKoa = require('../index')
const cors = require('@koa/cors');

const app = new Koa()

const { PORT = 4000 } = process.env

app
  .use(cors())
  .use(rjqApiKoa())
  .listen(PORT)

console.log(`Running api at: http://localhost:${PORT}`)
