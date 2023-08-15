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
      type: "input",
      name: "content",
      message: "Table of Content",
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
  .then([
    // could be in a const
    {
      title,
      license,
      description,
      installation,
      usage,
      contributors,
      git,
      email,
    },
    createReadMe(),
  ]);
// create a function to create the ReadMe Template

// Create ReadMe using fs
function createReadMe(fileName, data) {
  fs.writeFile(
    `./${fileName.toLowerCase().split("").join[""]}.md`,
    data,
    (err) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        console.log("ReadMe has been created");
      }
    }
  );
}
