import { GraphQLClient } from 'graphql-request'

const endpoint: string = process.env.GRAPHQL_HOST ?? ''

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
