import express from 'express'
import dotenv from 'dotenv'
import createApolloServer from '@/graphql/server'

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });


const app = express()

async function startServer () {
  const server = await createApolloServer(app);

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  })
}

startServer()