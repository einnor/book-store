const graphql = reauire('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLString },
      },
      resolve (parent, args) {
        // Code to get data from DB / Other source
      }
    },
  },
});

module.exports = GraphQLSchema({
  query: RootQuery,
});
