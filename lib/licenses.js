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

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};