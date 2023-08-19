// Generate README content based on user answers
function generateMarkDown(answers) {
  const {
    title,
    description,
    installation,
    usage,
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

  // Only include the table of contents if the user wants it
  if (includeTableOfContents) {
    // Table of Contents
    let tableOfContents = "";
    tableOfContents += "## Table of Contents\n";
    tableOfContents += "- [Installation](#installation)\n";
    tableOfContents += "- [Usage](#usage)\n";
    tableOfContents += "- [Test](#test)\n";
    tableOfContents += "- [License](#license)\n";

    // Add Credits section to Table of Contents if yes
    if (answers.includeCredits && answers.contributors) {
      tableOfContents += "- [Credits](#credits)\n";
    }

    // Add Links section to Table of Contents if yes
    if (answers.includeLinks && answers.links) {
      tableOfContents += "- [Links](#links)\n";
    }

    // Add Contact Me section to Table of Contents if yes
    if (answers.includeContactInfo) {
      tableOfContents += "- [Contact Me](#contact-me)\n";
    }

    tableOfContents += "\n";
    readmeContent += tableOfContents;
  }

  // Installation
  readmeContent += "## Installation\n";
  readmeContent += `${installation}\n\n`;

  // Usage
  readmeContent += "## Usage\n";
  readmeContent += `${usage}\n\n`;

  // Test
  readmeContent += "## Test\n";
  readmeContent += `${test}\n\n`;

  // Credits
  if (answers.includeCredits && answers.contributors) {
    const contributorDetails = answers.contributors
      .split(",")
      .map((item) => item.trim());

    let creditSection = "";

    creditSection += "## Credits\n\n";
    creditSection += "Thanks to everyone who helped with this project:\n";

    for (let i = 0; i < contributorDetails.length; i += 2) {
      const name = contributorDetails[i];
      const link = contributorDetails[i + 1];

      creditSection += `- [${name}](${link})\n`;
    }
    creditSection += "\n";
    readmeContent += creditSection;
  }

  // Links
  if (answers.includeLinks && answers.links) {
    const linkDetails = answers.links.split(",").map((item) => item.trim());

    let linkSection = "";

    linkSection += "## Links\n\n";
    linkSection += "Here are some useful links for this project:\n";

    for (let i = 0; i < linkDetails.length; i += 3) {
      const linkDescription = linkDetails[i];
      const customLinkText = linkDetails[i + 1];
      const linkURL = linkDetails[i + 2];

      linkSection += `- ${linkDescription}: [${customLinkText}](${linkURL})\n`;
    }
    linkSection += "\n";
    readmeContent += linkSection;
  }

  // Contact Me
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

module.exports = generateMarkDown;
