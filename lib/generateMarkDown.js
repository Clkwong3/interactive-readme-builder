// Modules
const {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
} = require("../lib/licenses.js");

// Generate README content based on user's input
function generateReadMe(data) {
  // Create the README template
  const readmeTemplate = `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents\n${
    data.includeTableOfContents
      ? `- [Installation](#installation)\n` +
        `- [Usage](#usage)\n` +
        `- [Test](#test)\n` +
        // If include---- is true, include the following:
        `${data.includeLinks ? `- [Links](#links)\n` : ""}` +
        `${data.includeCredits ? `- [Credits](#credits)\n` : ""}` +
        `${data.includeContactInfo ? `- [Contact Me](#contact-me)\n` : ""}` +
        `${
          data.license !== "N/A" && data.license !== "Unlicense"
            ? `${renderLicenseLink(data.license)}`
            : ""
        }`
      : ""
  }

## Installation
${data.installation
  .split("\n")
  .map((item) => `- ${item}`)
  .join("\n")}
  

## Usage
${data.usage}

## Test
${data.test}

${
  data.includeCredits
    ? `## Credits\n
Thanks to everyone who helped with this project:\n\n${data.contributors
        .split(",")
        .reduce((result, item, index, array) => {
          if (index % 2 === 0) {
            const name = item.trim();
            const link = array[index + 1].trim();
            result.push(`- [${name}](${link})`);
          }
          return result;
        }, [])
        .join("\n")}`
    : ""
}

${
  data.includeLinks
    ? `## Links\n
Here are some useful links for this project:\n\n${data.links
        .split(",")
        .reduce((result, item, index, array) => {
          if (index % 3 === 0) {
            const description = item.trim();
            const customLinkText = array[index + 1].trim();
            const linkURL = array[index + 2].trim();
            result.push(`- ${description}: [${customLinkText}](${linkURL})`);
          }
          return result;
        }, [])
        .join("\n")}`
    : ""
}
    
${
  data.includeContactInfo
    ? `## Contact Me\nIf you encounter any issues, please report them on the project's GitHub repository.\n
${data.email ? `You can reach out to me via [email](${data.email}).` : ""} 
${
  data.github
    ? `You can also connect with me on [GitHub](https://github.com/${data.github}).\n`
    : ""
}`
    : ""
}

${
  data.license !== "N/A" && data.license !== "Unlicense"
    ? `## License\n\nAll rights reserved. Licensed under the ${
        data.license === "Other" ? "Custom License" : data.license
      } license.`
    : ""
}
`;

  return readmeTemplate;
}

module.exports = generateReadMe;
