// Make the ReadMe based on user's answers
function generateReadMe(answers) {
  const {
    title,
    description,
    installation,
    usage,
    credits,
    test,
    github,
    email,
    license,
    includeTableOfContents,
  } = answers;

  let licenseName = String(license).trim().replace(/\s+/g, "%20"); // replace white space with '%20
  let badgeUrl = `https://img.shields.io/badge/License-${licenseName}-blue.svg`; // put user choice in url

  // Title & License Badge
  let readmeContent = `# ${title}\n\n![License](${badgeUrl})\n\n`;

  // Description
  readmeContent += "## Description\n";
  readmeContent += `${description}\n\n`;

  // Only include the table of contents if the user wants it (hopefully)
  if (includeTableOfContents) {
    // Table of Contents
    let tableOfContents = "";
    tableOfContents += "## Table of Contents\n";
    tableOfContents += "- [Installation](#installation)\n";
    tableOfContents += "- [Usage](#usage)\n";
    tableOfContents += "- [Credits](#credits)\n";
    tableOfContents += "- [Test](#test)\n";
    tableOfContents += "- [Contact-Me](#contact-me)\n";
    tableOfContents += "- [License](#license)\n\n";

    readmeContent += tableOfContents;
  }

  // Installation
  readmeContent += "## Installation\n";
  readmeContent += `${installation}\n\n`;

  // Usage
  readmeContent += "## Usage\n";
  readmeContent += `${usage}\n\n`;

  // Credits
  readmeContent += "## Credits\n";
  readmeContent += `${credits}\n\n`;

  // Test
  readmeContent += "## Test\n";
  readmeContent += `${test}\n\n`;

  // Contact-Me Section
  let contactSection = "";
  if (email || github) {
    contactSection += "## Contact Me\n";
    if (email) {
      contactSection += `If you encounter any issues, please report them on the project's GitHub repository or contact me via [email](${email}).\n`;
    }
    if (github) {
      contactSection += `You can also reach out to me on my GitHub Account [${github}](https://github.com/${github}/).\n`;
    }
    contactSection += "\n";
  }
  readmeContent += contactSection;

  // License
  readmeContent += "## License\n";
  readmeContent += `All rights reserved. Licensed under the ${license} license.`;

  return readmeContent;
}

module.exports = generateReadMe;
