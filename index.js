// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util")
const generateReadMe = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const writeFileAsync = util.promisify(fs.writeFile)


const questions = [

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to enter a title!")
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'write a short description of your project',
        name: "description",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Need to have a description!")
            }
            return true;
        }

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
        type: 'checkbox',
        message: 'What feautures does your application have?',
        name: 'features',
        choices: ["Has a index.html", " Has a CSS file", " Has a JavaScript file", " Uses jQuery", " Node.js installed", " Front end Only", " Back end only", " Front and back end application"]
    },

    {
        type: 'input',
        message: 'Enter anyone who contributed to this project',
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
    {
        type: 'input',
        message: 'Enter github username ',
        name: "username",
    },


]

const askUser = () => {
    return inquirer.prompt(questions);
}
const writeToFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
const init = async () => {
    try {
        console.log("Answer the following questions to generate README");

        const answers = await askUser();

        const fileContent = generateReadMe(answers);

        await writeToFile("./demo/README.md", fileContent);

        console.log("read me created")
    }
    catch (err) {
        console.error("Error, file not created!");
        console.log(err);
    }
}
// Function call to initialize app
init();
