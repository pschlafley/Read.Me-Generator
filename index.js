// get inquirer
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')
const path = require('path');


// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: "title",
            message: 'What is the title of your application? (Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for you application!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your application. (Required)',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a Description for you application!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your application? Provide a step-by-step description of how to get the development environment running. (Required)',
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log('Please provide steps for how to install your application!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Describe in detail how to use your application. Provide instructions and examples for use. Include screenshots as needed. (Required)',
            validate: usageInput => {
                if(usageInput) {
                    return true; 
                } else {
                    console.log('Please provide instructions for how to use the application!');
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmScreenshot', 
            message: 'Do you want to add any screenshots of your application?',
            default: false
        },

        {
            type: 'input',
            name: 'screenshotsAlt',
            message: 'Enter alt text for your screenshot',
            when: ({confirmScreenshot}) => {
                if(!confirmScreenshot) {
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'screenshotFilePath',
            message: 'Enter the relative file path to your screenshot',
            when: ({confirmScreenshot}) => {
                if(!confirmScreenshot) {
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'confirm',
            name: 'creditsTitle',
            message: 'Did you work with any collaborators on this?',
            default: false
        },

        {
            type: 'input',
            name: 'Credits',
            message: 'Include links to your collaborators github profiles',
            when: ({creditsTitle}) => {
                if(creditsTitle) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'license',
            message: 'What Licenses do you have for your application?',
            choices: ['Apache Licenses 2.0', 'GNU GPLv3', 'MIT', 'ISC', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unilicense']
        },
    ]);
};



// function to write README file
function writeToFile(fileName, data) {
    // creates a readMe file
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    // get questions to prompt the user for input
    questions()
    // after the user answers the questions, get their answers and write it to the txt.md file
    .then(answers => {
        writeToFile('txt.md', generateMarkdown({...answers}))
    })
}

// function call to initialize program
init();