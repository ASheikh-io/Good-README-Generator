const badge = {
  "The MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "GPL v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "GPF v3": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "BSD 3": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "Mozilla Pulic License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![${badge[data.license]}]
 
  ## Table of Contents:
 
  * [Description](##Description)
  * [Application Use](##usage)
  * [Installation](##Installation)
  * [Test](##Test)
  * [License](##License)
  * [Contribute](##Contribute)
  * [Contact Developer](##Questions)
  
  ## Description: 
  ${data.description}

  ## Usage:
  ${data.usage}
  
  ## Istallation: ${data.installation}

  ## License:
  ${badge[data.license]}
  
  ## Contribution:

  ${data.contributions}

  ## Developer: 
  ${data.Name}

  ## Questions:
  Please contact me if you have any questions.
 
  email: [${data.email}](${data.email})
  
  github: [${data.userName}](https://www.github.com/${data.userName})
  `;
}



module.exports = generateMarkdown;