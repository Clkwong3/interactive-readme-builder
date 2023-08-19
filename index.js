// Modules
const inquirer = require("inquirer");
const fs = require("fs");

// Script
const generateMarkDown = require("./generateMarkDown");

console.log("ReadMe Generator is running");

// The questions to gather user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Why was this project developed? What is its main purpose?",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What do users need to have installed or available to use this application? This could include things like API, Dependencies, or Packages.",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the instructions for using this application?",
  },
  {
    type: "input",
    name: "test",
    message: "How can users test this application (instructions or commands)?",
  },
  {
    type: "list",
    name: "license",
    message: "Select the license being used for this project.",
    choices: [
      "Apache 2.0",
      "GNU GPL 3.0",
      "MIT",
      "BSD 2",
      "BSD 3",
      "Boost 1.0",
      "CCZ 1.0",
      "EPL 2",
      "GNU AGPL 3.0",
      "GNU LGPL 2.1",
      "Mozilla 2.0",
      "Unlicense",
      "N/A",
    ],
  },
  {
    // ask if user had contributors
    type: "confirm",
    name: "includeCredits",
    message: "Any contributors to this project?",
    default: true,
  },
  {
    type: "input",
    name: "contributor",
    message:
      "Enter contributor name and link (e.g., 'John Doe: [GitHub](https://github.com/johndoe)')",
    when: (answers) => answers.includeCredits, // should only appear when users type 'y'
    filter: (input) =>
      input
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line !== ""),
  },
  {
    // ask if user wants a table of contents
    type: "confirm",
    name: "includeContactInfo",
    message: "Want to add contact information?",
    default: true,
  },
  {
    type: "input",
    name: "github",
    message: "GitHub Account Name:",
    when: (answers) => answers.includeContactInfo, // should only appear when users type 'y'
  },
  {
    type: "input",
    name: "email",
    message: "Email Address:",
    when: (answers) => answers.includeContactInfo, // should only appear when users type 'y'
  },
  {
    // ask if user wants a table of contents
    type: "confirm",
    name: "includeTableOfContents",
    message: "Want to include a table of contents?",
    default: true,
  },
];

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
