const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const resolvers= require('./resolvers')
const schema = require('./schema')
const app = express()
const port = 3000

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {console.clear();console.log(`Example app listening on port ${port}!`)})