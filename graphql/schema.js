const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');
const learningPathType = require('./types/learning-path-type');
const LearningPathModel = require('../models/mongodb/learning-path-model');


const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        learningPaths: {
            type: new GraphQLList(learningPathType),
            resolve: async () => { 
                const learningPaths = await LearningPathModel.find();

                return learningPaths; 
            }
        },
        learningPath: {
            type: learningPathType,
            args: {
                id: { type: GraphQLString }
            },
            resolve: async (parent, {id}) => { 
                const learningPath = await LearningPathModel.findById(id);

                return learningPath;
            }
        },
    }
});


module.exports = new GraphQLSchema({ query });