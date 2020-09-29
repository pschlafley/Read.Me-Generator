// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)


  ## Installation


  ## Usage


  ## Credits


  ## License


  ## Badges


  ## Contributing

  ## Tests
`;
}

module.exports = generateMarkdown;
