const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');

const stepType = new GraphQLObjectType({
    name: 'Step',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        done: { type: GraphQLBoolean },
        description: { type: GraphQLString },
        link: { type: GraphQLString },
    }),
});


module.exports = stepType;