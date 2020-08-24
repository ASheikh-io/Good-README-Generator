const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = [{
    type: "input",
    name: "Title",
    message: "what is the title of for your readme?"
  },
  {
    type: "input",
    name: "Description",
    message: "Enter a description for your readme."
  },
  {
    type: "input",
    name: "Installation",
    message: "What are the instructions for installing for your readme?"
  },
  {
    type: "input",
    name: "Usage",
    message: "type in the usage for this readme"
  },
  {
    type: "checkbox",
    name: "License",
    message: "choose a license for this readme",
    choices: [
      'The MIT License',
      'Mozilla Public License 2.0',
      'GNU AGPL v3',
    ]
  },
  {
    type: "input",
    name: "Contributions",
    message: "Who has contributed to this readme?"
  },
  {
    type: "input",
    name: "Tests",
    message: "What tests were executed on this readme?"
  },
  {
    type: "input",
    name: "Questions",
    message: "what is the developers name?"
  },
  {
    type: "input",
    name: "Username",
    message: "What is your github username?"
  },
  {
    type: "input",
    name: "Email",
    message: "what is your email?"
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

      var readMeOptions = generateMarkdown(answers);
      // call the writetToFile function here
      writeToFile("README.md", readMeOptions);
    });
}

// function call to initialize program
init();