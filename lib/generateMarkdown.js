// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license!=="none") {
    return badges[license]
  }
  return ""
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const badgesLink = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license!=="none") {
    return badgesLink[license]
  }
  return ""
  }
  

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const section = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
  GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
}

  //Check if license exists
  if (license!=="none") {
    return section[license]
  }
  return ""
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const fileContent = 
  `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Project Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  To install the required dependencies, run the following command: 

  ${data.installation}

  ## Usage
  ${data.usage}
  

  ## License
  This project is under the ${data.license} license:
  ${renderLicenseSection(data.license)}

  Please refer to license in the repo.


  ## Contributors
  Sources viewed to help in the development of the app include: 

  ${data.contributing}


  ## Tests
  To run tests, use the command: 
  
  ${data.tests}

  ## Questions
  If you have any questions about the repo, you can contact me on email: ${data.email}

  You can also open an issue to contact me or find more of my work at: ${data.github} (https://github.com/${data.github})
`;
console.log(fileContent)
return fileContent
}

module.exports = generateMarkdown;
