const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  // We're connected
  console.log('Connected to the database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Now listening for request on port 4000');
});
