// get inquirer
const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: "projectTitle",
            message: 'What is the name of you project? (Required)',
            validate: projectTitleInput => {
                if(projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for you project!');
                    return false;
                }
            }
        },
        {

        },
    ]);
};
questions()
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
