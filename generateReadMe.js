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
  } = answers;

  let readmeContent = `# ${title}\n\n${licenseBadge(
    String(license).trim()
  )}\n\n`;
  // added .trim() so the badge should appear
  // String(license) to convert the value into a string so .trim() could work
  // not toString(license)

  // Description
  readmeContent += "## Description\n";
  readmeContent += `${description}\n\n`;

  // Table of Contents
  readmeContent += "## Table of Contents\n";
  readmeContent += "- [Installation](#installation)\n";
  readmeContent += "- [Usage](#usage)\n";
  readmeContent += "- [Credits](#credits)\n";
  readmeContent += "- [Test](#test)\n";
  readmeContent += "- [Contact-Me](#contact-me)\n";
  readmeContent += "- [License](#license)\n\n";

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

  // Contact-Me
  readmeContent += "## Contact-Me\n";
  readmeContent += `If you encounter any issues, please report them on the project's GitHub repository or contact me via [email](${email}) or my GitHub Account [${github}](https://github.com/${github}/).\n\n`;

  // License
  readmeContent += "## License\n";
  readmeContent += `All rights reserved. Licensed under the ${license} license.`;

  return readmeContent;
}

// Get the license badge img based on user's choice
function licenseBadge(license) {
  if (license !== "none") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

module.exports = generateReadMe;