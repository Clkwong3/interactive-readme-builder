// Modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require("./lib/generateMarkDown"); // Generating README content
const questions = require("./lib/questions"); // List of questions

console.log("ReadMe Generator is running");

// Initialize the process
function init() {
  // Ask and gather questions using Inquirer
  inquirer
    .prompt(questions) // Prompt the user with the questions defined in questions.js
    .then((answers) => {
      // Generate README content based on user answers
      const readmeContent = generateReadMe(answers);

      // Write the generated README content to the file
      writeReadMeToFile("project/README.md", readmeContent);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

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

// Start the prompts by calling the init() function
init();
