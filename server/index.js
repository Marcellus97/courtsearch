import Fastify from 'fastify'

const app = Fastify({ logger: true })

app.get('/api/health', async () => ({ ok: true }))

const port = process.env.PORT ? Number(process.env.PORT) : 3000
const host = process.env.HOST ?? '0.0.0.0'

const start = async () => {
  try {
    await app.listen({ port, host })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
