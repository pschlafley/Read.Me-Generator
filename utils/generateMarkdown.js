// function to generate markdown for README
function generateMarkdown(data) {

  const newLicenseName = data.license.replace(/ /g, "%20")

  return `
  # ${data.title}

  ![GitHub license](https://img.shields.io/badge/license-${newLicenseName}-orange.svg)
  
  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation
  ${data.installation}
  
  
  ## Usage
  ${data.usage}
  
  ![${data.screenshotsAlt || ''}](${data.screenshotFilePath || ''})

  ## Credits
  ${data.credits || ''}
  
  ## License
  ${data.license}

  ## Contributing
  This app is licensed under ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions you can visit my github profile at <${data.githubprofile}>
  or you can email me at <${data.email}>
`;
}

module.exports = generateMarkdown;
