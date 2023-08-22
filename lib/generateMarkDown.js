// Render license badge or return an empty string if there's no license
function renderLicenseBadge(license) {
  if (license === "N/A") return "";
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// Returns the license link or return an empty string if there's no license
function renderLicenseLink(license) {
  if (license === "N/A") return "";
  return "- [License](#license)";
}

// Create license section or return an empty string if there's no license
function renderLicenseSection(license) {
  if (license) {
    return `## License\n\nAll rights reserved. Licensed under the ${license} license.`;
  } else {
    return "";
  }
}

// ReadMe Template based on user's input
function generateReadMe(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents 
${
  data.includeTableOfContents
    ? // If includeTableOfContents is true, include the following:
      `- [Installation](#installation)\n` +
      `- [Usage](#usage)\n` +
      `- [Test](#test)\n` +
      // Include Links section in Table of Contents if user chose to include
      `- ${data.includeLinks ? "[Links](#links)\n" : ""}` +
      // If includeCredits is true, include the following:
      `- ${data.includeCredits ? "[Credits](#credits)\n" : ""}` +
      // If includeContactInfo is true, include the following:
      `- ${data.includeContactInfo ? "[Contact-Me](#contact-me)\n" : ""}\n` +
      `${renderLicenseLink(data.license)}`
    : "" // If renderLicenseLink is false, include nothing
}

## Installation
${data.installation}

## Usage
${data.usage}

## Test
${data.test}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateReadMe;
