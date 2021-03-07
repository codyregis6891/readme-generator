const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            name: 'title',
            message: 'What would you like to title your README?',
            type: 'input',
        },
        {
            name: 'description',
            message: 'Add a description of your project.',
            type: 'input',
        },
        {
            name: 'install',
            message: 'Add any installation instructions.',
            type: 'input',
        },
        {
            name: 'usage',
            message: 'Add usage information.',
            type: 'input',
        },
        {
            name: 'contribution',
            message: 'Add contribution guidelines.',
            type: 'input',
        },
        {
            name: 'test',
            message: 'Add test instructions.',
            type: 'input',
        },
        {
            name: 'license',
            message: 'Would you like to add a license for your application?',
            type: 'list',
            choices: ['None', 'Apache', 'MIT', 'BSD'],
        },
        {
            name: 'github',
            message: 'Enter your Github username.',
            type: 'input',
        },
        {
            name: 'email',
            message: 'Add your email address.',
            type: 'input',
        }
    ])
    .then((response) => {
        const readme = 
    })