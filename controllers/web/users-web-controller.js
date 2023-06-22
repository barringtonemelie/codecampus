const User = require("../../models/mysql/user-model");
const userLearningPathsModel = require("../../models/mongodb/user-learning-path-model");

module.exports = {
    home: async (req, res) => { 
        let user = await User.findOne({ where: { username: req.params.username } });

        if (!user) {
            res.render('error', {message: "User not found"})
        } else {
            user = user.dataValues;
            
            const userLearningPaths = await userLearningPathsModel.findOne({ userId: user.userId }).lean();

            const learningPaths = userLearningPaths.learningPaths;
            
            console.log(learningPaths);
            res.render("users/singleUser", { title: `${user.username}'s Profile`, user, learningPaths });
        }

    }
};
