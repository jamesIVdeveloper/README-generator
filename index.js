const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    {
      type: "checkbox",
      name: "license",
      message: "Choose a license",
      choices: ["MIT", "Apache", "GPL"],
    },
    {
      type: "input",
      name: "githubName",
      message: "Please provide your GitHub username",
    },
    {
      type: "input",
      name: "githubLink",
      message: "Please provide your github account link",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email address",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser().then((data) => {
    console.log(data);
    const pageREADME = generateMarkdown(data);

    writeToFile("./dist/README.md", pageREADME);
  });
}

// Function call to initialize app
init();
