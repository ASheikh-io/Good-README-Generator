const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [{
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is your project called?',
    },
    {
        type: 'list',
        name: 'lisence',
        message: 'What lisence would you like to use for your project?',
        choices: ["MIT", "Apache", "GLP"],
    }

];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
      // Use user feedback for... whatever!!

      var readMeOptions = generateMarkdown(answers);
      // call the writetToFile function here
      writeToFile("README.md", readMeOptions);
    });
}

// function call to initialize program
init();