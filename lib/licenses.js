// Render license badge or return an empty string if there's no license
function renderLicenseBadge(license) {
  if (license === "N/A") return "";

  // Define license badge URLs with corresponding colors
  let licenseBadge = "";

  switch (license) {
    case "Apache 2.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Apache%202.0-red.svg)";
      break;
    case "MIT":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-MIT-blue.svg)";
      break;
    case "BSD 3":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-BSD%203-green.svg)";
      break;
    case "Boost 1.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Boost%201.0-yellow.svg)";
      break;
    case "CCZ 1.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-CC0%201.0%20Universal-lightgrey.svg)";
      break;
    case "EPL 2":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-EPL%202.0-yellowgreen.svg)";
      break;
    case "GNU GPL 3.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-GNU%20GPL%203.0-orange.svg)";
      break;
    case "GNU AGPL 3.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-GNU%20AGPL%203.0-orange.svg)";
      break;
    case "GNU LGPL 2.1":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-GNU%20LGPL%202.1-orange.svg)";
      break;
    case "Mozilla 2.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Mozilla%202.0-yellow.svg)";
      break;
  }

  return licenseBadge;
}

// Returns the license link or return an empty string if there's no license
function renderLicenseLink(license) {
  if (license === "N/A") return "";
  return `- [License](#license)`;
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
