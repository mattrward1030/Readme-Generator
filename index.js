// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'write a short description of your project',
        name: "description",

    },
    {
        type: 'input',
        message: 'How to install your application?',
        name: "installation",
    },
    {
        type: 'input',
        message: 'provide instructions and examples for use,
        name: "usage",
    },
    {
        type: 'list',
        message: 'What license do you want to use'
        name: 'license',
        choices: ["MIT", "Mozilla Public License 2.0", "Apache 2.0", "Unlicense"]
    },
    {
        type: 'input',
        message: 'Names of other contributors',
        name: "contributors",
    },

    {
        type: 'input',
        message: 'instructions on how to test application?',
        name: "tests",
    },
    {
        type: 'input',
        message: 'Enter email that you can be reached for questions',
        name: "email",
    },


]

// TODO: Create a function to write README file
const writeToFile(fileName, data) => { }

// TODO: Create a function to initialize app
const init() => { }

// Function call to initialize app
init();
