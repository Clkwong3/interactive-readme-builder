// Modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// Script
const generateReadMe = require("./generateReadMe");

console.log("ReadMe Generator is running");

// The questions
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
    // ask if user wants a table of contents
    type: "confirm",
    name: "includeTableOfContents",
    message: "Want to include a table of contents?",
    default: true,
  },
  {
    type: "input",
    name: "installation",
    message:
      "What do users need to have installed or available to use this application? This could include things like API, Dependencies, or  Packages.",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the instructions for using this application?",
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
    type: "confirm",
    name: "includeCredits",
    message: "Any contributors to this project?",
    default: true,
  },
  {
    type: "input",
    name: "contributors",
    message:
      "Enter contributor names and links (e.g., 'John Doe: [GitHub](https://github.com/johndoe)')",
    when: (answers) => answers.includeCredits, // should only appear when users type 'y'
  },
  {
    type: "input",
    name: "test",
    message: "How can users test this application (instructions or commands)?",
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
];

function init() {
  // Ask and gather
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateReadMe(answers);

      // Use path.join to specify where the README.md should be saved
      // process.cwd() turns the current working directory as a string
      const filePath = path.join(process.cwd(), "sample", "README.md");

      // Write the generated README content to a file
      fs.writeFile(filePath, readmeContent, (err) => {
        if (err) {
          console.error("Error while creating README.md:", err);
        } else {
          console.log("README.md created successfully!");
        }
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
// reset and start the prompts
init();
