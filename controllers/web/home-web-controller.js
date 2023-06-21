const LearningPath = require('../../models/mongodb/learning-path-model'); 
const seedPaths = require('./seed-paths');

module.exports = {
    home: async (req, res) => {
        const learningPaths = await LearningPath.find().lean();

        // seedPaths.seedPaths();

        res.render('home', { title: 'Codecampus Start', learningPaths });
    }

}