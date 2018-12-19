const nextServerless = require('next-serverless/handler')

const { app, server } = require('./server')

module.exports.handler = nextServerless(app, server, () => {
    server.listen(3000, () => {
        console.log('> Ready on http://localhost:3000?')
    })
})
