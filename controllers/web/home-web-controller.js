const LearningPath = require('./../../models/learning-path-model'); 

module.exports = {
    home: async (req, res) => {
        const learningPaths = await LearningPath.find().lean();

        if (learningPaths.length === 0) {

            const learningPath = new LearningPath({
                title: 'Learn Python Basics',
                description: 'A beginner-friendly Python tutorial',
                estimatedHours: 8,
                steps: [
                    "Watch video 1: URL",
                    "Do your first assignment",
                    "Create your first project",
                ]
            });

            const learningPath2 = new LearningPath({
                title: 'Continue learning Python Basics',
                description: 'Your next step after the Python basics: Python continued',
                estimatedHours: 16,
                steps: [
                    "Watch video 1: URL",
                    "Do your first assignment",
                    "Create your first project",
                ]
            });

            learningPath.save(); 
            learningPath2.save(); 

        }

        res.render('index', { title: 'Codecampus Start', learningPaths });
    }

}