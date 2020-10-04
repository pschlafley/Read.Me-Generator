// function to generate markdown for README
function generateMarkdown(data) {

  const newLicenseName = data.license.replace(/ /g, "%20")

  return `
  # ${data.title}

  ![GitHub license](https://img.shields.io/badge/license-${newLicenseName}-blue.svg)
  
  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [${data.creditsTitle}](#${data.creditsTitle})
  * [License](#license)


  ## Installation
  ${data.installation}
  
  
  ## Usage
  ${data.usage}
  
  ![${data.screenshotsAlt || ''}] (${data.screenshotFilePath || ''})

  ## ${data.creditsTitle || ''}
  ${data.credits || ''}
  
  ## License
  Copyright (c) ${data.license}

  ## Tests
`;
}

module.exports = generateMarkdown;
