// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
    },
    {
        type: 'input',
        message: "Please describe your application.",
        name: 'description',
        default: 'Description',
    },
    {
        type: 'input',
        message: "Install instructions?",
        name: 'install',
        default: 'Installation',
    },
    {
        type: 'input',
        message: "How does a user use the application?",
        name: 'use',
        default: 'Usage Instructions',
    },
    {
        type: 'input',
        message: "Who was involved with making the project?",
        name: 'credits',
        default: 'Credits',
    },
    {
        type: 'list',
        message: "What license was used?",
        choices: ['Apache', 'GNU', 'MIT', 'N/A'],
        name: 'license',
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README.md successfully created.")
    });
}



// TODO: Create a function to initialize app
async function init() {
    try {

        const responses = await inquirer.prompt(questions);
        console.log("Your responses: ", responses);

        console.log("Creating your README.")
        const markdown = generateMarkdown(responses);
        console.log(markdown);

        writeToFile('README.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();

