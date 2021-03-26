// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer
    .prompt([

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
            message: 'provide instructions and examples for use',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What license do you want to use',
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


    ])

    // console.log("questions")


    .then((response) => {
        console.log(response);

        const filename = README.md;

        fs.appendFile(filename, JSON.stringify(response, null, "\t"), (err) =>
            err ? console.error(err) : console.log("created file successfully")
        )
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.appendFile(README.md, JSON.stringify(response, null, "\t"), (err) =>
//         err ? console.error(err) : console.log("created file successfully")
//     )
// }
// console.log(writeToFile)
// // TODO: Create a function to initialize app
// function init() {
//     generateMarkdown(data)
//     writeToFile()
// }
// // Function call to initialize app
// init();
