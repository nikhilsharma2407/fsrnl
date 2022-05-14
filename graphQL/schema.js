const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type User{
    id:ID
    username:String,
    name:String,
    friendList:[Friend]
  }

  type Friend{
    firstName:String
    id:String
    lastName:String
    picture:String
    title:String
  }
  
  input FriendInput {
    firstName:String
    id:String
    lastName:String
    picture:String
    title:String
  }

  input UserInput{
    username:String!,
    name:String,
    friendList:[FriendInput]
  }

  type Query {
    getUser(username:String): User
  }

  type Mutation {
    createUser(input:UserInput):User
  }
`)


module.exports = schema;