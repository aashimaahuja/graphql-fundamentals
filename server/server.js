import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFile } from 'node:fs/promises';
import { resolvers } from './resolvers.js';

const typeDefs = await readFile('./schema.graphql', 'utf-8');

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server started on ${url}`);
