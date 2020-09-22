// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})


  ## Description
  ${data.description}

  ## Table of Contents
  [title](#title)
  [description](#description)
  [installation](#installation)
  [usage](#usage)
  [license](#license)
  [contriubting](#contributing)
  [tests](#tests)
  [questions](#questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  



`;
}

module.exports = generateMarkdown;
