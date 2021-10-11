import "reflect-metadata"
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core/dist/plugin/drainHttpServer";
import express from 'express'
import http from 'http'

import UserResolver from './resolvers/UserResolver'
import { buildSchema } from "type-graphql";

async function startApolloServer(resolvers: any) {
    const app = express()
    const httpServer = http.createServer(app)
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers,
            validate: false
        }),
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]

    })
    await server.start()
    server.applyMiddleware({ app })
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve))
    console.log(`Server started at localhost:4000${server.graphqlPath}`)
}

startApolloServer([UserResolver])