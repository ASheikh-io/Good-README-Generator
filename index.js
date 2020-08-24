const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = [{
        type: "input",
        message: "What is your name?",
        name: "Name"
    },
    {
        type: "input",
        message: "What is your Github user name?",
        name: "userName"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your readme."
    },
    {
        type: "list",
        name: "installation",
        message: "Command to install: ",
        choices: ["npm i"],
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "This application is used to:"
    },
    {
        type: "checkbox",
        name: "license",
        message: "choose a license for this readme",
        choices: [
            'The MIT License',
            'Apache 2.0',
            'GPL v3',
            'GPF v3',
            'BSD 3',
            'Mozilla Public License 2.0',
        ]
    },
    {
        type: "input",
        name: "contributions",
        message: "How can a user contribute to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests were executed on this readme?"
    },
    {
        type: "input",
        name: "questions",
        message: "What is the developer's name?"
    },
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// function to initialize program
async function init() {
    inquirer
        .prompt(questions)
        .then(answers => {

            var readMeOptions = generateMarkdown(answers);
            // call the writetToFile function here
            writeToFile("./Output/README.md", readMeOptions);
            console.log("successful");
        });
}

// function call to initialize program
init();