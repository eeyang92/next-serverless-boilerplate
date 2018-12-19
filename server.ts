import * as express from 'express'
import * as path from 'path'
import * as next from 'next'
import * as pathMatch from 'path-match'
import { parse } from 'url'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = express()
const route = pathMatch()

server.use('/_next', express.static(path.join(__dirname, '.next')))
server.get('/', (req, res) => app.render(req, res, '/'))
server.get('/dogs', (req, res) => app.render(req, res, '/dogs'))
server.get('/dogs/:breed', (req, res) => {
    const params = route('/dogs/:breed')(parse(req.url).pathname)

    return app.render(req, res, '/dogs/_breed', params)
})
server.get('*', (req, res) => handle(req, res))

export { app, server }
