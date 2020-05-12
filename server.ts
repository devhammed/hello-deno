import { listenAndServe } from 'https://deno.land/std/http/server.ts'

const ENV = Deno.env.toObject()
const HOST = ENV.HOST ?? 'localhost'
const PORT = parseInt(ENV.PORT ?? 3000)

listenAndServe({ hostname: HOST, port: PORT }, (req) => {
  req.respond({ body: 'Hello World' })
})

console.log(`Server running on http://${HOST}:${PORT}`)
