// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var returnString = ''
  if (license.includes('ISC')){
    returnString += "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) "
  } 
   if (license.includes('GNU GPLv3')){
    returnString += "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }  
  if (license.includes('MIT')){
    returnString += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } 
  if (license.includes('Mozilla Public License 2.0')){
    returnString += "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"}
  return returnString
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var returnLink = ''
  var index = 1
  if (license.includes('ISC')){
    returnLink += index +". [ISC](https://opensource.org/licenses/ISC)\n"
    index++
    
  } 
   if (license.includes('GNU GPLv3')){
    returnLink += index +". [GNU GPLv3](https://opensource.org/licenses/GPL-3.0)\n"
    index++
  }  
  if (license.includes('MIT')){
    returnLink += index + ". [MIT](https://opensource.org/licenses/MIT)\n"
    index++
  } 
  if (license.includes('Mozilla Public License 2.0')){
    returnLink += index + ". [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)\n"
    index++
    }
  return returnLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Licensing](#licensing)
  4. [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Licensing
  ${renderLicenseLink(data.license)}
  ## Questions
  - email: ${data.email}
  - github: ${data.github}
`;
}

export default generateMarkdown;
