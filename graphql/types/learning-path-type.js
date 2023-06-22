const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const stepType = require('./step-type');

const learningPathType = new GraphQLObjectType({
    name: 'LearningPath',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        estimatedHours: { type: GraphQLInt },
        steps: { type: new GraphQLList(stepType) },
    }),
});


module.exports = learningPathType;