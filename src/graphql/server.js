import { ApolloServer } from 'apollo-server-express'
import typeDefs from'./typeDefs'
import resolvers from './resolvers'
// Create Apollo Server instance
const createApolloServer = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // TODOS: Add context (e.g., authenticated user, request info)
      // Example: const user = await authenticateUser(req.headers.authorization);
      return { req }; // Pass request to resolvers (for auth, etc.)
    },
    introspection: process.env.NODE_ENV !== 'production', // Enable GraphQL Playground in dev
  });

  await server.start();
  server.applyMiddleware({ app });

  console.log(`Apollo Server running at ${server.graphqlPath}`);
  return server;
};

export default createApolloServer;