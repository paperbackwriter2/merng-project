const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = gql`
    type Query{
        sayHi: String!
    }
`

// every query or mutation must have a corresponding resolver
const resolvers = {
    // all queries will be grouped inside the Query object
    Query: {
        sayHi: () => 'Hello there! You just love learning!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Apollo server creates an Express server
server.listen({ port:5000 })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })