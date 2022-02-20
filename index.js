var inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the Title of your Project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter Project Title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide a description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Provide installation instructions.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide installation instructions");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage information",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide usage information");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributions",
      message: "Please provide contribution guidlines",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide contribution guidelines");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide test instructions",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide test instructions");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
