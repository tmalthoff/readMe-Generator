// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

  ##Description
  ${data.description}

  ##Table of Contents
  


`;
}

module.exports = generateMarkdown;
