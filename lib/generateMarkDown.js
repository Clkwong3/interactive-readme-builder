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
      `- ${data.includeContactInfo ? "[Contact-Me](#contact-me)\n" : ""}` +
      `${renderLicenseLink(data.license)}`
    : "" // If renderLicenseLink is false, include nothing
}

## Installation
${data.installation}

## Usage
${data.usage}

## Test
${data.test}

${
  data.includeCredits
    ? // If includeCredits is true, include the following:
      `## Credits\n
Thanks to everyone who helped with this project:\n\n${data.contributors
        .split(",")
        .reduce((result, item, index, array) => {
          // (index % 2 === 0) checks if the current index is even
          if (index % 2 === 0) {
            // (item.trim()) trims any extra spaces from the name,
            const name = item.trim();
            // (array[index + 1].trim()) take the link out of the array and trim any extra space
            const link = array[index + 1].trim();
            // (.push(`- [${name}](${link})`)) formats the name and link into a Markdown-style link
            result.push(`- [${name}](${link})`);
          }
          //returns the updated result array
          return result;
        }, []) // initialize with an empty array
        .join("\n")}`
    : "" // If includeCredits is false, include nothing
}

${
  data.includeLinks
    ? // If includeLinks is true, include the following:
      `## Links\n
Here are some useful links for this project:\n\n${data.links
        .split(";")
        .map((item) => {
          const [description, customLinkText, linkURL] = item.trim().split(",");
          return `- ${description.trim()}: [${customLinkText.trim()}](${linkURL.trim()})`;
        })
        .join("\n")}`
    : "" // If includeLinks is false, include nothing
}
    
${
  data.includeContactInfo
    ? // If includeContactInfo is true, include the following:
      `## Contact-Me\nIf you encounter any issues, please report them on the project's GitHub repository.\n
${
  data.email ? `You can reach out to me via [email](${data.email}).\n` : "" // If includeContactInfo is false, include nothing
} 
${
  data.github
    ? `You can also connect with me on [GitHub](https://github.com/${data.github}).\n`
    : "" // If includeContactInfo is false, include nothing
}`
    : "" // If includeContactInfo is false, include nothing
}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateReadMe;
