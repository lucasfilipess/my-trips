import { GraphQLClient } from 'graphql-request'

const endpoint: string = process.env.GRAPHQL_SERVER ?? ''

const client = new GraphQLClient(endpoint, {})

export default client
