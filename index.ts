import * as nextServerless from 'next-serverless/handler'

import { app, server } from './server'

export const handler = nextServerless(app, server, () => {
    server.listen(3000, () => {
        console.log('> Ready on http://localhost:3000')
    })
})
