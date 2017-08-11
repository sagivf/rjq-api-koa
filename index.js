const Koa = require('koa')
const Router = require('koa-router')
const mount = require('koa-mount')
const rjqApi = require('rjq-api')

module.exports = function ({path = '/rjq-api', connection, queues} = {}) {
  const app = new Koa()
  const router = new Router()
  const api = rjqApi({
    queues, connection
  })
  router
    .get('/', function (ctx) {
      ctx.body = 'v1.0.0'
    })
    .get('/queues', async function (ctx) {
      ctx.body = await api.queues()
    })
    .get('/queues/:name', async function (ctx) {
      ctx.body = await api.queue(ctx.params.name)
    })

  app.use(router.routes())
    .use(router.allowedMethods())

  return mount(path, app)
}
