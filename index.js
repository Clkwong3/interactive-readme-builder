const inquirer = require("inquirer");
const fs = require("fs");

console.log("ReadMe Generator is running");

// Generate the questions in inquirer
// take out the questions and put it in const later
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "Why is this project made? What does it do?",
    },
    {
      // ask if user wants a table of contents
      type: "confirm",
      name: "includeTableOfContents",
      message: "Do you want to include a table of contents?",
      default: true,
    },
    {
      type: "input",
      name: "installation",
      message: "What do users need to do to install this application?",
    },
    {
      type: "input",
      name: "usage",
      message: "What are the instructions for using this application?",
    },
    {
      // List of license
      // could be checklist
      type: "list",
      name: "license",
      message: "Which license was used?",
      choices: [
        "MIT",
        "GPL",
        "AGPL",
        "LGPL",
        "Apache",
        "Mozilla Public",
        "Boost Software",
        "Unlicense",
        "Unlisted",
        "N/A",
      ],
    },
    {
      type: "input",
      name: "contributors",
      message: "Who has contributed to this project?",
    },
    {
      type: "input",
      name: "test",
      message: "How can users test this application?",
    },
    {
      type: "input",
      name: "github",
      message: "GitHub Account Name:",
    },
    {
      type: "input",
      name: "email",
      message: "Email Address:",
    },
  ])
  .then((answers) => {
    const {
      // could bring it outside?
      title,
      description,
      includeTableOfContents,
      installation,
      usage,
      license,
      contributors,
      test,
      github,
      email,
    } = answers;
    // Redo the function. Don't like it
    // Create the README content based on user's choices
    // Maybe need one for contacts?
    let readmeContent = `# ${title}\n\n${description}\n\n`;
    if (includeTableOfContents) {
      readmeContent += "## Table of Contents\n\n";
    }
  });
