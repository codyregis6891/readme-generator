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
            choices: ['None', 'Apache', 'MIT', 'GPL', 'ISC'],
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
        const readme = generateREADME(response);
        fs.writeFile('exampleREADME.md', readme, (err) => 
        err ? console.log(err) : console.log('Success!'));
    });

const generateLicenseBadge = (license) => {
    let licenseBadge;
    switch(license) {
        case "Apache":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            return licenseBadge;
        case "MIT":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            return licenseBadge;
        case "GPL":
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            return licenseBadge;
        case "ISC":
            licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
            return licenseBadge;
        default:
            licenseBadge = "";
            return licenseBadge;
    };
};

const generateREADME = (response) => {

    const badge = generateLicenseBadge(response.license);

    // console.log(badge);

    const textLayout = 
    `# ${response.title}

${badge}


## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)


## Description

${response.description}


## Installation

${response.install}


## Usage

${response.usage}


## License 

This application has the following License: ${response.license}


## Contributing

${response.contribution}


## Tests

${response.test}


## Questions

[Check out my Github profile!](https://www.github.com/${response.github})

Have any further questions? Don't hesitate to contact me via email:
* ${response.email}`;

    return textLayout;
};