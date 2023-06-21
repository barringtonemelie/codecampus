const learningPathModel = require('../../models/mongodb/learning-path-model');

module.exports = {
    seedPaths: async () => {
        const paths = [
            {
                title: 'Learn Node.js',
                description: 'Learn Node.js by building a web app',
                estimatedHours: 10,
                steps: [
                    {
                        title: 'Introduction to Node.js',
                        done: false,
                        description: 'Introduction to Node.js',
                        link: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
                    },
                    {
                        title: 'Node.js Tutorial for Beginners: Learn Node in 1 Hour',
                        done: false,
                        description: 'Node.js Tutorial for Beginners: Learn Node in 1 Hour',
                        link: 'https://www.youtube.com/watch?v=RLtyhwFtXQA',
                    },
                    {
                        title: 'Node.js Crash Course',
                        done: false,
                        description: 'Node.js Crash Course',
                        link: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
                    },
                    {
                        title: 'Node.js Tutorial - Node.js for Beginners',
                        done: false,
                        description: 'Node.js Tutorial - Node.js for Beginners',
                        link: 'https://www.youtube.com/watch?v=U8XF6AFGqlc',
                    }
                ],
            },
            {
                title: 'Learn React',
                description: 'Learn React by building a web app',
                estimatedHours: 10,
                steps: [
                    {
                        title: 'Introduction to React',
                        done: false,
                        description: 'Introduction to React',
                        link: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
                    },
                    {
                        title: 'React Tutorial for Beginners: Learn React in 1 Hour',
                        done: false,
                        description: 'React Tutorial for Beginners: Learn React in 1 Hour',
                        link: 'https://www.youtube.com/watch?v=DLX62G4lc44',
                    },
                    {
                        title: 'React Crash Course',
                        done: false,
                        description: 'React Crash Course',
                        link: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
                    },
                    {
                        title: 'React Tutorial - Learn React - React Crash Course [2019]',
                        done: false,
                        description: 'React Tutorial - Learn React - React Crash Course [2019]',
                        link: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
                    }
                ],
            },
        ];

        // await learningPathModel.deleteMany({});

        await learningPathModel.create(paths);

        console.log('Paths seeded');
    }
};