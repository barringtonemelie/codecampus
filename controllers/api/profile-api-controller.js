const userLearningPathModel = require("../../models/mongodb/user-learning-path-model");

module.exports = {
    completeStep: async (req, res) => { 

        
        const { stepId, pathId, done } = req.body;
        const userId = req.user.userId; 

        const userLearningPath = await userLearningPathModel.findOne({ userId });

        const path = userLearningPath.learningPaths.find(x => x._id == pathId);

        const step = path.learningPath.steps.find(x => x._id == stepId);

        step.done = done;

        await userLearningPath.save();

        res.sendStatus(200);
    }

}