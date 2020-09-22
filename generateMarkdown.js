// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})


  ##Description
  ${data.description}

  ##Table of Contents



`;
}

module.exports = generateMarkdown;
