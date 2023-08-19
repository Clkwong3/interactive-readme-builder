// Modules
const inquirer = require("inquirer");
const fs = require("fs");

// Script
const generateMarkDown = require("./lib/generateMarkDown.js");
const questions = require("./lib/questions.js");

console.log("ReadMe Generator is running");

// Write README content to a file
function writeReadMeToFile(filePath, readmeContent) {
  fs.writeFile(filePath, readmeContent, (err) => {
    if (err) {
      console.error("Error while creating README.md:", err);
    } else {
      console.log("README.md created successfully!");
    }
  });
}

// Initialize the process
function init() {
  // Ask and gather initial questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate README content based on user answers
      const readmeContent = generateMarkDown(answers);

      // Write the generated README content to the file
      writeReadMeToFile("sample/README.md", readmeContent);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// Start the prompts
init();
