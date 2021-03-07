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
            
        }
    ])